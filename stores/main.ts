import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    popUp: false as boolean,
    baseUrl: "https://doctors.sy/dummy-data" as string,
    accessToken: null as string | null,
    refreshToken: null as string | null,
    user: null as any,
  }),
  actions: {
    setTokens({ access, refresh }: { access: string; refresh: string }) {
      this.accessToken = access;
      this.refreshToken = refresh;
    },
    logout() {
      this.accessToken = null;
      this.refreshToken = null;
      this.user = null;
    },
    async refreshAccessToken() {
      try {
        const newTokens: { access: string; refresh: string } = await $fetch(
          `/api/token/refresh/`,
          {
            method: "POST",
            body: {
              refresh: this.refreshToken,
            },
          }
        );
        this.setTokens(newTokens);
        return true;
      } catch (error) {
        this.logout();
        return false;
      }
    },
  },
  persist: true,
});
