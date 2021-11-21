<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import navbar from "./components/Navbar.vue";

const router = useRouter();
const route = useRoute();
const store = useStore();
onBeforeMount(() => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (!user) {
      router.replace("/login");
    } else if (user) {
      store.commit("SETUSER", user);
      router.replace("/");
    }
  });
});
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
