import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      cookie: true,
    };
  },
  actions: {
    agreePrivacyPolicy(cookie) {
      this.cookie = false;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
