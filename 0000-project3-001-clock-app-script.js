let clock = document.querySelector(".clock")

const tick = () => {

  const now = new Date()

  const hours = now.getHours()

  const minutes = now.getMinutes()

  const seconds = now.getSeconds()

  console.log(hours, minutes, seconds)

  const pageHTML = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span> 
    `

  clock.innerHTML = pageHTML
};

setInterval(tick, 1000); // 1 second
