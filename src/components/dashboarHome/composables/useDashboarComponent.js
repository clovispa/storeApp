import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";


const useDashboarComponent = () => {
    const store = useStore()
    const drawer = ref(true)
    const dataCategory = computed(() => store.getters.categoryListState)

    onMounted( () => {
        store.dispatch('getCategory')
    })
    return {
        drawer,
        dataCategory,
    }


}
export default useDashboarComponent
