<script setup lang="ts">
import { ref } from "vue"

const tab = ref('home')
</script>

<template>
  <q-footer class="row items-center lt-sm">
    <div class="col-12">
      <q-tabs v-model="tab" no-caps indicator-color="transparent" active-color="warning" class="text-grey-5 shadow-0"
        :align="'justify'">
        <q-route-tab name="home" to="/">
          <template v-slot>
            <q-icon name="home" size="30px" />
          </template>
        </q-route-tab>

        <q-route-tab name="monetization_on" to="/add-cash">
          <template v-slot>
            <q-icon name="monetization_on" size="30px" />
          </template>
        </q-route-tab>

        <q-route-tab name="history" to="/history">
          <template v-slot>
            <q-icon name="history" size="30px" />
          </template>
        </q-route-tab>
      </q-tabs>
    </div>
  </q-footer>
</template>

<style scoped>
footer {
  height: 90px;
  background: #FFFFFF;
  box-shadow: 0px -8px 20px rgba(200, 220, 230, 0.5), inset 0px -15px 35px rgba(220, 230, 240, 0.5);
  border-radius: 30px 30px 0px 0px;
}
</style>