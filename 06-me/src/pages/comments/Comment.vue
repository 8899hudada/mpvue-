<template>
    <div class="container">
      <div v-if="userinfo.openId">
        <CommentList type="user" :comments="comments"></CommentList>
        <div class="page-title">我的图书</div>
        <Card v-for="book in bookList" :key="book.id" :book="book"></Card>
        <div v-if="!bookList.length">暂时没有添加图书</div>
      </div>
    </div>
</template>

<script>
  import CommentList from '@/components/CommentList'
  import Card from '@/components/Card'
  import {get} from '@/util'
  export default {
    data () {
      return {
        bookList: [],
        comments: [],
        userinfo: {}
      }
    },
    computed: {},
    created () {

    },
    methods: {
      async getComments () {
        const comments = await get('/weapp/commentlist', {
          openid: this.userinfo.openId
        })
        this.comments = comments.list
      },
      async getBooks () {
        const bookList = await get('/weapp/booklist', {
          openid: this.userinfo.openId
        })
        this.bookList = bookList.list
      },
      init () {
        wx.showNavigationBarLoading()
        this.getComments()
        this.getBooks()
        wx.hideNavigationBarLoading()
      }
    },
    onPullDownRefresh () {
      this.init()
      wx.stopPullDownRefresh()
    },
    watch: {},
    components: {
      CommentList,
      Card
    },
    onShow () {
      if (!this.userinfo.openId) {
        let userinfo = wx.getStorageSync('userinfo')
        if (userinfo) {
          this.userinfo = userinfo
          this.init()
        }
      }
    }
  }
</script>

<style>
</style>
