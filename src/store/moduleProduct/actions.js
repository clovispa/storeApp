import productService from "../../service/ProductService";

const actions = {
    async getProduct({commit}) {
        try {
            const {data} = await productService.getProductList();
            commit('SET_DATA_PRODUCT', data)
        } catch (error) {
            console.log(error);
        }
    },
}
export default actions;

