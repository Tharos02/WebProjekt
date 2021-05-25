<template>
  <div id="app">
    <div class="h-screen flex dark:bg-gray-800">
      <navigation user="Till Weckheuer" createTicket="true"></navigation>
      <div class="flex-1 min-w-0 p-8 mx-auto">
        <div class="grid grid-cols-3 mt-4">
          <div class="dark:bg-gray-700 px-3 py-3 mr-4 bg-gray-100 rounded-lg">
            <p class="dark:text-gray-300 text-sm font-semibold tracking-wide text-gray-700">
              To Do
            </p>
            <draggable class="h-full rounded-lg" :list="todo" group="tasks" animation="300" @change="onEnd()">
              <div v-for="el in todo" :key="el.name" class="dark:bg-gray-500 dark:border-gray-400 flex items-start justify-between px-3 pt-3 pb-5 mt-3 bg-white border border-white rounded shadow cursor-pointer">
                <p class="dark:text-gray-200">{{ el.name }}</p>

                <div class="cursor-pointer" @click="$emit('click-close', el)">
                  <svg class="dark:text-gray-200 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
              </div>
            </draggable>
          </div>

          <div class="dark:bg-gray-700 px-3 py-3 mr-4 bg-gray-100 rounded-lg">
            <p class="dark:text-gray-300 text-sm font-semibold tracking-wide text-gray-700">
              Doing
            </p>
            <draggable class="h-full rounded-lg" :list="doing" group="tasks" animation="300">
              <div v-for="el in doing" :key="el.name" class="dark:bg-gray-500 dark:border-gray-400 flex items-start justify-between px-3 pt-3 pb-5 mt-3 bg-white border border-white rounded shadow cursor-pointer">
                <p class="dark:text-gray-200">{{ el.name }}</p>

                <div class="cursor-pointer" @click="$emit('click-close', el)">
                  <!-- eslint-disable-next-line -->
                  <svg class="dark:text-gray-200 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
              </div>
            </draggable>
          </div>

          <div class="dark:bg-gray-700 px-3 py-3 mr-4 bg-gray-100 rounded-lg">
            <p class="dark:text-gray-300 text-sm font-semibold tracking-wide text-gray-700">
              Done
            </p>
            <draggable class="h-full rounded-lg" :list="done" group="tasks" animation="300">
              <div v-for="el in done" :key="el.name" class="dark:bg-gray-500 dark:border-gray-400 flex items-start justify-between px-3 pt-3 pb-5 mt-3 bg-white border border-white rounded shadow cursor-pointer">
                <p class="dark:text-gray-200">{{ el.name }}</p>

                <div class="cursor-pointer" @click="$emit('click-close', el)">
                  <!-- eslint-disable-next-line -->
                  <svg class="dark:text-gray-200 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Navigation from "@/components/Navigation";

export default {
  name: "Home.vue",
  components: {
    Navigation,
    draggable,
  },
  data() {
    return {
      newTask: '',
      todo: [
        { name: 'Test 1' },
        { name: 'Test 2' },
        { name: 'Test 3' },
      ],
      doing: [],
      done: [],
    };
  },
  methods: {

    testAlert(msg){
      alert(msg);
    },

    onEnd() {
      this.todo.forEach( (todoelement)=> {
        console.log(todoelement.name)
      });
    },

  },
}
</script>

<style scoped>

</style>