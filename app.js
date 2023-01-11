const Startbtn = document.querySelector('.start-btn')
const Stopbtn = document.querySelector('.stop-btn')
const Result = document.querySelector('.result')



let setInt;
Startbtn.addEventListener('click', () => {
     let a = 0
      setInt = setInterval(() => {
      a++
      Result.textContent = a
     
},1000)
} )


   Stopbtn.addEventListener('click', () => {
    setTimeout(() => {
        clearInterval(setInt)
      },1000)
   })