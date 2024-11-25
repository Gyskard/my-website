import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Career from './views/Career.vue'
import Travel from './views/Travel.vue'
import Photos from './views/Photos.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/career', component: Career },
  { path: '/travel', component: Travel },
  { path: '/photos', component: Photos },
  { path: '/contact', component: Contact },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})