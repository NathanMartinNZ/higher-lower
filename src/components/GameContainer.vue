<template>
  <div v-if="!stage">
    <div @click="startGame">Start game</div>
  </div>

  <div v-if="stage">
    <Option 
      v-bind:name="options[0].name" 
      v-bind:searchCount="options[0].searches" 
    />
    <Option 
      v-bind:name="options[1].name" 
      v-bind:searchCount="options[1].searches" 
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from "vuex"
import { shuffleArray } from '../helpers/shuffleArray'

import Option from "./Option.vue"

export default {
  name: "GameContainer",
  components: {
    Option
  },
  setup() {
    const stage = ref(0)
    const store = useStore()

    const initialSearches = computed(() => {
      let arr = store.state.searches
      const first = shuffleArray(arr).pop()
      arr.filter(search => search.name != first.name)
      const second = shuffleArray(arr).pop()
      return [first, second]
    })

    const options = ref(initialSearches)

    const startGame = () => {
      stage.value = 1
    }

    return {
      stage,
      options,
      startGame
    }
  }
}
</script>

<style>

</style>