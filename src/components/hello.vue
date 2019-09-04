<template>
    <div class="hello">
        <h1> Welcome Friend!</h1>
        <input type="text" v-model="message"/>
        <button class="hello" @click="handlehello">Hello</button>
    </div>
</template>

<script>
    export default {
        name: '',
        date:function(){
            return{
                message:""
            }
        },
            
        
        methods: {
            handlehello:function(){
                this.$router.push( {path: '/welcome/'+this.message})

            }
        }
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>