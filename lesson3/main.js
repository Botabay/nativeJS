// function =>
// handler (обработчик), listener (слушатель), subscriber (подписчик)
// - при наступлении события
// const event = new Event() - объект, который содержит сведения о
// событии
// function(event) - вызов функции
// event, ev, e === new Event()

// [] === new Array()
// {} === new Object()
// const map = new Map()
// const set = new Set()



const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

function handler_1() {
    alert("Yo!!")
}
function handler_2() {
    alert("Hey!!")
}
function handler_3(e) {
    e.stopPropagation()
    console.log(e.currentTarget.id)
}

// const anonymus = () => handler_1("Yo!")
// const anonymusNext = () => handler_1("Yo!")
//
// sm.onclick = anonymus
// sm.onclick = anonymusNext

// sm.onclick = ()=> {
//     handler_1()
//     handler_2()
// }
// sm.onclick = () => handler_1()


// sm.addEventListener("click", handler_1)
// sm.addEventListener("click", handler_2)
// sm.removeEventListener("click", handler_1)
sm.addEventListener("click", handler_3)
md.addEventListener("click", handler_3)
bg.addEventListener("click", handler_3)

const a = document.getElementById("a")
a.addEventListener("click", (e)=> {
    // e.preventDefault()
    alert("Yo?!!!!!!!!!!!!!!!!!!")
   return
})




