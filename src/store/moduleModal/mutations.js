const mutations = {
    UP_DATA_MODAL(state, payload) {
        state.dataModalState = payload;
    },
    VIEW_MODAL(state, payload) {
        state.showModal = payload;
    },
}
export default mutations;
