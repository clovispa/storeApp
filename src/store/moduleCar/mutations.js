const mutations = {
    ADD_DATA_CAR_MUTATION(state, payload) {
        state.carData[payload.id] = payload

    },
    INCREMENT_STATE(state, payload) {
        state.carData[payload].cantidad = state.carData[payload]?.cantidad + 1
    },
    DECREMENT_STATE(state, payload) {
        state.carData[payload].cantidad = state.carData[payload]?.cantidad - 1
        if(state.carData[payload].cantidad === 0) {
            delete state.carData[payload]
        }
    },

    SET_COUNT_STATE(state, payload) {
        state.countState = payload;
    },
    ADD_COUNT_STATE(state) {
        console.log(state.countState++ )
        state.countState = state.countState++;
    },
    REST_COUNT_STATE(state) {
        console.log(state.countState-- )
        state.countState = state.countState--;
    }

}
export default mutations;
