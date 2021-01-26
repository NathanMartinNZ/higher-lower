<template>
  <p>test</p>
</template>

<script>
import { useStore } from "vuex"

export default {
  name: "GameContainer",
  setup() {
    const store = useStore()
    console.log(store.state)
  }
}
</script>

<style>

</style>