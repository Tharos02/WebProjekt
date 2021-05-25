<template>
  <div class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center font-bold text-2xl">Login</h1>
        <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-xl">

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Email</label>
            <input v-model="email" type="email" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Email">
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Passwort</label>
            <input type="password" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Passwort">
          </div>

          <div class="flex items-center justify-between">
            <button v-on:click="login()" class="bg-blue-700 hover:bg-teal text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>

        </div>
        <div class="text-center">
          <p class="text-grey-dark text-sm">Noch keinen Account? <a v-on:click="redirectToRegister()" class="cursor-pointer no-underline text-blue font-bold">Erstelle einen Account</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      email: '',
    }
  },
  methods:{
    login() {
      console.log(this.email);
      this.$router.push('/home');
    },
    redirectToRegister() {
      this.$router.push('/register');
    },
  }
}
</script>

<style scoped>

</style>