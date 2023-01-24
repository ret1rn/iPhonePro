let colors = document.querySelectorAll(".colors li div")
let nameColor = document.querySelector("#color-name span")
let backImg = document.querySelector(".img")

function changeImg(active) {
    switch (active) {
        case "purple":
            nameColor.innerHTML = "- Deep Purple"
            backImg.style.backgroundImage = 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578)'
            break
        case "gold":
            nameColor.innerHTML = "- Gold"
            backImg.style.backgroundImage = "url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519)"
            break
        case "silver":
            nameColor.innerHTML = "- Silver"
            backImg.style.backgroundImage = "url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488)"
            break
        case "black":
            nameColor.innerHTML = "- Space Black";
            backImg.style.backgroundImage = "url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510)"
            break            
        default:
            console.log("ERROR 404");
            break
    }
}

colors.forEach(color => {
    color.onmouseover = () => {
        nameColor.innerHTML = color.getAttribute("name")
        
    }
    color.onmouseout = () => {
        if(nameColor.innerHTML == color.getAttribute('name')){
            nameColor.innerHTML = ""
        }
    }
    color.onclick = () => {
        changeImg(color.getAttribute("id"))
    }
})
