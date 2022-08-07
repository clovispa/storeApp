const getters = {
    carListState: state => state.carData,
    countTotalState: state => state.countState,

    totalCantProduct(state) {
    return Object.values(state.carData).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrice(state) {
        return Object.values(state.carData).reduce((acc, {cantidad, price}) => acc + cantidad * price, 0)
    },


}
export default getters;
