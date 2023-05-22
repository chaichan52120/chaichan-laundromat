<script setup lang="ts">
import HistoryCard from "@/components/HistoryCard.vue";
import MainFooter from "@/layouts/MainFooter.vue";
import MainHeader from "@/layouts/MainHeader.vue";
import { store } from "@/stores/store"

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-secondary">
    <main-header title="ประวัติการใช้งาน" :cash="store.cash" />

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <div class="row">
          <history-card v-if="store.history.length > 0" v-for="(item, index) in store.history.slice().reverse()"
            :key="index" :data="item" />
          <div v-else class="text-grey-8">ไม่มีประวัติการใช้งาน</div>
        </div>
      </div>
    </q-page-container>

    <main-footer />
  </q-layout>
</template>