<template>
    <div class="counter-sum">
        <h2>
            Counter Sum: <span>{{counterSum}}</span>
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'counter-sum',
        created:{
            counterSum: function () {
                let sum =this.$store.getter.counterSum;
                if(sum>=10){
                    this.$router.push('/')
                }
                return sum;
            }
        }      
    }
</script>
<style scoped>

</style>
