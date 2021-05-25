<template>
  <div class="w-60 px-8 py-4 dark:bg-gray-900 bg-gray-100 border-r">
    <nav class="mt-8">
      <h2 class="tex-xs font-semibold text-gray-600 uppercase tracking-wider my-2">WebProjekt</h2>
      <div class="mt-2 -mx-3">
        <a href="#" class="dark:bg-gray-800 dark:text-gray-200 flex justify-between items-center px-3 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-lg">
          <span>Projekte</span>
          <span class="dark:text-gray-200 text-xs font-semibold text-gray-700">1</span>
        </a>
        <button v-if="createTicket === 'true'" v-on:click="testAlert('working')" class="hover:bg-blue-500 mt-3 text-sm font-medium px-3 py-1 bg-blue-600 rounded text-gray-200">Erstellen</button>
        <router-link to="/account">
          <a  class="dark:bg-gray-800 dark:text-gray-200 flex justify-between items-center mt-6 px-6 py-2 text-sm font-medium text-gray-800 rounded-lg bg-gray-200">
            <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <span class="inline-block text-sm">{{ user }}</span>
          </a>
        </router-link>
        <button v-on:click="switchDarkMode()" class="hover:bg-blue-400 mt-3 text-base font-medium px-3 py-1 bg-blue-600 rounded text-gray-200">Toggle Darkmode</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ['user', 'createTicket'],
  methods: {
    switchDarkMode() {
      if(localStorage.theme === 'white') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      } else if(localStorage.theme === 'dark') {
        localStorage.theme = 'white';
        document.documentElement.classList.remove('dark');
      }
    },
    testAlert(msg) {
      alert(msg);
    }
  },
}
</script>

<style scoped>

</style>