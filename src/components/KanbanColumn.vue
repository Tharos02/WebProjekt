<template>
    <draggable class="h-full rounded-lg" :list="list" group="tasks" animation="300" @end="onEnd()">
      <div
          v-for="el in list"
          :key="el.name"
          class="flex items-start justify-between px-3 pt-3 pb-5 mt-3 bg-white border border-white rounded shadow cursor-pointer"
      >
        <p>{{ el.name }}</p>

        <div class="cursor-pointer" @click="$emit('click-close', el)">
          <!-- eslint-disable-next-line -->
          <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onEnd(){
      console.log('end');
    }
  }
}
</script>