<template>
  <div
    class="register min-h-svh lg:py-3 w-full flex justify-center items-center"
  >
    <div
      class="box lg:rounded-3xl max-w-[732px] bg-[#1E1E1E] p-5 md:p-7 lg:p-10 flex flex-col w-full space-y-5"
    >
      <div class="btns class flex w-full justify-stretch *:grow">
        <NuxtLink
          to="/register"
          class="text-lg py-5 bg-[#11111140] rounded-tl-2xl rounded-bl-2xl text-center"
        >
          Sign up
        </NuxtLink>
        <button
          class="text-lg py-5 bg-[#111111] rounded-tr-2xl rounded-br-2xl text-center"
        >
          Login
        </button>
      </div>
      <div
        class="inner-container sm:px-6 md:px-10 flex flex-col w-full space-y-5"
      >
        <h1 class="font-medium text-[24px] text-center">Login</h1>
        <div class="btns space-y-4">
          <button
            class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full"
          >
            <img src="/imgs/facebook.svg" alt="" />
            <p class="text-lg">Login with Facebook</p>
          </button>
          <button
            class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full"
          >
            <img src="/imgs/google.svg" alt="" />
            <p class="text-lg">Login with Google</p>
          </button>
        </div>
        <div class="divider flex items-center justify-center gap-6">
          <hr class="grow border-[#66666640]" />
          <p class="text-lg text-[#66666640]">OR</p>
          <hr class="grow border-[#66666640]" />
        </div>

        <Input type="text" label="User Name" id="username" v-model="username" />
        <Input
          type="password"
          label="Password"
          id="password"
          v-model="password"
        />

        <button
          @click="login"
          class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full text-[22px] font-medium"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref("");
const password = ref("");

const { baseUrl, setTokens } = useAuthStore();

const login = async () => {
  try {
    let res = await $fetch(`${baseUrl}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: {
        username: username.value,
        password: password.value,
      },
    });
    setTokens(res);
    console.log(res);
    alert("success");
    navigateTo("/");
  } catch (error) {
    console.error("Registration error:", error.data || error);
    alert("Registration failed: " + (error.data?.detail || error.message));
  }
};
</script>

<style></style>
