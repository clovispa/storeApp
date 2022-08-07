<template>
  <div class="text-center" >
    <v-dialog
        v-model="dialog"
        max-width="1000"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Producto Agregado
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <v-img
                  height="250"
                  width="250"
                  :src="dataModal.dataProduct.photo"
              ></v-img>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="12">
                  <span>Nombre:</span>
                  <h5>{{dataModal.dataProduct.name}}</h5>
                </v-col>
                <v-col cols="12">
                  <span>Codigo del producto:</span>
                  <h5>{{dataModal.dataProduct.code}}</h5>
                </v-col>
                <v-col cols="12">
                  <span>Precio:</span>
                  <h5> $ {{dataModal.dataProduct.price}}</h5>
                </v-col>
                <v-col cols="4">
                  <span>Cantidad:</span>
                  <div class="div-cont">
                    <button
                        style="padding-right: 9px;"
                        @click="increment"
                        :disabled="countStateItem > dataModal.dataProduct.stock"
                    >
                      +
                    </button>
                      {{countStateItem}}
                    <button
                        @click="decrement"
                        :disabled="countStateItem <= 0"
                    >
                      -
                    </button>
                  </div>
                </v-col>
                <v-col cols="12">
                  <h6 class="no-stock" v-if="countStateItem > dataModal.dataProduct.stock">cantidad no disponible</h6>
                  <span>SubTotal:</span>
                  <h5>$ {{dataModal.dataProduct.price * countStateItem}}</h5>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
      <v-row>
        <v-col>
          <p>
            {{dataModal.dataProduct.description}}
          </p>

        </v-col>
      </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closedModal"
          >
           Seguir Comprando
          </v-btn>
          <v-btn
              color="primary"
              text
              :disabled="countStateItem > dataModal.dataProduct.stock || countStateItem === 0"
              @click="addProduct(dataModal)"
          >
            Agregar al Carrito
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import useModalComponet from "./composable/useModalComponet";
export default {
  name: "ModalComponent",
  setup() {
    const {dialog, dataModal, addProduct, closedModal, increment, decrement, countStateItem} = useModalComponet()

    return {
      dialog,
      dataModal,
      addProduct,
      closedModal,
      countStateItem,
      decrement,
      increment,

    }
  }

}
</script>

<style scoped>
.div-cont{
  border: 1px solid #000;
  height: 34px;
  padding-right: 9px;
  width: 80px;
  padding-left: 15px;
  padding-top: 5px;
}
.no-stock {
  color: red;
  font-weight: bold;
  padding-left: 7px;
}
</style>
