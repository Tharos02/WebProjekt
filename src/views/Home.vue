<template>
  <div class="h-screen flex dark:bg-gray-800">
    <navigation user="Till Weckheuer" createTicket="false"></navigation>
    <div class="flex-1 min-w-0 p-8 mx-auto">
      <div class="dark:text-blue-400 grid grid-cols-3 font-bold text-blue-700 text-base border-b-2 pb-3">
        <span>Projektname</span>
        <span>Beschreibung</span>
        <span>Ersteller</span>
      </div>

      <div v-for="project in projects" :key="project.id">
        <div v-on:click="testAlert(project.name)" class="dark:text-gray-300 grid grid-cols-3 border-b-2 rounded my-2 pb-3 cursor-pointer">
          <span>{{ project.name }}</span>
          <span>{{ project.desc }}</span>
          <span>{{ project.creator }}</span>
        </div>
      </div>

      <button v-on:click="toggleProjectModal = !toggleProjectModal" class="hover:bg-blue-400 mt-3 text-base font-medium px-3 py-1 bg-blue-600 rounded text-gray-200">Projekt erstellen</button>

      <div class="fixed overflow-x-auto overflow-y-auto inset-0 flex justify-center items-center z-50" v-if="toggleProjectModal">
        <div class="relative mx-auto w-auto">
          <div class="dark:bg-gray-600 bg-white w-full rounded shadow-2xl flex flex-col p-4">
            <div class="dark:text-blue-400 text-2xl font-bold text-center">Projekt erstellen</div>

            <div class="mb-4">
              <label class="dark:text-blue-400 font-bold text-grey-darker block mb-2">Projektname</label>
              <input type="text" class="dark:bg-gray-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Projektname">
            </div>

            <div class="mb-4">
              <label class="dark:text-blue-400 font-bold text-grey-darker block mb-2">Projektbeschreibung</label>
              <textarea type="text" class="dark:bg-gray-600 min-h-full min-w-max w-96 h-52 resize border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white border-grey-light px-2 py-2 rounded shadow" placeholder="Projektbeschreibung"> </textarea>
            </div>

            <div class="dark:bg-gray-600 bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 mt-1 py-2 bg-gray-500 hover:bg-gray-400 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm" v-on:click="toggleProjectModal = false">Abbrechen</button>
              <button class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 mt-1 py-2 bg-blue-600 hover:bg-blue-400 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm">Erstellen</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="toggleProjectModal" class="absolute z-40 inset-0 opacity-25 bg-black">

      </div>


    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "Home.vue",
  components: {
    Navigation,
  },
  data() {
    return {
      toggleProjectModal: false,
      projects: [
        {id: 1, name: 'Projekt 1', desc: 'Test Project nr.1 beschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ', creator: 'Till Weckheuer'},
        {id: 2, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
        {id: 3, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
        {id: 4, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
        {id: 5, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
        {id: 6, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
        {id: 7, name: 'Projekt 2', desc: 'Test Project nr.2 beschreibung', creator: 'Jan Berg'},
      ],
    }
  },
  methods: {
    testAlert(msg) {
      alert(msg);
    },
  },
  beforeMount() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
</script>

<style scoped>

</style>