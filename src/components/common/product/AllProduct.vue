<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h2>
             Inicio > {{ route.params.name ? route.params.name : "Todos los productos" }}
              <br />
            </h2>
          </v-col>
        </v-row>
        <v-row v-if="productsData.length">
          <v-col
              cols="4"
              v-for=" product in productsData"
              :key="product.id"
          >
            <item-product :data-pro="product"/>
          </v-col>
          <v-col
              cols="12"
          >
            <div class="text-center">
              <v-pagination
                  v-model="currentPage"
                  :length="perPage -1"
                  :total-visible="totalItem"

              ></v-pagination>
            </div>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
              cols="12"
              class="icon-result"
          >
            <img
                height="400"
                src="/src/assets/notResult.png"
                alt="logo"
            >
          </v-col>
          <v-col
              cols="12"
              class="icon-result"
          >
            <h1>No se encontraron resultados </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <modal-component/>
  </v-app>
</template>

<script>
import ItemProduct from "./itemProduct.vue";
import useAllProduct from "./composables/useAllProduct";
import modalComponent from "../modalComponent/ModalComponent.vue";


export default {
  name: "AllProduct",
  components: {ItemProduct, modalComponent},
  setup() {
    const {dataProduct, productsData, totalItem, currentPage, perPage, route} = useAllProduct()

    return {
       dataProduct,
      productsData,
      totalItem,
      currentPage,
      perPage,
      route
    }
  }
}
</script>

<style scoped>
.icon-result {
  text-align: center;
}
</style>
