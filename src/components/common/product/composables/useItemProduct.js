import {ref, computed} from "vue";
import {useStore} from "vuex";


const useItemProduct = (props) =>{
    const store = useStore()
    const counter = ref(0)
    const upProduct = () =>{
        const dataProduct = JSON.parse(JSON.stringify(props.dataPro))
        store.dispatch('upDataModalAction', {dataProduct , cantProduct: counter.value})
    }
    const noStock = computed(() =>{
        return counter.value > props.dataPro.stock
    })
    const addCart = computed(() =>{
        return counter.value <= 0
    })

    return {

        decrease: () => counter.value--,
        increase: () => counter.value++,
        upProduct,
        noStock,
        addCart,
        counter,

    }

}
export default useItemProduct
