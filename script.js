var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popup-box")

var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
    
})

var container = document.querySelector(".container")
var addblog = document.getElementById("add-blog")
var blogtitleinput = document.getElementById("blog-title-input")
var blogauthorinput = document.getElementById("blog-author-input")
var blogcontentinput = document.getElementById("blog-content-input")

addblog.addEventListener("click", function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","blog-container")
    div.innerHTML = `<h2>${blogtitleinput.value}</h2>
                     <h5>${blogauthorinput.value}</h5>
                     <p>${blogcontentinput.value}</p>
                     <button onclick="deleteblog(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deleteblog(event){
    event.target.parentElement.remove()
}