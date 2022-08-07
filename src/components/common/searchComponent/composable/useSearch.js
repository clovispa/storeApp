import {ref,} from "vue";
import  { useRouter} from 'vue-router'
const useSearch = () => {
    const search = ref('')
    const router = useRouter()

    const goSearch = () =>{
        router.push({
            name: "search",
            params: { name: search.value },
        });

        if (search === '') {
            router.push({
                name: "dashboarmain",
            });
        }
    }
    return {
        search,
        goSearch
    }
}
export default useSearch
