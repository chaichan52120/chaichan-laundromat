<script setup lang="ts">
import WashingCard from "@/components/WashingCard.vue";
import MainFooter from "@/layouts/MainFooter.vue";
import MainHeader from "@/layouts/MainHeader.vue";
import { store } from "@/stores/store"
import { machineList } from "@/interface/main";

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-secondary">
    <main-header title="หน้าหลัก" :cash="store.cash" />

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <div class="row">
          <washing-card :data="item" v-for="(item, index) in machineList" :key="index" />
        </div>
      </div>
    </q-page-container>

    <main-footer />
  </q-layout>
</template>