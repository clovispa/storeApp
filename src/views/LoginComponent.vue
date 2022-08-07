<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <div class="text-center">
            <h1 class="mb-2">Bienvenido</h1>
          </div>
          <a >
            <v-img alt="Fedorae Education Log" contain height="200"></v-img>
          </a>
          <v-card-text>
            <v-form>
              <v-text-field label="Ingrese su correo" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
              <v-text-field label="Ingrese su contraseña" name="password" prepend-inner-icon="mdi-lock" type="password"  class="rounded-0" outlined></v-text-field>
              <v-btn class="rounded-0"   :to="'/dashboarmain'" color="primary"  x-large block dark>Iniciar sesión</v-btn>
              <v-card-actions class="text--secondary">
                <v-checkbox color="#000000" label="Recordarme"></v-checkbox>
                <v-spacer></v-spacer>

              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginComponent"
}
</script>

<style scoped>

</style>
