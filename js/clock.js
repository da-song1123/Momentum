const clock = document.querySelector("h2#clock p")

function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`.padStart(2, "0")
}
// 5초마다 한번씩
// setInterval(sayHello, 5000)
getClock()
setInterval(getClock, 1000)