import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Appunti from '@/pages/Appunti.vue'
import Contatti from '@/pages/Contatti.vue'
import Varie from '@/pages/varie/Index.vue'
import EasterEgg from '@/pages/varie/EasterEgg.vue'
import Media from '@/pages/Media.vue'
import Progetti from '@/pages/Progetti.vue'
import Universita from '@/pages/universita/Index.vue'
import TesiTriennale from '@/pages/universita/TesiTriennale.vue'
import SemesterProject from '@/pages/universita/SemesterProject.vue'
import LaboratorioComputazionale from '@/pages/universita/LaboratorioComputazionale.vue'
import Puzzles from '@/pages/puzzles/Index.vue'
import Mappa from '@/pages/puzzles/Mappa.vue'
import Poligono from '@/pages/puzzles/Poligono.vue'
import Spartito from '@/pages/puzzles/Spartito.vue'
import Testo from '@/pages/puzzles/Testo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/appunti',
      component: Appunti
    },
    {
      path: '/contatti',
      component: Contatti
    },
    {
      path: '/varie',
      component: Varie
    },
    {
      path: '/varie/easter-egg',
      component: EasterEgg
    },
    {
      path: '/media',
      component: Media
    },
    {
      path: '/progetti',
      component: Progetti
    },
    {
      path: '/universita',
      component: Universita
    },
    {
      path: '/universita/tesi-triennale',
      component: TesiTriennale
    },
    {
      path: '/universita/semester-project',
      component: SemesterProject
    },
    {
      path: '/universita/laboratorio-computazionale',
      component: LaboratorioComputazionale
    },
    {
      path: '/puzzles',
      component: Puzzles
    },
    {
      path: '/puzzles/mappa',
      component: Mappa
    },
    {
      path: '/puzzles/poligono',
      component: Poligono
    },
    {
      path: '/puzzles/spartito',
      component: Spartito
    },
    {
      path: '/puzzles/testo',
      component: Testo
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
