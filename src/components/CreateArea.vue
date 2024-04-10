<template>
    <form @submit.prevent="submit">
    <input type="text" v-model="title" placeholder="Title" />
    <textarea v-model="body" placeholder="Take a note..."></textarea>
    <button>add</button>
    </form>
</template>
<script>
export default {
    props:['handlesubmit'],
    data(){
        return {
            title:"",
            body:"",
        }
    },
    methods:{
        submit(){
            this.handlesubmit(this.title,this.body)
            this.title=""
            this.body=""},
    }
}
</script>