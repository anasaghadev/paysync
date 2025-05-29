<template>
  <div
    class="register min-h-svh lg:py-3 w-full flex justify-center items-center"
  >
    <div
      class="box lg:rounded-3xl max-w-[732px] bg-[#1E1E1E] p-5 md:p-7 lg:p-10 flex flex-col w-full space-y-5"
    >
      <div class="btns class flex w-full justify-stretch *:grow">
        <button
          class="text-lg py-5 bg-[#111111] rounded-tl-2xl rounded-bl-2xl text-center"
        >
          Sign up
        </button>
        <NuxtLink
          to="/login"
          class="text-lg py-5 bg-[#11111140] rounded-tr-2xl rounded-br-2xl text-center"
        >
          Login
        </NuxtLink>
      </div>
      <div
        class="inner-container sm:px-6 md:px-10 flex flex-col w-full space-y-5"
      >
        <h1 class="font-medium text-[24px] text-center">Sign up</h1>
        <div class="btns space-y-4">
          <button
            class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full"
          >
            <img src="/imgs/facebook.svg" alt="" />
            <p class="text-lg">Sign up with Facebook</p>
          </button>
          <button
            class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full"
          >
            <img src="/imgs/google.svg" alt="" />
            <p class="text-lg">Sign up with Google</p>
          </button>
        </div>
        <div class="divider flex items-center justify-center gap-6">
          <hr class="grow border-[#66666640]" />
          <p class="text-lg text-[#66666640]">OR</p>
          <hr class="grow border-[#66666640]" />
        </div>

        <Input label="User Name" id="username" type="text" v-model="username" />
        <div class="flex flex-col md:flex-row gap-4 justify-stretch">
          <Input
            class="grow"
            label="First name"
            id="first-name"
            type="text"
            v-model="fname"
          />
          <Input
            class="grow"
            label="Last name"
            id="last-name"
            type="text"
            v-model="lname"
          />
        </div>
        <Input type="email" label="Email address" id="email" v-model="email" />
        <Input
          type="password"
          label="Password"
          id="password"
          v-model="password"
        />

        <button
          @click="register"
          class="bg-[#171717] py-5 rounded-full flex gap-4 justify-center items-center w-full text-[22px] font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref("");
const fname = ref("");
const lname = ref("");
const email = ref("");
const password = ref("");

const { baseUrl } = useAuthStore();

const register = async () => {
  try {
    const res = await $fetch(`${baseUrl}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: username.value,
        email: email.value,
        password: password.value,
        first_name: fname.value,
        last_name: lname.value,
      },
    });

    console.log("Registration response:", res);
    navigateTo("/login");
  } catch (error) {
    console.error("Registration error:", error.data || error);
    alert("Registration failed: " + (error.data?.detail || error.message));
  }
};
</script>

<style></style>
