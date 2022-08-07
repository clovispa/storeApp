<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
    >
      <template v-slot:activator="{ props }">
        <v-badge
            v-bind="props"
            :value="totalCant"
            :content="totalCant"
            color="red"
            bottom
        >
          <v-icon large>
            mdi-gift
          </v-icon>
          {{totalCant}}
        </v-badge>
      </template>

      <v-card min-width="600" max-height="400">
        <v-list>

              <h4 class="title-modal">Resumen de la compra </h4>
        </v-list>

        <v-divider></v-divider>

        <v-list>

          <v-list-item v-if="totalCant > 0">
            <div v-for=" product in carDataState" :key="product.index">
              <product-car-item :item="product"></product-car-item>
              <hr />
            </div>
            <br>
            <v-row>
              <v-col>
                <h4>Subtotal:</h4>
              </v-col>
              <v-col>
                <h4>$ {{  totalPrice}}</h4>
              </v-col>
            </v-row>
          </v-list-item>
          <v-list-item v-else>
            <div>
              <p>Aun no ha iniciado su compra</p>
            </div>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text
              @click="menu = false"
          >
            Finalizar la compra
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import useProductCar from "./composable/useProductCar";
import ProductCarItem from "./ProductCarItem.vue";
export default {
  name: "ProductCart",
  components: {ProductCarItem},
  setup() {
    const {fav , menu, message, hints, carDataState, totalCant, totalPrice} = useProductCar()
    return {
      fav,
      menu,
      message,
      hints,
      carDataState,
      totalCant,
      totalPrice,
    }
  }
}
</script>

<style scoped>
.title-modal {
  margin-left: 18px;
}
</style>
