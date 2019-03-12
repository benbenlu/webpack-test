// import a from '../pages/a'  如果写过的话，后边的import()就不会再动态加载了

const router = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../pages/index')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../pages/a')
  }
]

export default router


