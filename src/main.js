import Vue from 'vue'
import App from './App.vue'
import ionic from '@ionic/vue'
import VueRouter from 'vue-router'
import router from './router'
import firebase from "firebase";
Vue.use(ionic);
Vue.use(firebase);
Vue.use(VueRouter);
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyB0hnZuDfSfpxPj86H-drZRSCBz-bm0oAQ",
  authDomain: "entreletras-841ff.firebaseapp.com",
  databaseURL: "https://entreletras-841ff.firebaseio.com",
  projectId: "entreletras-841ff",
  storageBucket: "entreletras-841ff.appspot.com",
  messagingSenderId: "792002298661",
  appId: "1:792002298661:web:09bb399b36b44990"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(firebase);

new Vue({
  router,
  db,
  render: h => h(App),
}).$mount('#app');
