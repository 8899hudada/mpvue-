<template>
    <div class="swiper">
      <swiper
        :indicator-dots="true"
        indicator-color="#EA5A49"
        :autoplay="true"
        :interval="6000"
        :duration="1000"
        :circular="true"
      >
        <div v-for="(top, index1) in imgUrls" :key="index1">
          <swiper-item>
            <img
              @click="bookDetail(img)"
              class="slider-image"
              mode="aspectFit"
              v-for="img in top"
              :key="img.id"
              :src="img.image"
            >
          </swiper-item>
        </div>
      </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['tops'],
    data () {
      return {}
    },
    computed: {
      imgUrls () {
        let res = this.tops
        return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
      }
    },
    created () {

    },
    methods: {
      bookDetail (item) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.id
        })
      }
    },
    watch: {},
    components: {}
  }
</script>

<style lang="scss" scoped>
  .swiper {
    margin-top:10rpx;
    .slider-image {
      width: 33.33%;
      height: 250rpx;
    }
  }
</style>
