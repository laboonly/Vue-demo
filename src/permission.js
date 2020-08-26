import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  try {
    const { roles } = await store.dispatch('user/getInfo')

    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    router.addRoutes(accessRoutes)

    next()
  } catch (error) {
    console.log(error)
  }
})
