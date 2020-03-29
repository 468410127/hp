<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    try {
      document.body.removeChild(document.getElementById('loading'))
      setTimeout(function() {
        document.getElementById('app').style.display = 'block'
      }, 500)
    } catch (e) {}
  }
}
</script>

<style>
#app {
    height: 100%;
    width: 100%;
}
</style>
