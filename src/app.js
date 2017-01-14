/**
 * Created by rxf on 17/1/14.
 */
import Vue from 'vue' ;
import App from './app.vue' ;

const app = new Vue({ // eslint-disable-line
    render: h => h(App)
});

app.$mount('#app')