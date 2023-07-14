import { createRouter, createWebHistory } from 'vue-router'
import  HomePage from '../components/HomePage'
import BalmCard from '../components/BalmCard'



const routes = [
  {
    path: '/vue-material',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/vue-material/card',
    name: 'BalmCard',
    component: BalmCard
  }

]

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),

  routes 
});



export default router
