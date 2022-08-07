<template>
  <section style="background: #E5F0F4">
    <v-list
        dense
        nav
    >
      <br>
      <div class="container" style="text-align: center">
        <v-avatar>
        </v-avatar>
      </div>
      <br>
      <div class="box">
        <div >
          <h2 class="category-title">Categorías</h2>
        </div>
        <div>
          <v-icon class="category-icon">mdi-format-list-checkbox</v-icon>
        </div>
      </div>
      <div class="column pointer" >

        <ul>

          <li
              class="liLinks"
              v-for="{ name, id } in dataCategory"
              :key="id"

          >
            <router-link class="links" :to="{name: 'product', params: { id: id, name: name },}"

            >
              <div :tabindex="id" class="box">
                <div class="one">
                  <v-icon class="icon-category">mdi-card</v-icon>
                </div>
                <div class="two">
                  <p    class="item-nav">{{ name }} </p>
                </div>
                <div class="three ">
                  <v-icon class="icon-category">mdi-greater-than</v-icon>
                </div>
              </div>

            </router-link>
          </li>
        </ul>
      </div>
    </v-list>
  </section>
</template>

<script>

export default {
  name: "SideBarComponent",
  props: {
    dataCategory: {
      type: Array,
      required: true
    }
  },
  setup() {
   return {

   }
  }

}
</script>

<style lang="css" scoped>
.box {
  display: flex;
}
.one {
  flex: 1;
}

.two {
  flex: 1;
  text-align: center;
}

.three {
  text-align: end;
  flex: 1;
}
.icon-category {
  color: white;
  margin-top: 23px;
}

.category-title {

  margin-right: 11px;
  margin-left: 11px;

}
.category-icon {
  margin-top: 6px;
  color: black;
}
.item-nav {
  cursor: pointer;
  text-align: start;
  text-decoration: none;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 14px;
  padding-left: 10px;
  font-weight: bold;
}
a:link, a:visited, a:active {
  text-decoration:none;
  color: black;
}
:focus {
  background: #00A0F7;
}
</style>
