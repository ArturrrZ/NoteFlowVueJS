<template>
  <div class="home">
    <Header></Header>
    <CreateArea :handlesubmit="handleSubmit"></CreateArea>
    <div class="note_zone">
    <Note v-for="(note,index) in notes" :note="note" :key="index" :index="index" :deletenote="deleteNote" ></Note>  
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Note from '@/components/Note.vue'
import Footer from '@/components/Footer.vue'
import CreateArea from '../components/CreateArea.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    Note,
    Footer,
    CreateArea
  },
  data(){
    return {
      notes:[],
    }
  },
  methods:{
    deleteNote(index){this.notes.splice(index,1);this.updateLocalStorage()},
    handleSubmit(title,body){this.notes.push({title:title,body:body});this.updateLocalStorage()},
    updateLocalStorage(){
      // console.log(this.notes);
      window.localStorage.setItem("notes",JSON.stringify(this.notes))}
  },
  created(){
    const arrayOfNotes=localStorage.getItem("notes");
    if (arrayOfNotes){
      this.notes=JSON.parse(arrayOfNotes)
    }
  }
}
</script>
