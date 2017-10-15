/**
 * Created by Administrator on 2017/4/9.
 */
import Vue from 'Vue'//引入vue模块
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import app from '../components/app.vue'
import index from '../components/index.vue'
import list from '../components/list.vue'
import article from '../components/article.vue'
import login from '../components/login.vue'
import regist from '../components/regist.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

//构建vue路由
var router = new VueRouter({
    routes : [
        {
            path : '/',
            component : app
        },
        {
            path : '/index',
            component : index,
            children : [
                {
                    path : '/login',
                    component : login
                },
                {
                    path : '/regist',
                    component : regist
                }
            ]
        },
        {
            path : '/list/:id',
            component : list
        },
        {
            path : '/article',
            component : article
        }
    ]
});

//构建vue实例
new Vue({
    el: '#wrap',
    render : function(createElement){
        return createElement(app);
    },
    router : router
});
