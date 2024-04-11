<template>
    <div class="note single">
        <!-- <h1>Note Page with index: {{ itemId }}</h1> -->
        <h2>{{title}}</h2>
        <p>{{body}}</p>
        <router-link :to="{ name: 'home'}">go back</router-link>

    </div>
</template>
// 
<script>
export default {
    computed: {
    itemId() {
      // Convert the parameter to an integer
      return parseInt(this.$route.params.index);
    }
  },
  created(){
      const notesFromLocalStorage=window.localStorage.getItem("notes")
      if (notesFromLocalStorage) {
          const notes=JSON.parse(notesFromLocalStorage)
          const note=notes[this.itemId];
          if (note){
            this.title=note.title;
            this.body=note.body;
          }
      }     
  },
  data(){
    return {
      title:"Note does not exist",
      body:"",
    }
  }
}
</script>
