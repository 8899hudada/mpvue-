<template>
    <div>
       <BookInfo :info="info"></BookInfo>
      <CommentList :comments="comments"></CommentList>
      <div class="comment" v-if="showAdd">
        <textarea v-model="comment"
                  class="textarea"
                  :maxlength="100"
                  placeholder="请输入图书短评"
        ></textarea>
        <div class="location">
          地理位置：
          <switch color="#EA5A49" :checked="location" @change="getGeo"></switch>
          <span class="text-primary lo_msg">{{location}}</span>
        </div>
        <div class="phone">
          手机型号：
          <switch color="#EA5A49" :checked="phone" @change="getPho"></switch>
          <span class="text-primary">{{phone}}</span>
        </div>
        <button class="btn" @click="addComment">
          评论
        </button>
      </div>
      <div v-else class="text-footer">
        未登录或者已经评论过了
      </div>
      <button open-type="share" class="btn">转发</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import BookInfo from '@/components/BookInfo'
  import {get, post, showModal} from '@/util'
  import CommentList from '@/components/CommentList'
  export default {
    data () {
      return {
        comments: [],
        userinfo: {},
        location: '',
        phone: '',
        bookid: '',
        info: {},
        comment: ''
      }
    },
    computed: {
      showAdd () {
        if (!this.userinfo.openId) {
          return false
        }
        if (this.comments.filter(v => v.openid === this.userinfo.openId).length) {
          return false
        }
        return true
      }
    },
    created () {

    },
    methods: {
      async getComments () {
        const comments = await get('/weapp/commentlist', {bookid: this.bookid})
        this.comments = comments.list
      },
      async getDetail () {
        const info = await get('/weapp/bookdetail', {id: this.bookid})
        this.info = info
        wx.setNavigationBarTitle({
          title: info.title
        })
      },
      getGeo (e) {
        const ak = 'ks53v5m2s5Mu85dho0kvh8XbNOlUqT8r'
        let url = 'http://api.map.baidu.com/geocoder/v2/'
        let that = this
        if (e.target.value) {
          wx.getLocation({
            success: function (res) {
              console.log(res)
              wx.request({
                url,
                data: {
                  ak,
                  location: `${res.latitude},${res.longitude}`,
                  output: 'json'
                },
                success: respons => {
                  console.log(respons)
                  if (respons.statusCode === 200) {
                    that.location = respons.data.result.formatted_address
                  } else {
                    that.location = '获取地理位置出错'
                  }
                }
              })
            }
          })
        } else {
          this.location = ''
        }
      },
      getPho (e) {
        if (e.target.value) {
          const phoneInfo = wx.getSystemInfoSync()
          this.phone = phoneInfo.model
        } else {
          this.phone = ''
        }
      },
      async addComment () {
        if (!this.comment) {
          showModal('失败', '评论不能为空')
          return
        }
        const data = {
          openid: this.userinfo.openId,
          bookid: this.bookid,
          comment: this.comment,
          phone: this.phone,
          location: this.location
        }
        console.log(data)
        try {
          await post('/weapp/addcomment', data)
          this.comment = ''
          this.getComments()
        } catch (e) {
          showModal('失败', e.msg)
        }
      }
    },
    watch: {},
    components: {
      BookInfo,
      CommentList
    },
    mounted () {
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
      this.getComments()
      const userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment {
    width: 740rpx;
    margin: 10rpx auto;
    padding: 10rpx 10rpx;
    .textarea {
      border: 1rpx #EA5A49 solid;
      margin: 0 auto;
    }
    .location {
      margin-top: 20rpx;
      padding: 10rpx 20rpx;
      .lo_msg {
        font-size: 12px;
      }
    }
    .phone {
      margin-top: 20rpx;
      padding: 10rpx 20rpx;
    }
  }
</style>
