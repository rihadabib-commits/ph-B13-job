let  interview = [];
let rejected = [];


let total = document.getElementById('total');
let  two = document.getElementById('two');
let three = document.getElementById('three');

const allBtn = document.getElementById ('all-btn')
const allInterviewBtn = document.getElementById ('all-interview-btn')
const allRejectedBtn = document.getElementById ('all-rejected-btn')
    
const cardSection = document.getElementById('cards');
     
const  mainContainer =document.querySelector('main');


function calculateCount(){
     total.innerText = cardSection.children.length
     two.innerText = interview.length
     three.innerText = rejected.length
}

calculateCount()


function toggleStyle(id){

    // if any button has black then removed
      allBtn.classList.remove('bg-[#3b82f6]','text-white')
      allInterviewBtn.classList.remove('bg-[#f9f4f4]', 'text-white')
       allRejectedBtn.classList.remove('bg-[#f9f4f4]', 'text-white')
//   adding gray bg for current button
       allBtn.classList.add('bg-gray-300','text-black')
      allInterviewBtn.classList.add('bg-gray-300','text-black')
      allRejectedBtn.classList.add('bg-gray-300','text-black')
      
          console.log(id);
    
      const selected = document.getElementById(id)
      console.log(selected);
       
// adding black bg for current button
      selected.classList.remove('bg-gray-300', 'text-black')
      selected.classList.add('bg-black', 'text-white');
}