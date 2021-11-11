<template>
  <div class="row justify--center">
    <div class="flex xs12 md10 lg5">
      <va-card>
        <va-card-title>My Blood Pressure Log</va-card-title>
        <va-card-content>
          <div class="text-block">
            <span
              >Login using one of the methods below. First time here? No
              worries, get started by clicking one of the login options
              below.</span
            >
          </div>
        </va-card-content>
        <va-card-actions align="center" vertical>
          <va-button
            outline
            :rounded="false"
            class="mr-4"
            @click="loginWithGoogle"
          >
            <va-icon class="mdi mdi-google pr-2"></va-icon>
            Login with Google
          </va-button>
          <va-button outline :rounded="false" class="mr-4">
            <va-icon class="mdi mdi-twitter pr-2"></va-icon>
            Login with Twitter
          </va-button>
        </va-card-actions>
      </va-card>
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
