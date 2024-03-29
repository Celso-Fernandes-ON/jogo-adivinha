const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let machineNumber = Math.round(Math.random()*10)
let attempts = 1

const btnTry = document.querySelector('button#btnTry')
const btnReset = document.querySelector('button#btnReset')

document.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    
    if((inputNumber.value) == machineNumber){
        
        toggleScreen()
        
        if(attempts==1){
            screen2.querySelector('h2').innerHTML = (`Acertou em 1 tentativa!`)
        }
        else{
            screen2.querySelector('h2').innerHTML = (`Acertou em ${attempts} tentativas!`)
        }
    }
    inputNumber.value = ""
    attempts++
}

btnReset.addEventListener('click', handleResetClick)
btnTry.addEventListener('click', handleTryClick)

function handleResetClick(){
    toggleScreen()
    attempts = 1 
    machineNumber = Math.round(Math.random()*10)
}
function toggleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}