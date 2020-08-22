const congrat = document.querySelector(".congrat")
const part = document.querySelector(".part1")
const error = document.querySelector("#error")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")

submit.addEventListener("click", () => {
    if (email.value == "polor1987@gmail.com" && password.value == "polor1987") {
        congrat.style.display = "flex"
        part.style.display = "none"

    } else {
        error.style.display = "flex"
    }
})