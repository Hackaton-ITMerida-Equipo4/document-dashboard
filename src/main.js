/* Styles */
import '@/scss/main.scss'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

/* Router & Store */
import router from './router'
import store from './store'

/* Vue. Main component */
import App from './App.vue'

import './utils/filter'

/* Default title tag */
const defaultDocumentTitle = 'Syncrony Bulma Buefy'

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)
  store.dispatch('asideDesktopOnlyToggle', false)

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
