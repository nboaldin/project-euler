var num3 = 0;
var num5 = 0;
var array1 = [];
var array2 = [];


for(i = 0; num3 < 999; i++){
  array1.push(num3 += 3);
}

for(j = 0; num5 < 995; j++){
  array2.push(num5 += 5);
}

var array3 = array1.filter(function(val) {
  return array2.indexOf(val) != -1;
});

var arrayOfArrays = [array1, array2, array3];

for(k = 0; k < arrayOfArrays.length; k++) {
    function getSum(array) {

      return array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
  }
  function answer() {
    return getSum(arrayOfArrays[0]) + getSum(arrayOfArrays[1]) - getSum(arrayOfArrays[2]);
  }

}

document.getElementById("answer").innerHTML = `The answer is ${answer(k)}`;
