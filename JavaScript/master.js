

let feature = document.querySelector("#feat")
let featureUp = document.querySelector("#feat .up")
let featureDown = document.querySelector("#feat .down")
let featureList = document.querySelector(".feat-list")

let company = document.querySelector("#comp")
let companyUp = document.querySelector("#comp .up")
let companyDown = document.querySelector("#comp .down")
let companyList = document.querySelector(".comp-list")

let menuBar = document.querySelector(".menu")
let closeBtn = document.querySelector(".close-icon img")


feature.onclick = (e) => {
    e.target.classList.toggle("active")
    featureUp.classList.toggle("active")
    featureDown.classList.toggle("active")
    featureList.classList.toggle("open")
}
company.onclick = (e) => {
    e.target.classList.toggle("active")
    companyUp.classList.toggle("active")
    companyDown.classList.toggle("active")
    companyList.classList.toggle("open")
}

menuBar.addEventListener("click", (e) => {
    document.querySelector(".overlay").classList.add("show")
    document.querySelector(".links").classList.add("show")
})

closeBtn.addEventListener("click" , (e) => {
    document.querySelector(".overlay").classList.remove("show")
    document.querySelector(".links").classList.remove("show")
})

window.onclick = (event) => {
    if(event.target !== company && event.target !== feature) {
        feature.classList.remove("active")
        featureUp.classList.remove("active")
        featureDown.classList.remove("active")
        featureList.classList.remove("open")
    }
    if (event.target !== company && event.target !== feature) {
        company.classList.remove("active")
        companyUp.classList.remove("active")
        companyDown.classList.remove("active")
        companyList.classList.remove("open")
    }
    if (event.target === document.querySelector(".overlay")) {
        document.querySelector(".overlay").classList.remove("show")
        document.querySelector(".links").classList.remove("show")
    }
}
