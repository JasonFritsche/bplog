<template>
  <va-navbar>
    <template #left>
      <va-navbar-item>My BP Log</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <div v-if="user?.accessToken">Is logged in</div>
        <div v-else>Is not logged in</div>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watchEffect } from "vue";
const store = useStore();
const user = ref(store.getters.getUser);

watchEffect(() => {
  console.log(user);
});
</script>
