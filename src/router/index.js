import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/note/:index',
    name: 'note',
    component: NoteView
  },
  // single note
  // local storage to save data
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
