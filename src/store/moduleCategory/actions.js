import categoryService from "../../service/CategoryService";
const actions = {
    async getCategory({commit}) {
        try {
            const {data} = await categoryService.getCategoryList();
            commit('SET_DATA_CATEGORY', data)
            console.log('pp', data)
        } catch (error) {
            console.log(error);
        }
    },
}
export default actions;

