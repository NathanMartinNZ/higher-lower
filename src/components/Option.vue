<template>
  <div>{{ name }}</div>
  <div>{{ searchCount }}</div>
</template>

<script>
export default {
 name: "Option",
 props: {
   name: String,
   searchCount: Number
 },
 setup() {
   
 }
}
</script>

<style>

</style>