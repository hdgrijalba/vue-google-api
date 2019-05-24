import App from './App.vue'
// import VueGoogleApi from '../index.js'

function VueGoogleApi (Vue) {
  Vue.config.productionTip = false

  const ddocs = process.env.VUE_APP_DDOCS
  Vue.use(VueGoogleApi, {
    apiKey: process.env.VUE_APP_APIKEY,
    clientId: process.env.VUE_APP_CLIENTID,
    discoveryDocs: ddocs ? ddocs.split(',') : [],
    scope: process.env.VUE_APP_SCOPE
  })

  new Vue({
    render: h => h(App)
  }).$mount('#app')
}

export default VueGoogleApi

/*
new Vue({
  render: h => h(App)
}).$mount('#app')*/
