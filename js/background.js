const images = ["1.jpg", "2.jpg", "3.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]

const image = document.createElement("img")

image.src = `img/${chosenImage}`

document.body.appendChild(image)