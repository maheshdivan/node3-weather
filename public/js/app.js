console.log('Client side javascript file is loaded!')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = "Loading"
messageTwo.textContent = ''
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let location = search.value
    
    if(!location){
        location = "!"
    }

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.address
            messageTwo.textContent = data.location
        }
    })
})
})