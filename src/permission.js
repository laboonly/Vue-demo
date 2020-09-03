import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const hasRoles = store.getters.roles && store.getters.roles.length > 0
  console.log(hasRoles)
  if (hasRoles) {
    next()
  } else {
    try {
      const { roles } = await store.dispatch('user/getInfo')

      // generate accessible routes map based on roles
      const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

      router.addRoutes(accessRoutes)
      console.log('addroutes')
      next({ ...to, replace: true })
    } catch (error) {
      console.log(error)
    }
  }
})
