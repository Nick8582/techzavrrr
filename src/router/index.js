import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/pages/HomePage";
import CartPage from "@/pages/CartPage";
import ProductPage from "@/pages/ProductPage";
import OrderPage from "@/pages/OrderPage";
import NotFoundPage from "@/pages/NotFoundPage";
import OrderInfoPage from "@/pages/OrderInfoPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage,
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPage,
  },
  {
    path: '/order/:id',
    name: 'orderInfo',
    component: OrderInfoPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
