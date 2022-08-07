import apiClient from "../plugins/axios";

const getProductList = function () {
    return apiClient.get(`product/`)
}

export default {
    getProductList,
}
