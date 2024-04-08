//loop_1_m WHILE
i =1
console.log('count to 100 while')
while(i<=10){
    console.log(i)
    i++
}
///

//loop_1_m FOR
console.log('count to 100 for')
for(i=1;i<=10;i++){console.log(i)}
///

//loop_1_m DO WHILE
i =1
console.log('count to 100 do while')
do{
    console.log(i)
    i++
}while(i<=10);
///

//loop_2_m WHILE
let sum=0;
i =0;
while(i<5){
    i++
    sum+=i
    // sum+=parseFloat(prompt('enter number: '))
}
console.log('while sum of inputs: ',sum)
console.log('while average of inputs: ',sum/i)
/////

//loop_2_m FOR
sum=0;
i =0;
for(i=0;i<5;i++){
    // sum+=parseFloat(prompt('enter number: '))
    sum+=i+1
}
console.log('for sum of inputs: ',sum)
console.log('for average of inputs: ',sum/i)
///

//loop_2_m DO WHILE
sum=0;
i =0;
do{
    i++
    sum+=i
    // sum+=parseFloat(prompt('enter number: '))
}while(i<5);
console.log('while sum of inputs: ',sum)
console.log('while average of inputs: ',sum/i)
/////

//loop_3_m WHILE
i =2;
console.log('count even to 50 while')
while(i<=50){
    console.log(i)
    i+=2
}
////

//loop_3_m FOR
console.log('count even to 50 for')
for(i=2;i<=50;i+=2){console.log(i)}
/////

//loop_3_m DO WHILE
i =2;
console.log('count even to 50 do while')
do{
    console.log(i)
    i+=2
}while(i<=50)
////

//loop_4_m WHILE
console.log('count every 3 to 50 while')
i =1;
while(i<=50){
    console.log(i)
    i+=3
}
/////

//loop_4_m FOR
console.log('count every 3 to 50 for')
for(i=1;i<=50;i+=3){console.log(i)}
////

//loop_4_m DO WHILE
console.log('count every 3 to 50 DO while')
i =1;
do{
    console.log(i)
    i+=3
}while(i<=50)
/////

//loop_5_m WHILE
// number=parseFloat(prompt('enter number: '))
console.log('factorial while')
let number=4
sum=1
i =1
while(i<number){
    sum+=sum*i
    i++
}
console.log(sum)
/////

//loop_5_m FOR
console.log('factorial for')
number=4
sum=1
for(i=1;i<number;i++){
    sum+=sum*i
}
console.log(sum)
/////


//loop_6_m WHILE
console.log('min while')
let min=NaN;
i =0;
while(i<5){
    num=i//לבדיקה
    // num+=parseFloat(prompt('enter number: '))
    if (isNaN(min)){min=num}
    min=Math.min(min,num)
    i++
}
console.log(min)
////

//loop_6_m FOR
console.log('min for')
min=NaN;
i =0;
for(i=0;i<5;i++){
    num=i//לבדיקה
    // num+=parseFloat(prompt('enter number: '))
    if (isNaN(min)){min=num}
    min=Math.min(min,num)
}
console.log(min)
///

//loop_9_m
console.log('nim/max n inputs')
// num=parseInt(prompt('enter number: '))
num=10
min=num
let max=num
while(num>0 && ! isNaN(num)){
    // num=i//לבדיקה
    if (isNaN(min)){min=num}
    min=Math.min(min,num)
    max=Math.max(max,num)
    num=0
    // num=parseInt(prompt('enter number: '))
}
console.log(min)
console.log(max)
////

//loop_10_m
number=673
console.log('digids')
// number=parseInt(prompt('enter number: '))
num_digits=parseInt(Math.log10(number))
for(i=num_digits; i>=0;i--){
    console.log(parseInt(number/10**i))
    number=number%(10**i)
}
///



//loop_11_m
count=0;
// random_num=parseInt(Math.random(0,100))
// random_num=Math.floor(Math.random() * 99) + 1;
// console.log(random_num)
// number=parseInt(prompt('enter number: '))
// while(number!=random_num){
//     count++;
//     if (number>random_num){
//         number=parseInt(prompt('lower: '))
//     }
//     else{
//         if (number<random_num){
//             number=parseInt(prompt('higher: '))
//         }
//     }
// }
// console.log('took you ', count, ' tries')
////

//loop_12_m
width=5
hight=3
text=''
for (i=0;i<width;i++){
    text+="*"
}
for (i=0;i<hight;i++){
    console.log(text)
}
//////

//loop_13_m
width=5
text=''
for (i=0;i<width;i++){
    text+="*"
    console.log(text)
}
//////


///loops_nested_3
for(i=1;i<=10;i++){
    text=''
    for(y=1;y<=10;y++){
        text+=i*y
        text+=','
    }
    console.log(text)
}