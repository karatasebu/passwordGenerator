const pwEl = document.querySelector("#password")
const copyEl = document.querySelector("#copy")
const lengthEl = document.querySelector("#length")
const upperEl = document.querySelector("#upper")
const lowerEl = document.querySelector("#lower")
const numberEl = document.querySelector("#number")
const symbolEl = document.querySelector("#symbol")
const generateEl = document.querySelector("#generate")

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!'^+%&/()=?<#${[]}@"

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = lengthEl.value
    let password = ""
    if(len < 8 || len > 40) {
        alert("Password length should be bigger than 8 and smaller than 40")
    }
    for(let i = 0; i < len; i++) {
        const x = generateX()
        password += x
    }
    pwEl.innerHTML = password
}

function generateX() {
    const values = []

    if(upperEl.checked) {
        values.push(getUpperCase())
    }
    if(lowerEl.checked) {
        values.push(getLowerCase())
    }
    if(numberEl.checked) {
        values.push(getNumber())
    }
    if(symbolEl.checked) {
        values.push(getSymbol())
    }
    if(values.length === 0) return ""

    return values[Math.floor(Math.random() * values.length)]
}

generateEl.addEventListener("click", generatePassword)

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = pwEl.innerText;

    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
})