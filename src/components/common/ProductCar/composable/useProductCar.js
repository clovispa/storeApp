import {computed, ref} from "vue";
import {useStore} from "vuex";
const useProductCar = () => {
   const fav = ref(true)
    const menu =ref(false)
    const message = ref(false)
    const hints =ref(true)
    const store = useStore()
    const carDataState = computed(() => store.getters.carListState)
    const totalCant = computed(()=> store.getters.totalCantProduct)
    const totalPrice = computed(()=> store.getters.totalPrice)

        return {
            fav,
            menu,
            message,
            hints,
            carDataState,
            totalCant,
            totalPrice

        }

}
export default useProductCar
