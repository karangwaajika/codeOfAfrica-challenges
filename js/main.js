const images = document.querySelectorAll('figure')

images.forEach((image)=>{
    image.addEventListener('mouseover', ()=>{
        image.style.border = "2px solid white"
    })

    image.addEventListener('mouseleave', ()=>{
        image.style.border = ""
    })
})
