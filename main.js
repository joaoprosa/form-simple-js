let titulo = document.getElementById('inpTitle')
let imagem = document.getElementById('inpImg')
let paragrafo = document.getElementById('inpAbout')

let rendTitle = document.getElementById('renderTitle')
let rendImg = document.getElementById('renderImg')
let rendAbt = document.getElementById('renderAbout')


function clickSend(event){
    event.preventDefault()
    rendTitle.innerHTML = inpTitle.value
    rendImg.setAttribute('src', imagem.value)
    rendAbt.innerHTML = inpAbout.value
}