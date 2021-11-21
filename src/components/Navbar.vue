<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i
          class="bi-journal-bookmark"
          style="font-size: 1.7rem; margin-right: 12px"
        ></i>
        <span>My BP Log</span>
      </a>
      <div class="d-flex align-items-center" v-if="user">
        <div class="px-2">
          {{ user?.displayName }}
        </div>
        <div>
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi-gear" style="font-size: 1.7rem"></i>
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" @click="signout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup(props) {
    const store = useStore();
    const user = computed(() => {
      return store.state.user;
    });

    const signout = () => {
      store.dispatch("signout");
    };

    return {
      user,
      signout,
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 8vh;
}
</style>
