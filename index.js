
const inputEvent = (e) => {
    if (e.target.value) {
        if (!e.target.nextElementSibling) {
            createWord()
        }
    } else {
        removeWord(e.target)
    }
}

document.querySelectorAll(".inputWord").forEach(element => element.addEventListener("input",inputEvent))

function createWord() {
    const element = document.createElement("input")
    element.placeholder = "Слово"
    element.type = "text"
    element.className = "inputWord"
    document.getElementById("wordList").appendChild(element)
    element.addEventListener("input",inputEvent)
}

function removeWord(element) {
    if (element?.nextElementSibling) {
        if (!element.nextElementSibling?.value) {
            removeWord(element.nextElementSibling)
            element.nextElementSibling?.remove()
        }
    }
}

document.getElementById("form").addEventListener("submit",(e) => {
    e.preventDefault()
    const words = [...document.querySelectorAll(".inputWord:not(:last-child)")].sort(() => Math.random() - 0.5)

    document.getElementById("wordsListTotal").innerHTML = words.reduce((result,{value},key) => result + `${key > 0 ? "\n" : ""} ${key + 1}. ${value}`,"")
})