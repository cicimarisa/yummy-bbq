document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    alert("Thanks for visiting. This is a prototype page. It wont submit the data.")
    document.getElementById("form").reset()
})