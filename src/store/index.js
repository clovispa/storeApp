import {createStore} from "vuex";
import CategoryModule from "./moduleCategory";
import ProductModule from './moduleProduct';
import CarModule from "./moduleCar";
import ModalModule from "./moduleModal";
export default createStore({
    modules: {
        CategoryModule,
        ProductModule,
        CarModule,
        ModalModule,
    }
})
