<template>
    <div class="container text-center">
        <h1>Dashboard</h1>
        <a href="#" @click="display" class="link">Display console</a>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        display (){
            this.$http.get('http://localhost/app/managevent/backend/public/api/delegate')
            .then(function (res) {
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>
