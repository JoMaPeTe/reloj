const horaContainer= document.querySelector('.hora')
// const minutosContainer= document.querySelector('.minutos')
// const segundosContainer= document.querySelector('.segundos')

const actualizarHora = setInterval(function(){
    const date = new Date()
    s_date= date.toString();
  
    let horas = s_date.slice(16,18)
    let minutos = s_date.slice(19,21)
    let segundos = s_date.slice(22,24)
    // let horas = date.getHours()
    // let minutos = date.getMinutes()
    // let segundos = date.getSeconds()
    horaContainer.innerHTML = `${horas} : ${minutos} : ${segundos}`
    // minutosContainer.innerHTML = minutos
    // segundosContainer.innerHTML = segundos
},1000)