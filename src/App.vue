<template>
  <GameContainer />
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from "vuex"
import GameContainer from './components/GameContainer.vue'

export default {
  name: 'App',
  components: {
    GameContainer
  },
  setup() {
    onMounted(() => {
      const store = useStore()
      store.dispatch('fetchSearches')
    })
  }
}
</script>
