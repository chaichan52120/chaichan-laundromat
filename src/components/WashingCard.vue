<script setup lang="ts">
import { useQuasar } from 'quasar'

import { store } from "@/stores/store"
import CountDown from "@/components/CountDown.vue"

const $q = useQuasar()

function alert() {
  $q.dialog({
    title: 'แจ้งเตือน',
    message: 'เงินของคุณไม่พอ'
  })
}

function confirm() {
  $q.dialog({
    title: 'แจ้งเตือน',
    message: `คุณต้องการใช้งาน ${props.data.name} ในราคา ${props.data.rates} บาท หรือไม่?`,
    cancel: true,
    persistent: true
  }).onOk(() => {
    store.addHistory(props.data)
  })
}

const isWashing = () => {
  const history_length = store.history.filter((e) => e.id === props.data.id).length
  if (history_length > 0 && store.history.filter((e) => e.id === props.data.id)[history_length - 1].timer > 0) {
    return true
  } else {
    return false
  }
}

const isHaveHistory = () => {
  if (store.history.filter((e) => e.id === props.data.id).length > 0) {
    return true
  } else {
    return false
  }
}

const props = defineProps({
  data: {
    type: Object,
    default: ''
  },
})
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 q-pa-xs">
    <q-card :class="isHaveHistory() ? 'text-accent' : 'text-black'">
      <q-card-section horizontal class="q-px-md q-pt-md q-pb-sm justify-between items-center">
        <q-card-section class="no-padding">
          {{ data.name }}
        </q-card-section>

        <q-card-section horizontal>
          <q-card-section v-show="isWashing() && store.history.filter((e) => e.id ===
            data.id)[store.history.filter((e) => e.id === props.data.id).length - 1].timer > 0" class="no-padding">
            <count-down :time_sec="isWashing() ? store.history.filter((e) => e.id ===
              data.id)[store.history.filter((e) => e.id === props.data.id).length - 1].timer : 0" />
          </q-card-section>

          <q-card-section class="no-padding q-ml-sm" :class="isWashing() ? 'text-negative' : 'text-positive'">
            <q-icon :name="isWashing() ? 'cancel' : 'check_circle'" />
            {{ isWashing() ? 'ไม่ว่าง' : 'ว่าง' }}
          </q-card-section>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-section horizontal class="q-pa-md justify-between">
        <q-card-section horizontal class="no-padding items-center">
          <q-card-section class="no-padding q-mr-sm">
            <q-icon name="local_laundry_service" size="40px" />
          </q-card-section>

          <q-card-section class="no-padding">
            <q-card-section class="no-padding">
              {{ data.rates }} บาท
            </q-card-section>
            <q-card-section class="no-padding text-caption">
              {{ data.timer / 60 }} นาที
            </q-card-section>
          </q-card-section>
        </q-card-section>
        <q-card-section class="no-padding">
          <q-btn @click="store.cash >= data.rates ? isWashing() ? null : confirm() : alert()"
            :label="isWashing() ? 'กำลังซัก' : 'หยอดเหรียญ'" :color="isWashing() ? 'negative' : 'primary'" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>