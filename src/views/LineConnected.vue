<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()
const isAuth = ref(false)

onMounted(() => {
  lineGetToken()
})

const lineGetToken = () => {
  const grantType = 'authorization_code'
  const redirect = 'https://94d1-27-55-69-213.ngrok-free.app/line-connected';
  const clientId = 'XhpGFAQSOA14ClsCyMnlyg';
  const clientSecret = 'wmY1BvkEk5Yfk8ly4JbRJqbBIzolfn7EK1QXeZXvwcY'

  fetch(`https://notify-bot.line.me/oauth/token?grant_type=${grantType}&code=${route.query.code}&redirect_uri=${redirect}&client_id=${clientId}&client_secret=${clientSecret}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Access-Control-Allow-Origin": "*"
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        localStorage.lineToken = data.access_token;
        isAuth.value = true
      }
    }).catch((error) => console.log(error));
}

</script>

<template>
  <q-layout view="hhh lpR fFf" class="bg-secondary">
    <q-page-container>
      <div class="q-pa-md q-gutter-sm text-center full-width absolute-center">
        <div class="text-h2">เชื่อมต่อ LINE Notify {{ isAuth ? 'สำเร็จ' : 'ล้มเหลว' }}</div>
        <q-btn class="q-mt-md q-px-md" color="primary" label="ต่อไป" size="lg" dense style="min-width: 150px;" to="/" />
      </div>
    </q-page-container>
  </q-layout>
</template>