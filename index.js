function change(objName, min, max, step) {
    let obj = document.getElementById(objName);
    let tmp = +obj.value + step;
    if (tmp < min) tmp = min;
    if (tmp > max) tmp = max;
    obj.value = tmp;
}

let length = document.querySelector('.length');
let width = document.querySelector('.width');
let count = document.querySelector('.count');
let sum = document.querySelector('.calc__sum');

let lengthTotal = 0;
let = widtgTotal = 0;
let sumTotal = 0;

length.addEventListener('change', function() {

    lengthTotal = +this.value;
    sumTotal = lengthTotal * widtgTotal * count.value;


});