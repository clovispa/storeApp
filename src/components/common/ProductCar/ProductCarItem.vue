<template>
  <v-row>
    <v-col cols="5">
      <h4>{{ item.name }}</h4>
      <span>Precio: $ {{item.price}}</span>
    </v-col>
    <v-col cols="3">
      <div class="div-count">
        <button
            style="padding-right: 9px;"
            @click="increase(item.id)"
            :disabled="item.cantidad >= item.stock"
        >
          +
        </button>
             {{ item.cantidad }}
        <button
            style="padding-left: 6px;"
            @click="decrement(item.id)"
        >
          -
        </button>
      </div>

    </v-col>
    <v-col>SubTotal:
      <span>$ {{ item.price * item.cantidad}}</span>
    </v-col>
  </v-row>

<h1></h1>
</template>

<script>
import useProductItem from "./composable/useProductItem";
export default {
  name: "ProductCarItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const {increase, decrement} = useProductItem()
    return {
      increase,
      decrement,
    }
  }
}
</script>

<style scoped>
.div-count {
  border: 1px solid #000;
  height: 34px;
  padding-right: 9px;
  width: 80px;
  padding-left: 15px;
  padding-top: 5px;
}
</style>
