<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

import MainFooter from "@/layouts/MainFooter.vue";
import MainHeader from "@/layouts/MainHeader.vue";
import { store } from "@/stores/store"

const $q = useQuasar()

function prompt() {
  $q.dialog({
    title: 'เติมเงิน',
    message: 'กรุณาใส่จำนวนเงิน',
    prompt: {
      model: '',
      type: 'number' // optional
    },
    cancel: true,
    persistent: true
  }).onOk(data => {
    store.addCash(parseInt(data))
  })
}
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-secondary">
    <main-header title="เติมเงิน" :cash="store.cash" />

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-card>
          <q-card-section class="text-center text-h5">
            เติมเงิน
          </q-card-section>

          <q-separator />

          <q-card-section horizontal class="q-pa-md items-center">
            <q-icon name="monetization_on" size="30px" class="q-mr-xs" color="primary" />
            ยอดเงินของคุณ : {{ store.cash }} บาท
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-btn @click="prompt" label="คลิกที่นี่เพื่อเติมเงิน" color="primary" />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>

    <main-footer />
  </q-layout>
</template>