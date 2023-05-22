<script setup lang="ts">
import CountDown from "@/components/CountDown.vue"

const props = defineProps({
  data: {
    type: Object,
    default: ''
  },
})
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 q-pa-xs">
    <q-card>
      <q-card-section horizontal class="q-px-md q-pt-md q-pb-sm justify-between items-center">
        <q-card-section class="no-padding">
          {{ data.name }}
        </q-card-section>

        <q-card-section v-show="data.timer > 0" class="no-padding">
          <count-down :time_sec="data.timer" />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-section horizontal class="q-pa-md justify-between items-center">
        <q-card-section horizontal class="no-padding items-center">
          <q-card-section class="no-padding q-mr-sm">
            <q-icon name="local_laundry_service" size="40px" />
          </q-card-section>

          <q-card-section class="no-padding">
            {{ data.rates }} บาท
          </q-card-section>
        </q-card-section>

        <q-card-section class="no-padding" :class="data.timer > 0 ? 'text-primary' : 'text-positive'">
          {{ data.timer > 0 ? 'กำลังซัก' : 'สำเร็จ' }}
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>