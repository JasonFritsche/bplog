// store.ts
import { createStore, Store } from "vuex";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const store = createStore({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    LOGIN: (state, user) => (state.user = user),
    LOGOUT: (state) => (state.user = null),
    SETUSER(state, payload) {
      state.user = payload;
    },
    SETERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    googleSignInAction({ commit }) {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          commit("SETUSER", result.user);
        })
        .then(() => console.log("here"))
        .catch((error) => {
          commit("SETERROR", error.message);
        });
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});
