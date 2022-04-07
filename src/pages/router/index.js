import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

export const routes = new VueRouter({
    routes: [
        {
            path: '/detail-product',
            name: '/detail-product',
            component: () => import('@/pages/ProductDetail.vue')
        }
       
    ]
});