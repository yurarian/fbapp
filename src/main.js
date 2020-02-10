import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyC8hIwAUZJ-CgzCgvgPJj1jlq1ZWQyxAU0',
  authDomain: 'fbapp-448b7.firebaseapp.com',
  databaseURL: 'https://fbapp-448b7.firebaseio.com',
  projectId: 'fbapp-448b7',
  storageBucket: 'fbapp-448b7.appspot.com',
  messagingSenderId: '98075592537',
  appId: '1:98075592537:web:531d440b13a870e9b56e48'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
