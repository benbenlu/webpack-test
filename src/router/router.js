// import a from '../pages/a'  如果写过的话，后边的import()就不会再动态加载了

const router = [
  {
    path: '/b',
    name: 'index',
    component: () => import('../pages/a')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../pages/index')
  }
]

export default router


