import apiClient from "../plugins/axios";

const getCategoryList = function () {
    return apiClient.get(`product-category/`)
}

export default {
    getCategoryList,
}
