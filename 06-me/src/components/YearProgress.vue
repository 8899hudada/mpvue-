<template>
    <div>
        <div class="progressbar">
          <progress :percent="percent" activeColor="#EA5A49" />
          <p>{{year}}已经过去了{{days}}天，{{percent}}%</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    computed: {
      year () {
        return new Date().getFullYear()
      },
      days () {
        let start = new Date()
        start.setMonth(0)
        start.setDate(1)
        let offset = new Date().getTime() - start.getTime()
        return parseInt(offset / 1000 / 60 / 60 / 24) + 1
      },
      percent () {
        return ((this.days / this.getDayOfYear()) * 100).toFixed(1)
      }
    },
    created () {

    },
    methods: {
      isLeapYear () {
        const year = new Date().getFullYear()
        if (year % 400 === 0) {
          return true
        } else if (year % 4 === 0 && year % 100 !== 0) {
          return true
        } else {
          return false
        }
      },
      getDayOfYear () {
        return this.isLeapYear ? 366 : 365
      }
    },
    watch: {},
    components: {}
  }
</script>

<style lang="scss">
  .progressbar {
    width: 100%;
    margin-top: 10rpx;
    margin-bottom: 40rpx;
    text-align: center;
    progress {
      margin-bottom: 10px;
    }
  }
</style>
