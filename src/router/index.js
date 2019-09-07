import Vue from 'vue';
import vueRouter from 'vue-router';

const Home = ()=> import('../views/home/Home.vue');
const Cart = ()=> import('../views/cart/cart.vue');
const Category = ()=> import('../views/category/category.vue');
const Profile = ()=> import('../views/profile/profile.vue');
const Detail = ()=>import('../views/detail/Detail.vue');
  
Vue.use(vueRouter);

const routes = [
    { 
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {   path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:id',
        component:Detail
    }
];
//创建router
const router = new vueRouter({
    routes,
    mode:'history'
});

export default router;