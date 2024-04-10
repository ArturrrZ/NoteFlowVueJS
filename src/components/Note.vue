<template>
<div class="note">
      <h1>{{note.title}}</h1>
      <p>{{note.body}}</p>
      <button @click="deletenote(index)">delete</button>
      <!-- <a :href="noteHref">check</a> -->
      <router-link :to="{ name: 'note', params: { index: index }}">check</router-link>

    </div>
</template>

<script>
export default{
    props:["note","index","deletenote"],
    computed: {
    noteHref() {
      return "/note/" + this.index;
    }
  },
    methods:{
    },
    // created(){console.log(this.noteHref)}
    
}
</script>