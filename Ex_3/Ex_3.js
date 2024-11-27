let arr_num=[0,1,2,5,8,9,0,2,5,6,0,0,2,6,0];
let count_zero=0;
arr_num.forEach(function (number) {
  number==0?count_zero++:0;
});
console.log(count_zero);