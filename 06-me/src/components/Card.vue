<template>
  <a :href="detailUrl">
    <div>
      <div class="book-card">
        <div class="thumb" @click.stop="preview">
          <img :src="book.image"
               class="image"
               mode="aspectFit"
          >
        </div>
        <div class="detail">
          <div class="row text-primary">
            <div class="right">
              {{book.rate}}
              <Rate :value='book.rate'></Rate>
            </div>
            <div class="left">
              {{book.title}}
            </div>
          </div>
          <div class="row">
            <div class="right text-primary">
              浏览量：{{book.count}}
            </div>
            <div class="left">
              {{book.author}}
            </div>
          </div>
          <div class="row">
            <div class="right">
              {{book.user_info.nickName}}
            </div>
            <div class="left">
              {{book.publisher}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script type="text/ecmascript-6">
  import Rate from '@/components/Rate'
  export default {
    props: ['book'],
    data () {
      return {}
    },
    computed: {
      detailUrl () {
        return '/pages/detail/main?id=' + this.book.id
      }
    },
    created () {

    },
    methods: {
      preview () {
        wx.previewImage({
          current: this.book.image,
          urls: [this.book.image]
        })
      }
    },
    watch: {},
    components: {
      Rate
    }
  }
</script>

<style lang="scss" scoped>
  .book-card {
    padding: 10rpx;
    overflow: hidden;
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    font-size: 14px;
    .thumb {
      width: 180rpx;
      height: 180rpx;
      float: left;
      margin: 0 auto;
      overflow: hidden;
      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .detail {
      margin-left: 200rpx;
      .row {
        line-height: 40rpx;
        margin-bottom: 6rpx;
      }
      .right {
        float: right;
      }
      .left {
        margin-right: 160rpx;
      }
    }
  }
</style>
