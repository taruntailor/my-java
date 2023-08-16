
let iconn = document.querySelector(".fa-moon");
iconn.addEventListener("click", function () {
    document.body.classList.toggle("darkTheme")

    if (document.body.classList.contains("darkTheme") == true) {
        iconn.classList.remove("fa-moon")
        iconn.classList.add("fa-sun")
    } else {
        iconn.classList.remove("fa-sun")
        iconn.classList.add("fa-moon")
    }
})