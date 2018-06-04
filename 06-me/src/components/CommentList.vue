<template>
    <div class="comment-list">
      <div class="page-title" v-if="comments.length">
        评论
      </div>
      <div class="comment"
           v-for="(comment, i) in comments"
           :key="i"
           @click="handleClick(comment)"
      >
          <div class="user">
            <div class="inline">
              <img :src="comment.image"
                   class="avatar"
                   mode="aspectFit"
              >
              {{comment.title}}
            </div>
            <div class="right">
              {{comment.location || '未知地点'}}
              <span class="text-primary">--</span>
              {{comment.phone || '未知号码'}}
            </div>
          </div>
          <div class="content">
            {{comment.comment}}
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['comments', 'type'],
    data () {
      return {}
    },
    computed: {},
    created () {

    },
    methods: {
      handleClick (comment) {
        if (this.type === 'user') {
          wx.navigateTo({
            url: '/pages/detail/main?id=' + comment.bookid
          })
        }
      }
    },
    watch: {},
    components: {}
  }
</script>

<style lang="scss">
  .comment-list {
    background-color: #eee;
    font-size: 14px;
    .comment {
      background: white;
      margin-bottom: 20rpx;
      padding: 10rpx 40rpx;
      .content {
        margin: 10rpx 0;
      }
      .user{
        .inline {
          display: inline;
          .avatar{
            width: 40rpx;
            height: 40rpx;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
