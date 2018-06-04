<template>
    <div class="rate">
      <span>☆☆☆☆☆</span>
      <span class="hollow" :style="style">★★★★★</span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      value: {
        type: [Number, String],
        default: '0'
      }
    },
    data () {
      return {}
    },
    computed: {
      style () {
//        return `width:${this.value / 2}em`
        return `width:${this.value * 10}%`
      }
    },
    created () {

    },
    methods: {},
    watch: {},
    components: {}
  }
</script>

<style lang="scss" scoped>
  .rate {
    position: relative;
    display: inline-block;
    .hollow {
      position: absolute;
      display: inline-block;
      top: 0;
      left: 0;
      width: 0;
      overflow: hidden;
    }
  }
</style>
