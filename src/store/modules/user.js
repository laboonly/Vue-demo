import { getInfo } from '@/api/user'

const state = {
  roles: []
}

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response
        if (!data) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Verification failed, please Login again.')
        }
        const { roles } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
