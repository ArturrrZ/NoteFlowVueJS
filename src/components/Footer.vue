<template>
    <footer>
    <p>Copyright © {{ currentYear }}</p>
    </footer>
</template>
<script>
export default{
    data(){
        return {
            currentYear: null,
        };
    },
    created(){
        const year=new Date();
        this.currentYear=year.getFullYear()
    }
}
</script>