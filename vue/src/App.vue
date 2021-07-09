<template>
<div id="app-container">
    <div id="simple-treeview">
        <TreeView
          :data-source=books
          @item-template="itemTemplate"
          :search-enabled="true"
          :select-by-click="true"
          @on-item-click="displayBookAndAuthor"
          selectionMode="single"
          :virtual-mode-enabled="true" />
      </div>

      <div id="book-details" class="hidden">
        <div class="book"></div>
        <div class="author"></div> 
      </div>
  </div>
</template>

<script>
import TreeView from 'devextreme-react/tree-view';
import  books from './books';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
