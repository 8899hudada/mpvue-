<template>
    <div>
      <TopSwiper :tops="tops"></TopSwiper>
      <Card v-for="(book, index) in books" :key="index" :book="book"></Card>
      <p class="text-footer" v-if="!more">
        -- 没有更多图书 --
      </p>
    </div>
</template>

<script>
  import {get} from '@/util'
  import Card from '@/components/Card'
  import TopSwiper from '@/components/TopSwiper'
  export default {
    data () {
      return {
        books: [],
        page: 0,
        more: true,
        tops: []
      }
    },
    computed: {},
    created () {

    },
    methods: {
      async getList (init) {
        if (init) {
          this.page = 0
          this.more = true
        }
        wx.showNavigationBarLoading()
        const bookList = await get('/weapp/booklist', {page: this.page})
        console.log(bookList)
        if (bookList.list.length < 10 && this.page > 0) {
          this.more = false
        }
        if (init) {
          this.books = bookList.list
          wx.stopPullDownRefresh()
        } else {
          this.books = this.books.concat(bookList.list)
        }
        wx.hideNavigationBarLoading()
      },
      async getTop () {
        const tops = await get('/weapp/top')
        this.tops = tops.list
        console.log(this.tops)
      }
    },
    watch: {},
    components: {
      Card,
      TopSwiper
    },
    mounted () {
      this.getList(true)
      this.getTop()
    },
    onPullDownRefresh () {
      this.getList(true)
      this.getTop()
    },
    onReachBottom () {
      if (!this.more) {
        return false
      }
      this.page += 1
      this.getList()
    }
  }
</script>

<style lang="scss">
</style>
