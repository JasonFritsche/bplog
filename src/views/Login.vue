<template>
  <div class="login-container container-fluid">
    <div class="card-wrapper d-flex justify-content-center align-items-center">
      <div class="card mb-2 shadow-lg" style="width: 22em">
        <div class="card-header">Login</div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            Login using one of the methods below. First time here? No worries,
            get started by clicking one of the login options below.
          </h6>
          <div class="d-grid gap-1">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="loginWithGoogle"
            >
              <i
                class="bi-google"
                style="font-size: 1.1rem; margin-right: 3px"
              ></i>
              Login With Google
            </button>
            <button type="button" class="btn btn-outline-primary">
              <i
                class="bi-twitter"
                style="font-size: 1.1rem; margin-right: 3px"
              ></i>
              Login With Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const loginWithGoogle = () => {
  store.dispatch("googleSignInAction");
};
</script>

<style scoped>
.login-container {
  height: 91vh;
}

.card-wrapper {
  height: 90%;
}
</style>
