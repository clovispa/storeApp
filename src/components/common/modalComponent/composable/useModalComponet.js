import {ref, computed} from "vue";
import {useStore} from "vuex";

const useModalComponet = () => {
    const dialog = computed(() => store.getters.viewModal)
    const store = useStore()
    const dataModal = computed(() => store.getters.dataModalGet)
    const countStateItem = computed( () => store.getters.countTotalState)
    const addProduct = (product) => {
        const item = JSON.parse(JSON.stringify(product))
        store.dispatch('addCartAction', item)
        store.dispatch('closedModal', false)
    }
   const closedModal = () => {
        store.dispatch('closedModal', false)
   }
    const increment = () => {
        store.dispatch('changeCartIncrement')
    }
    const decrement = () => {
        store.dispatch('changeCartDecrement')
    }

    return {
        dialog,
        dataModal,
        addProduct,
        closedModal,
        countStateItem,
        decrement,
        increment,
    }
}

export default useModalComponet
