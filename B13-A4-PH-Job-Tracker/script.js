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
const filterdSection = document.getElementById('filterd-section');


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
      selected.classList.add('bg-black', 'text-white')

      if(id =='all-interview-btn'){
           cardSection.classList.add('hidden');
             filterdSection.classList.remove('hidden')
           
      }
      else if (id==  'all-btn'){
        cardSection.classList.remove('hidden');
        filterdSection.classList.add('hidden')
      }
}

mainContainer.addEventListener('click',function(event){
      console.log(event.target.classList.contains('interview-btn'))  

    if(event.target.classList.contains('interview-btn') ){
      const parentNode  = event.target.parentNode.parentNode
      const mobile = parentNode.querySelector('.mobile').innerText;
     const react = parentNode.querySelector('.react').innerText;
     const light = parentNode.querySelector('.light').innerText;
     const water = parentNode.querySelector('.water').innerText;
     const status = parentNode.querySelector('.status').innerText;
       
        parentNode.querySelector('.status').innerText = 'Applied'


       const  cardInfo = {mobile,
        react,
        light,
        water,
        status:'Applied'}

      const mobileExits =  interview.find(item=> item.mobile == cardInfo.mobile)

      parentNode.querySelector('.status').innerText = 'Applied'
      if(!mobileExits){
        interview.push(cardInfo)
      }
       renderInterview()
       calculateCount()
    }
    });

    function renderInterview(){
              filterdSection.innerHTML = ''

              for(let inte of interview){
                console.log(inte)
                let div = document.createElement('div');

                div.className = 'card flex justify-between bg-[#fbf9f9]'
                div.innerHTML = `
                         <div class="space-y-6 pl-4">
                       <div class="py-3 ">
                         <p class="font-bold mobile">${inte.mobile}</p>
                        <p class="opacity-55 react">Web Designer & Developer</p>
                       </div>
                       <p class="opacity-55 light">Los Angeles, CA• Part-time • $80,000 - $120,000</p>
                       <div><button class="bg-[#e0eaf5] py-2 px-5 rounded-[4px]  hover:bg-gray-400 hover:text-white transition duration-300">${inte.status}</button>
                        <br>
                       <p class="mt-4 water">Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.</p>
                    </div>
                    <div class="pb-4">
                        <button id="inter" class=" border border-green-400 px-5 py-2 rounded-[4px]  hover:bg-green-400 hover:text-white transition duration-300" ><span class="text-[#10b981] font-bold">Interview</span></button>
                        <button id="rej" class="border border-red-400 px-5 py-2 rounded-[4px]  hover:bg-red-400 hover:text-white transition duration-300"><span class="text-[#ef4444] font-bold">Rejected</span></button>
                    </div>
                    </div>
                    <div><button  class="px-6 my-4"><img src="Trash.png" alt="" srcset="" class="border border-black-0 rounded-full my-7 mr-5 "></button></div>

                `
                filterdSection.appendChild(div)
              }
    }