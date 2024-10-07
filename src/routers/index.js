import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductDetail from "@/views/ProductDetail.vue";
import Profile from "@/views/Profile.vue";
import ProductView from "@/views/ProductView.vue";
import ProductReview from "@/views/ProductReview.vue";
import Bai1 from "@/views/baitap/Bai1.vue";
import Bai2 from "@/views/baitap/Bai2.vue";
import Bai3 from "@/views/baitap/Bai3.vue";
import Bai4 from "@/views/baitap/Bai4.vue";
import Bai5 from "@/views/baitap/Bai5.vue";
import Bai6 from "@/views/baitap/Bai6.vue";
import Detail from "@/views/baitap/bai7/Detail.vue";
import Product from "@/views/baitap/bai7/Product.vue";
import Home from "@/views/baitap/bai7/Home.vue";
import Dashboard from "@/views/baitap/bai8/Dashboard.vue";
import Account from "@/views/baitap/bai8/Account.vue";
import Product from "@/views/baitap/bai8/Product.vue";
import ListUser from "@/views/baitap/bai9/ListUser.vue";
import UserDetail from "@/views/baitap/bai9/UserDetail.vue";
import EmployeeDetail from "@/views/baitap/bai10/EmployeeDetail.vue";
import EmployeeProfile from "@/views/baitap/bai10/EmployeeProfile.vue";
import EmployeeProjects from "@/views/baitap/bai10/EmployeeProjects.vue";
import EmployeeContact from "@/views/baitap/bai10/EmployeeContact.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/product-detail/:id",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/profile/:name",
    name: "profile",
    component: Profile,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    children: [
      {
        path: "detail",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "review",
        name: "product-review",
        component: ProductReview,
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: Bai1,
  },
  {
    path: '/contact', // Đường dẫn cho trang Liên hệ
    name: 'Contact',
    component: Bai2,
  },
  { 
    path: '/register', 
    name: 'Register',
    component: Bai3, 
  },
  { 
    path: '/login',
    name: 'Login', 
    component: Bai4, 
  },
  {
    path: '/:catchAll(.*)', // Route để bắt tất cả các đường dẫn không hợp lệ
    name: 'NotFound',
    component: Bai5,
  },
  { 
    path: '/about', 
    name: "About",
    component: Bai6,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/users',
    name: 'ListUser',
    component: ListUser,
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
  },
  {
    path: '/employees',
    name: 'ListEmployee',
    component: ListEmployee,
  },
  {
    path: '/employees/:id',
    name: 'EmployeeDetail',
    component: EmployeeDetail,
    children: [
      {
        path: 'profile',
        component: EmployeeProfile,
      },
      {
        path: 'projects',
        component: EmployeeProjects,
      },
      {
        path: 'contact',
        component: EmployeeContact,
      },
    ],
  },
];

// Tạo cơ chế định tuyến cho ứng dụng
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Đẩy ra bên ngoài cho ứng dụng sử dụng
export default router;