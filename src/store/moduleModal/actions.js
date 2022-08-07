const actions = {
    upDataModalAction({ commit }, payload) {
        console.log('si llega', payload)
        commit("SET_COUNT_STATE", payload.cantProduct);
        commit("VIEW_MODAL", true);
        commit("UP_DATA_MODAL", payload);
    },
    closedModal({ commit }, payload) {
        commit("VIEW_MODAL", payload);
    }
}
export default actions;
