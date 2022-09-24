console.log("hello world!");

let message = document.querySelector("#message")

const addMovie = (e) => {
 e.preventDefault()
 let inputField = document.querySelector("input");
 let movie = document.createElement("li");
 const movieTitle = document.createElement("span");
 movieTitle.textContent = inputField.value;
 movieTitle.addEventListener("click", crossOffMovie)
 movie.appendChild(movieTitle)
 const deleteBtn = document.createElement("button")
 deleteBtn.textContent = "x"
 deleteBtn.addEventListener ("click", deleteMovie)
 movie.appendChild(deleteBtn)
 const list = document.querySelector("ul")
 list.appendChild(movie)
 inputField.value = ""

}


form = document.querySelector("form")
form.addEventListener("submit", addMovie)

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = (`${e.target.parentNode.firstChild.textContent} deleted!`)
    revealMessage()
} 

const crossOffMovie = (e) => {
    e.target.classList.toggle("checked")
    if (e.target.classList.contains("checked")){message.textContent = `${e.target.textContent} Watched!`}
    else {message.textContent = `${e.target.textContent} Added Back!`}
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove("hide")
    setTimeout (() => message.classList.add("hide"), 1000)
}