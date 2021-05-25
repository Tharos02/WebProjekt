<template>
  <div class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center font-bold text-2xl">Registrieren</h1>
        <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-xl">

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Username</label>
            <input type="text" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Username">
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Email</label>
            <input type="text" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Email">
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Passwort</label>
            <input type="password" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Passwort">
          </div>

          <div class="mb-4">
            <label class="font-bold text-grey-darker block mb-2">Passwort wiederholen</label>
            <input type="password" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Passwort wiederholen">
          </div>

          <div class="flex items-center justify-between">
            <button v-on:click="register()" class="bg-blue-700 hover:bg-teal text-white font-bold py-2 px-4 rounded">
              Registrieren
            </button>
          </div>

        </div>
        <div class="text-center">
          <p class="text-grey-dark text-sm">Du hast schon einen Account? <a v-on:click="redirectToLogin()" class="cursor-pointer no-underline text-blue font-bold">Anmelden</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    register() {
      this.$router.push('/home');
    },
    redirectToLogin() {
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>

</style>