export const state = () => ({
  worker: null
});

export const mutations = {
  set (state, worker) {
    state.worker = worker;
  },
  clear (state) {
    state.worker = null;
  }
};

export const getters = {
  get (state) {
    return state.worker;
  },
  getFullName (state) {
    return `${state.worker.firstName} ${state.worker.lastName}`;
  }
};