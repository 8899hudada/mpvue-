import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['^pages/books/main'],
    'tabBar': {
      selectedColor: '#EA5A49',
      list: [{
        'pagePath': 'pages/books/main',
        'text': '图书',
        'iconPath': 'static/img/book.png',
        'selectedIconPath': 'static/img/book-active.png'
      }, {
        'pagePath': 'pages/comments/main',
        'text': '评论',
        'iconPath': 'static/img/todo.png',
        'selectedIconPath': 'static/img/todo-active.png'
      }, {
        'pagePath': 'pages/me/main',
        'text': '我',
        'iconPath': 'static/img/me.png',
        'selectedIconPath': 'static/img/me-active.png'
      }]
    },
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5A49',
      'navigationBarTitleText': '蜗牛图书',
      'navigationBarTextStyle': 'light'
    }
  }
}
