console.log('Hello Codeit');
console.log(15+2+3);
/* 아래 코드는 15를 출력하는 코드입니다. */
console.log(30/2); 
//console.log(11);
//주석 comment

console.log("Hello" + 'Codeit')



/* 에스프레소 3000 / 라떼 4300 / 카페모카 4800 */

// ctrl + / = 코멘트 만들기 


// 변수 선언
let espressoPrice = 3000;
let latte = 4300;
let caffemocca = 4800;
console.log(espressoPrice, latte, caffemocca)

console.log(espressoPrice * 2);
console.log(latte * 4 + caffemocca * 2);
console.log(latte + caffemocca);
console.log(espressoPrice + latte * 4 + caffemocca * 2);
console.log(latte * 3);


function myFunction(x) {
  let temp = 2*x + 3
  return temp
}
console.log(myFunction(2));


function add(x,y) {
  let teemp = x + y
  return teemp
}
console.log(add(7,2));

//조건문

let money = 1000;

if(money > 5000) {
  console.log("택시를 탄다.");
} else if(money > 2000) {
  console.log("버스를 탄다");
} else {
  console.log("걸어간다");
}
console.log();

// if / else if / else 는 조건문으로써, 무한정으로 늘리는 것이 가능. 하지만 그렇게 하지는 않음. 


//반복문 (while, for)
for (let i = 0; i < 11; i++){
  console.log("나무 찍기");
}

//forEach 의 for는 반복한다는 입장임
myArray = [1,2,3,4,5];

myArray.forEach(element => {
  console.log("나무 찍기" + element);
});