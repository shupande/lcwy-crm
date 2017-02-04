import nav from './nav-config'
import auth from './auth'

const loginSuccess = (to, from, next) => {
  if (auth.loggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}
const getComponent = name => require(`./components/${name}.vue`)

const routers = [
  { path: '/', component: require('./components/index') },
  { path: '/login', name: 'login', component: require('./components/login'), beforeEnter: loginSuccess }
]

nav.forEach((mod) => {
  const subMenus = mod.children

  subMenus.forEach((subMenu) => {
    routers.push({
      path: subMenu.path,
      name: subMenu.name,
      component: getComponent(subMenu.name)
    })
  })
})

routers.push({
  path: '*',
  name: 'notfound',
  component: require('./components/notfound')
})

export default routers
