<template>
  <div id="app">
    <div class="left_bar">
      <app-left></app-left>
    </div>
    <div class="right_header">
      <app-right></app-right>
      <router-view></router-view>
    </div>
    
    
  </div>
</template>

<script>
import appLeft from './components/left'
import appRight from './components/right'

export default {
  name: 'App',
  
  components: {
    appLeft,
    appRight
  }
  
}
</script>

<style>
@import url('assets/style.css');
</style>
