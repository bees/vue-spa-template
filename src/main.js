import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App'
import Main from './components/Main'

Vue.use(Router)

var router = new Router

Vue.config.debug = true

router.map({
  '/': {
    component: Main
  }
})

router.start(App, 'app')
