<template>
  <v-card
      class="mx-auto my-12"
      max-width="374"
      min-height="473"
  >
    <v-img
        height="250"
        :src="dataPro.photo"
    ></v-img>
    <div :class="[dataPro.stock ? 'stock-style' : 'stock-style-off ']">
      <p>{{ dataPro.stock ? "Disponible" : "Sin stock" }}</p>
    </div>
    <v-card-actions>
      <ul>
     <br>
        <br>
        <li><b>Nombre:</b> {{ dataPro.name }}.</li>
        <li><b>Precio Producto:</b> ${{ dataPro.price }}</li>
        <li><b>Stock:</b> {{ dataPro.stock }}</li>
      </ul>

    </v-card-actions>
    <v-card-actions>
      <div class="div-item">
        <button
            style="padding-right: 9px;"
            @click="increase"
        >
          +
        </button>
        <input
            type="number"
            style="max-width: 60px"
            v-model="counter"
            :disabled="noStock"
        />
        <button
            @click="decrease"
            :disabled="counter <= 0"
        >
          -
        </button>
      </div>

        <v-btn
            :class="[dataPro.stock ? 'color-btn' : 'color-btn-off']"
            color="white"
            @click="upProduct"
            :disabled="noStock || addCart"
        >
          <v-icon left>
            mdi-cart-plus
          </v-icon>
        </v-btn>

      <h6 class="no-stock" v-if="noStock">cantidad no disponible</h6>
    </v-card-actions>
  </v-card>
</template>

<script>
import useItemProduct from "./composables/useItemProduct";
import {computed} from "vue";
export default {
  name: "itemProduct",
  props: {
    dataPro: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
  const {counter, decrease, increase,  upProduct, noStock, addCart} = useItemProduct(props)
    return {
      counter,
      noStock,
      addCart,
      upProduct,
      decrease,
      increase,

    }
  }
}
</script>

<style scoped>
.no-stock {
  color: red;
  font-weight: bold;
  padding-left: 7px;
}
.div-item {
  border: 1px solid #000;
  height: 34px;
  padding-right: 9px;
  padding-left: 9px;
  padding-top: 5px;
}
.color-btn {
  background-color: #00A0F7;
}
.color-btn-off {
  background-color: #a8acad;
}
.stock-style {
  position: absolute;
  top: 228px;
  left: 0;
  background: #00A0F7;
  width: 145px;
  height: 59px;
  opacity: 0.8;
  text-align: center;
  padding-top: 20px;
  font-weight: bold;
}
.stock-style-off {
  position: absolute;
  top: 228px;
  left: 0;
  background: #a8acad;
  width: 145px;
  height: 59px;
  opacity: 0.8;
  text-align: center;
  padding-top: 20px;
  font-weight: bold;
}
</style>
