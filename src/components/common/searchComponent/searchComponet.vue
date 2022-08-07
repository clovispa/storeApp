<template>
  <v-row class="search">
    <v-col cols="7">
    </v-col>
    <br>
    <v-col cols="5">
      <v-text-field

        label="Buscar categorias o productos"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        v-model="search"
        @keyup="goSearch"
    ></v-text-field>

    </v-col>
  </v-row>

</template>

<script>
import useSearch from "./composable/useSearch";
export default {
  name: "searchComponet",
  setup() {
    const {search, goSearch} = useSearch()
    return {
      search,
      goSearch
    }
  }
}
</script>

<style scoped>
.search {
  margin-top: 30px;
  padding-right: 17px;
}

</style>
