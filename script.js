
document.getElementById("inputButton").addEventListener("click", function () {
    if (document.getElementById("inputButton").value == 0) {
        document.getElementsByTagName("body")[0].style.transition = "background-color 3s ease"
        document.getElementsByTagName("body")[0].style.background = "white"
        document.getElementsByTagName("body")[0].style.color = "black"
    } else {
        document.getElementsByTagName("body")[0].style.transition = "background-color 3s ease"
        document.getElementsByTagName("body")[0].style.background = "black"
        document.getElementsByTagName("body")[0].style.color = "white"
    }
})
