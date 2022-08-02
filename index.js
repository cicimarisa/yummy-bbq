document.getElementById("submit-btn").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thanks for visiting. This is a prototype page. It wont submit the data.")
    document.getElementById("form").reset()
})
