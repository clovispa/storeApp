import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import { useRoute } from 'vue-router'


const useAllProduct = () => {
    const currentPage = ref(1)
    const perPage = ref(3)
    const store = useStore()
    const route = useRoute()
    const dataProduct = computed( () => store.getters.productListState)
    onMounted( () => {
        store.dispatch('getProduct')
    })

    const productsData = computed(() => {
        let item = [];
        for (let i = 0; i < dataProduct.value.length; i++) {
            if (route.params.name === undefined) {
                item = [...item, dataProduct.value[i]];
            } else if (
                dataProduct.value[i]?.category.name
                    .toLowerCase()
                    .includes(route.params.name.toLowerCase()) || dataProduct.value[i]?.name.toLowerCase().includes(route.params.name.toLowerCase())
            ) {
                item = [...item, dataProduct.value[i]];
            } else if (
                route.params.id === dataProduct.value[i]?.category.id
            ) {
                item = [...item, dataProduct.value[i]];
            }
        }
        let newItem = item
        item = item.slice(
            (currentPage.value - 1) * perPage.value,
            currentPage.value * perPage.value
        );
        if(!item.length) {
            item = newItem
        }
        return item;
    })

    const totalItem = computed(() => {
        let item;
        if (route.params.name == undefined) {
            item = dataProduct.value.length;
        } else if (route.params.name || route.params.id) {
            item = productsData.value.length;
        }
        return item;
    })
    return {
        dataProduct,
        productsData,
        currentPage,
        perPage,
        totalItem,
        route,

    }
}
export default useAllProduct
