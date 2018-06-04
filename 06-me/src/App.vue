<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  async  created () {
    console.log('小程序启动了')
  }
}
</script>

<style>
  .right {
    float: right;
  }
  .page-title {
    padding-left: 40rpx;
    background: #eee;
    line-height: 80rpx;
    font-size: 14px;
  }
  .text-footer {
    text-align: center;
    font-size: 12px;
    margin-bottom: 10rpx;
  }
  .text-primary {
    color: #EA5A49;
  }
  .btn {
    color:white;
    background-color: #EA5A49;
    margin-bottom: 10px;
    padding-left: 15px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
  }
  .btn:active {
    background-color: #EA5A49;
  }
</style>
