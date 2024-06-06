let scrollContainer =  document.querySelector(".gallery");
let bckbtn = document.getElementById("bckbtn");
let nxtbtn = document.getElementById("nxtbtn");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault;
    scrollContainer.scrollLeft += e.deltaY
    scrollContainer.style.scrollBehavior = "auto"
})

nxtbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900
})
bckbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900
})

// in this project we are make css transistion greyscale and scale give smooth effect.
// another we are using querySelector to select parent div name is gallery
// then we target both nxt and bck button from getElementbyId()
// then we use addeventListener use wheel event on mouse wheel scroll gallery images move left and right with scrollLeft
// after that we use addeventlistner on both btn to scroll on click we use scrollLeft = 900px beacuse gallery [parent div] width is 900px