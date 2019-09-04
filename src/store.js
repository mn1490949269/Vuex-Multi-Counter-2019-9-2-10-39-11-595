export default{
    strict :true,
    state: {
      // 应用的数据
      test: 'hello vuex',
      counters:[
          {value:0},
          {value:0},
          {value:0}
      ],
      totalSum:0
    },
    getters:{
        counterSum: function (state) {
            let sum = 0;
            state.counters.forEach(element => {
                sum = sum + element.value;
            });
            return sum;
          }
        },
    mutations:{
        minusValue(state,index){
            state.counters[index].value--;
            state.totalSum--;
        },
        plusValue(state,index){
            state.counters[index].value++;
            state.totalSum++;
        }
    }
  }