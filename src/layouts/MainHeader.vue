<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router"

import { store } from "@/stores/store"

const drawer = ref(false)
const route = useRoute()
const router = useRouter();
let username = ref('')

onMounted(() => {
  if (localStorage.username) {
    username.value = localStorage.username;
  } else {
    router.push('/login');
  }
})

const logout = () => {
  localStorage.clear()
  store.cash = 0
  store.history = []
  router.push('/login');
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  cash: {
    type: Number,
    default: ''
  },
})
</script>

<template>
  <q-header class="q-pa-md">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

      <q-toolbar-title>{{ title }}</q-toolbar-title>

      <div class="text-right">
        <div>{{ username }}</div>
        <div>เงินคงเหลือ : {{ cash }} บาท</div>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered class="bg-white">
    <q-scroll-area class="fit">
      <q-list padding>
        <q-item clickable :active="'Home' === route.name" v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>หน้าหลัก</q-item-section>
        </q-item>

        <q-item clickable :active="'AddCash' === route.name" v-ripple to="/add-cash">
          <q-item-section avatar>
            <q-icon name="monetization_on" />
          </q-item-section>
          <q-item-section>เติมเงิน</q-item-section>
        </q-item>

        <q-item clickable :active="'History' === route.name" v-ripple to="/history">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>ประวัติการใช้งาน</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
