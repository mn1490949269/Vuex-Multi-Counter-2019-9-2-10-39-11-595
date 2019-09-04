<template>
    <div class="counter-group">
        <h2>
            Counter Number:
            <span>{{counterNumber}}</span>
        </h2>
        <div class="counters">
            <Counter
                    v-for="(counter,index) in counters"
                    :index="index"
                    :value="counter.value"
                    :key="index"
                    @update="handleValueChange"
            />
        </div>
        <CounterSum></CounterSum>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import CounterSum from './CounterSum.vue'

    export default {
        name: 'counter-group',
        components: {
            Counter,
            CounterSum
        },
        props: {
            counterNumber: Number
        },
        computed: {
            counters:function(){
                return this.$store.state.counters;
            },
        },
        // created: function () {
        //     console.log(this.$store.state);
        //     // 根据 counterNumber 生成 counter 数据和组件
        //     for (let i = 0; i < this.counterNumber; i++) {
        //         this.$store.state.counters.push({
        //             value: 0
        //         });
        //     }
        // },
        methods: {
            handleValueChange: function (index, value,) {
                this.$store.state.counters[index].value = value;
            }
        }
    }
</script>
