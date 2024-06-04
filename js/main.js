const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const image3 = document.querySelector('.image3')
const image4 = document.querySelector('.image4')

image1.addEventListener('mouseover', (e)=>{
    image1.style.border = "2px solid yellow"
})
image1.addEventListener('mouseleave', (e)=>{
    image1.style.border = ""
})
image2.addEventListener('mouseover', (e)=>{
    image2.style.border = "2px solid orange"
})
image2.addEventListener('mouseleave', (e)=>{
    image2.style.border = ""
})
image3.addEventListener('mouseover', (e)=>{
    image3.style.border = "2px solid white"
})
image3.addEventListener('mouseleave', (e)=>{
    image3.style.border = ""
})
image4.addEventListener('mouseover', (e)=>{
    image4.style.border = "2px solid lime"
})
image4.addEventListener('mouseleave', (e)=>{
    image4.style.border = ""
})
