// //절차 지향형함수
// const box1 = document.querySelector('.box1');
// const box2 = document.querySelector('.box2');


// box1.addEventListener('click',function(){
//     changeBG(box1);
//     console.log(box1);
// });

// box2.addEventListener('click',function(){
//     changeBG(box2);
// });

// function changeBG(target){
//     target.style.backgroundColor = 'hotpink';
// }

//객체지향형 함수
function Box(el){
    this.selector = document.querySelector(el);
    this.selector.addEventListener('click',function(e){
        //console.log(e.currentTarget);
    });
}
const box1 = new Box('.box1'); //object 뽑힘
const box2 = new Box('.box2');
console.log(box1,box2);