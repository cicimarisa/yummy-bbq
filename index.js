const formHtml = document.getElementById("form")

formHtml.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Thanks for visiting. This is a prototype page. It wont submit the data.")
    formHtml.reset()
})
