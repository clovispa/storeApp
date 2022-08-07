<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        v-model="drawer"
    >
      <v-list-item style="padding-bottom: 14px ;">
        <v-list-item-content >
          <v-list-item-title style="text-align: center;" class="text-h6"  >
            <v-icon >mdi-home</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            <br>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <side-bar-component :data-category="dataCategory"/>
    </v-navigation-drawer>

    <v-app-bar app style=" background: #00A0F7">
      <v-icon class="hidden-md-and-up" @click="drawer = !drawer" style="color: black">mdi-format-list-checkbox</v-icon>
      <v-spacer></v-spacer>
      <br>
      <br>
        <search-componet/>
        <br>
        <br>
      <ProductCart/>
        <v-btn icon>
        </v-btn>


    </v-app-bar>
       <v-main>
           <all-product></all-product>
       </v-main>

  </v-app>
</template>

<script>

import sideBarComponent from "./SideBarComponent.vue";
import useDashboarComponent from "./composables/useDashboarComponent";
import AllProduct from "../common/product/AllProduct.vue";
import ProductCart from "../common/ProductCar/ProductCar.vue";
import SearchComponet from "../common/searchComponent/searchComponet.vue";


export default {
  name: "DashboarComponent",
  components: {SearchComponet, ProductCart, AllProduct, sideBarComponent},
  setup() {
    const { drawer, dataCategory, verifyUrl} = useDashboarComponent()

    return {
      dataCategory,
      drawer,
      verifyUrl,
    }
  }
}
</script>

<style scoped>
</style>
