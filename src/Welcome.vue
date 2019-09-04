<template>
    <div class="counter">
       <h1> Welcome {{username}}!</h1>   
       <div>
        <router-link :to="'/welcome'+username">Welcome</router-link>
       </div>
        <p>
        <router-link :to="{name:'counter'}">Counter</router-link>
        </p>
        <router-link :to="{name:'todolist'}">Go ToDo</router-link>


        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'welcome',
    props: ['username']
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