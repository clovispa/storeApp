import {useStore} from "vuex";


const useProductItem = () =>  {
    const store = useStore()
    const increase = (id) => {
        store.commit('INCREMENT_STATE', id )

    }
    const decrement = (id) => {
        store.commit('DECREMENT_STATE', id )

    }
    return {
        increase,
        decrement
    }
}
export default useProductItem
