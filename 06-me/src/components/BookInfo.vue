<template>
    <div class="bookinfo">
      <div class="thumb">
        <img class="back"
             :src="info.image"
              mode="aspectFill"
        >
        <img
          class="img"
          :src="info.image"
          mode="aspectFit"
        >
        <div class="info">
          <div class="title">{{info.title}}</div>
          <div class="author">{{info.author}}</div>
        </div>
      </div>
      <div class="detail">
        <img :src="userinfo.image" class="avatar" mode="aspectFit">
        {{userinfo.name}}
        <div class="right text-primary">
          {{info.rate}}分
          <Rate :value="info.rate"></Rate>
        </div>
      </div>
      <div class="detail">
        {{info.publisher}}
        <div class="right">
          {{info.price}}
        </div>
      </div>
      <div class="tags">
        <div class="badge" :key="tag" v-for="tag in info.tags">{{tag}}</div>
      </div>
      <div class="summary">
        <p :key="i" v-for="(sum, i) in info.summary">{{sum}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Rate from '@/components/Rate'
  export default {
    props: ['info'],
    data () {
      return {}
    },
    computed: {
      userinfo () {
        return this.info.user_info || {}
      }
    },
    created () {

    },
    methods: {},
    watch: {},
    components: {
      Rate
    }
  }
</script>

<style lang="scss">
  .bookinfo {
    font-size: 14px;
    padding: 10rpx;
    .badge {
      display: inline-block;
      margin: 10rpx;
      padding: 10rpx;
      border-radius: 10rpx;
      border:1rpx #EA5A49 solid;
      color:#EA5A49;
    }
    .summary {
      margin-top: 20rpx;
      p{
        text-indent: 2em;
        font-size: 14px;
      }
    }
    .right {
      float: right;
    }
    .detail {
      padding: 5px 10px;
      .avatar {
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .thumb {
      width: 750rpx;
      height: 450rpx;
      overflow: hidden;
      position: relative;
      .back {
        filter: blur(15px);
        width: 100%;
      }
      .img {
        position: absolute;
        width: 100%;
        height: 300rpx;
        left: 0;
        top: 30rpx;
      }
      .info {
        color: #EA5A49;
        position: absolute;
        width: 100%;
        left: 0;
        top: 330rpx;
        text-align: center;
        .title {
          font-size: 20px;
        }
        .author {
          font-size: 14px;
        }
      }
    }
  }
</style>
