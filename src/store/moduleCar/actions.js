const actions = {

    addCartAction({ commit, state }, product) {

        state.carData.hasOwnProperty(product.dataProduct.id)
            ? product.dataProduct.cantidad = state.carData[product.dataProduct.id].cantidad + state.countState
            : product.dataProduct.cantidad = state.countState
        commit('ADD_DATA_CAR_MUTATION', product.dataProduct)
    },
    changeCartIncrement({ commit }) {
        commit("ADD_COUNT_STATE");
    },
    changeCartDecrement({ commit }) {
        commit("REST_COUNT_STATE");
    },
}
export default actions;
