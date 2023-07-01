const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
let  counterel = document.getElementById('counter')
const ulItems = document.getElementById('list_items')
const p = document.getElementById('para')


let counter = 0
let clicked = 0

function IncrementNo(){
  
   counter++
   counterel.innerText = counter

   const li = document.createElement('li')
   li.setAttribute('data-counter' , counter)
   li.innerHTML = '<b> Something </b>' + counter;
   
   

   if (counter %2 === 0){
      li.style.background = 'red'
   }else {
     li.style.background = 'yellow'
   }

   console.log(li)
   ulItems.appendChild(li)

   clicked++
   p.innerHTML = '<p> you have clicked this ' + clicked + ' times </p>'
   }

function DecrementNo(){
   const li = ulItems.querySelector('[data-counter="' + counter + '"]');

   const num = parseInt(li.getAttribute('data-counter') , 10)

   if (num % 2 === 0){
   li.remove()
   }
   clicked++
   counter--
   counterel.innerText = counter
   
   p.innerHTML = '<p> you have clicked this ' + clicked + ' times </p>'
   
}


incrementBtn.addEventListener('click' , IncrementNo)
decrementBtn.addEventListener('click' , DecrementNo)