<script setup lang="ts">
const lineAuth = () => {
  const clientId = "XhpGFAQSOA14ClsCyMnlyg";
  const redirect = 'https://94d1-27-55-69-213.ngrok-free.app/line-connected';
  const state = 'my-laundromat';
  window.location.href = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect}&scope=notify&state=${state}`;
};

</script>

<template>
  <q-layout view="hhh lpR fFf" class="bg-secondary">
    <q-page-container>
      <div class="q-pa-md q-gutter-sm text-center full-width absolute-center">
        <div class="text-h2">เชื่อมต่อ LINE Notify</div>
        <q-btn class="q-mt-md q-px-md" color="primary" label="เชื่อมต่อ" size="lg" dense style="min-width: 150px;"
          @click="lineAuth" />
      </div>
    </q-page-container>
  </q-layout>
</template>