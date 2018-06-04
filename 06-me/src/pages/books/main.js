import Vue from 'vue'
import Books from './Book.vue'

const app = new Vue(Books)
app.$mount()

export default {
  config: {
    enablePullDownRefresh: true
  }
}

