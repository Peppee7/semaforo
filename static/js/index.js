let n = 0

function getRandom(min = 0, max = 100) {
    n = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(n)
    return n;
}

getRandom(1000, 2000)

let bg1_1 = document.querySelector("[class=background-1-1]")
let bg2_1 = document.querySelector("[class=background-2-1]")
let bg3_1 = document.querySelector("[class=background-3-1]")
let bg4_1 = document.querySelector("[class=background-4-1]")
let bg5_1 = document.querySelector("[class=background-5-1]")

let bg1_2 = document.querySelector("[class=background-1-2]")
let bg2_2 = document.querySelector("[class=background-2-2]")
let bg3_2 = document.querySelector("[class=background-3-2]")
let bg4_2 = document.querySelector("[class=background-4-2]")
let bg5_2 = document.querySelector("[class=background-5-2]")

let bg1_3 = document.querySelector("[class=background-1-3]")
let bg2_3 = document.querySelector("[class=background-2-3]")
let bg3_3 = document.querySelector("[class=background-3-3]")
let bg4_3 = document.querySelector("[class=background-4-3]")
let bg5_3 = document.querySelector("[class=background-5-3]")

let bg1_4 = document.querySelector("[class=background-1-4]")
let bg2_4 = document.querySelector("[class=background-2-4]")
let bg3_4 = document.querySelector("[class=background-3-4]")
let bg4_4 = document.querySelector("[class=background-4-4]")
let bg5_4 = document.querySelector("[class=background-5-4]")

function color1() {
    bg1_1.classList.add("redBg")
    bg2_1.classList.add("redBg")
    bg3_1.classList.add("redBg")
    bg4_1.classList.add("redBg")
    bg5_1.classList.add("redBg")

    n = 0
    getRandom(1000, 2000)
    setTimeout(color2, n);
}

function color2() {
    bg1_2.classList.add("redBg")
    bg2_2.classList.add("redBg")
    bg3_2.classList.add("redBg")
    bg4_2.classList.add("redBg")
    bg5_2.classList.add("redBg")

    n = 0
    getRandom(1000, 2000)
    setTimeout(color3, n);
}

function color3() {
    bg1_3.classList.add("redBg")
    bg2_3.classList.add("redBg")
    bg3_3.classList.add("redBg")
    bg4_3.classList.add("redBg")
    bg5_3.classList.add("redBg")

    n = 0
    getRandom(1000, 2000)
    setTimeout(color4, n);
}

function color4() {
    bg1_4.classList.add("redBg")
    bg2_4.classList.add("redBg")
    bg3_4.classList.add("redBg")
    bg4_4.classList.add("redBg")
    bg5_4.classList.add("redBg")

    n = 0
    getRandom(1000, 3000)
    setTimeout(start, n);
}

function start() {
    let date1 = new Date()
    time = date1.getTime()

    bg1_1.classList.remove("redBg")
    bg2_1.classList.remove("redBg")
    bg3_1.classList.remove("redBg")
    bg4_1.classList.remove("redBg")
    bg5_1.classList.remove("redBg")

    bg1_2.classList.remove("redBg")
    bg2_2.classList.remove("redBg")
    bg3_2.classList.remove("redBg")
    bg4_2.classList.remove("redBg")
    bg5_2.classList.remove("redBg")

    bg1_3.classList.remove("redBg")
    bg2_3.classList.remove("redBg")
    bg3_3.classList.remove("redBg")
    bg4_3.classList.remove("redBg")
    bg5_3.classList.remove("redBg")

    bg1_4.classList.remove("redBg")
    bg2_4.classList.remove("redBg")
    bg3_4.classList.remove("redBg")
    bg4_4.classList.remove("redBg")
    bg5_4.classList.remove("redBg")


    bg1_1.classList.add("greenBg")
    bg2_1.classList.add("greenBg")
    bg3_1.classList.add("greenBg")
    bg4_1.classList.add("greenBg")
    bg5_1.classList.add("greenBg")

    bg1_2.classList.add("greenBg")
    bg2_2.classList.add("greenBg")
    bg3_2.classList.add("greenBg")
    bg4_2.classList.add("greenBg")
    bg5_2.classList.add("greenBg")

    bg1_3.classList.add("greenBg")
    bg2_3.classList.add("greenBg")
    bg3_3.classList.add("greenBg")
    bg4_3.classList.add("greenBg")
    bg5_3.classList.add("greenBg")

    bg1_4.classList.add("greenBg")
    bg2_4.classList.add("greenBg")
    bg3_4.classList.add("greenBg")
    bg4_4.classList.add("greenBg")
    bg5_4.classList.add("greenBg")

    return time;
}


function callback(event) {
    if(flag == 0) {
        let date = new Date()
        mytime = date.getTime()

        console.log("time:" + time)
        console.log("mytime:" + mytime)
        console.log(mytime - time)
        
        if((mytime - time)/1000 > 100) {
            t.innerHTML = "ERRORE"
        } else {
            t.innerHTML = (mytime - time)/1000
        }

        flag = 1
    }
}


let time = 0
let mytime = 0

let button = document.querySelector("[type=button]")
let t = document.querySelector("#time")
let flag = 0

if(flag == 0) {
    button.addEventListener("click", callback)
}

setTimeout(color1, n);