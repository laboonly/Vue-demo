import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  try {
    const { roles } = {'roles': ['editor'], 'introduction': 'I am a super administrator', 'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 'name': 'Super Admin'}

    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    router.addRoutes(accessRoutes)

    next()
  } catch (error) {
    console.log(error)
  }
})
