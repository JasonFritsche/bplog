// store.ts
import { createStore, Store } from "vuex";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const store = createStore({
  state() {
    return {
      user: null,
      error: null,
    };
  },
  mutations: {
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
    signout({ commit }) {
      const auth = getAuth();
      auth.signOut().then(() => {
        commit("SETUSER", null);
      });
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});

export default store;
