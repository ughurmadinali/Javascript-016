1
//выведите в консоли каждый элемент из  массива с помощью for с тремя инструкциями
let arr = ['q','w','r','t'];

for(let i = 0; i < 10; i++){
    console.log(i);
}

2
//выведите в консоли каждый индекс элемента из массива с помощью for с тремя инструкциями
let arr1 = ['q','w','r','t'];

for(let i = 0; i < arr.lengrh; i++){
    console.log(i);
}

3
//выведите в консоли каждый элемент с помощью for...of
let arr2 = ['q','w','r','t'];



4
//выведите в консоли каждый индекс элемента с помощью for...in
let arr3 = ['q','w','r','t'];



5
//выведите в консоли каждый элемент с помощью forEach
let arr4 = ['q','w','r','t'];

let text1 = ""
text1.forEach(myFunc())

function myFunc(a, b) {
    a += b
}
console.log(myFunc(text1, value));

6
//выведите в консоли каждый индекс элемента с помощью forEach
let arr5 = ['q','w','r','t'];
arr5.forEach((index) => {
    console.log(index);
})

7
//выведите в консоли каждый элемент и индекс элемента с помощью forEach
let arr6 = ['q','w','r','t'];
arr5.forEach((index) => {
    console.log(index);
})

8
//выведите в консоли слово 'hello' с помощью while
let text = 'Hello';


9
//создайте любой цикл с помощью do...while
do {
    text += 'Число' + i
    i++
}
while(i < 5)

10
//создайте цикл который остановится если один из элементов будет строкой 'r'
let arr7 = ['q','w','r','t'];
for(let i = 0; i < arr7.length; i++){
    if(arr7[i] == 't'){
        console.log(arr7[i]);
        break
    }
    
}

11
//создайте цикл который не выведет в консоли строку 't' из массива, а все остальные выведет
let arr8 = ['q','w','r','t'];
for(let i = 0; i < arr8.length; i++){
    if(arr8[i] == 't'){
        continue
    }
    console.log(arr8[i]);
}

12


13
function empty(a){
    if(" "){
        return true
    }
    else{
        return false
    }
}

14
function divisibleByFive(x){
    if(x / 5){
        return true
    }
    else{
        return false
    }
}
console.log(10);

15


16
let length = [a, b, c, d, e, h]

function length(a){
    return a.length
}