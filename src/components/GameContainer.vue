<template>
  <div>{{ initialSearches[0] }}</div>
  <div>{{ initialSearches[1] }}</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from "vuex"
import { shuffleArray } from '../helpers/shuffleArray'

export default {
  name: "GameContainer",
  setup() {
    const store = useStore()

    const initialSearches = computed(() => {
      let arr = store.state.searches
      const first = shuffleArray(arr).pop()
      arr.filter(search => search.name != first.name)
      const second = shuffleArray(arr).pop()
      return [first, second]
    })

    return {
      initialSearches
    }
  }
}
</script>

<style>

</style>