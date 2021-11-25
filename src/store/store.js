// store.ts
import { createStore } from "vuex";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const store = createStore({
  state() {
    return {
      user: null,
      error: null,
      bpEntries: [],
    };
  },
  mutations: {
    SETUSER(state, payload) {
      state.user = payload;
    },
    SETERROR(state, payload) {
      state.error = payload;
    },
    // BP Mutations
    addBloodPressureEntry(state, data) {
      state.bpEntries = [...state.bpEntries, data];
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
    // BP Actions
    async addBloodPressureEntry({ commit }, payload) {
      const auth = getAuth();
      // await firebase
      //   .firestore()
      //   .collection("users")
      //   .doc(auth.currentUser.id)
      //   .collection("bp-log")
      //   .doc(payload.id)
      //   .set({
      //     ...payload,
      //     createdAt: new Date(),
      //   });
      const db = getFirestore();
      console.log(auth);
      try {
        const docRef = await addDoc(
          collection(db, "users", auth.currentUser.uid, "bp-log"),
          {
            ...payload,
            createdAt: new Date(),
          }
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      commit("addBloodPressureEntry", payload);
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});

export default store;
