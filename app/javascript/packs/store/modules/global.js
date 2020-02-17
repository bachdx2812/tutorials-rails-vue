const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  actions: {
    addNotifications({commit} , payload) {
      commit(ADD_NOTIFICATION, payload);
    }
  },
  mutations: {
    ADD_NOTIFICATION(state, payload) {
      state.notifications.push(payload)
    }
  }
}