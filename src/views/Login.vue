<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();

const form_data = reactive({
  username: '',
})

const persist = () => {
  localStorage.username = form_data.username;
}

const onSubmit = () => {
  persist();
  router.push('/line-connect');
};
</script>

<template>
  <q-layout view="hhh lpR fFf" class="bg-secondary">
    <q-page-container>
      <q-card class="my-card full-width absolute-center">
        <q-card-section>
          <q-form @submit="onSubmit">
            <div class="text-h4 q-py-md text-center">My Laundromat</div>
            <q-input v-model="form_data.username" filled label="ชื่อผู้ใช้" label-color="primary" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-btn class="full-width q-mb-md" color="primary" label="เข้าระบบ" size="lg" dense type="submit" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.my-card {
  max-width: 500px;
}
</style>