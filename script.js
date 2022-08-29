const messageData = [
    {
        id: 1,
        message: "I thought my life was complete, till I met you. Then I realised I had been missing the most important piece to the puzzle of my life. You complete me, baby."
    },
    {
        id: 2,
        message: "I found you, and I’ve not known anything less than joy and abundance since then. You’re indeed a huge blessing baby."
    },
    {
        id: 3,
        message: "Baby, I adore you. I’ve been thinking… I really don’t know what I did to deserve such an angel as you."
    },
    {
        id: 4,
        message: "I just wanted to let you know I’m blessed with the most beautiful damsel in the world. She’s reading this text now and I’m sure she’s blushing."
    },
    {
        id: 5,
        message: "I’m in love with a very beautiful and classy uptown chic. I need her to know she means the world and life to me, that’s why I sent her this text."
    },
    {
        id: 6,
        message: "A thought of you just crossed my mind and I couldn’t help but blush. Baby, you’re all I need and want."
    },
    {
        id: 7,
        message: "I love you so much, babe. Never knew I would ever love someone this much, you are different shades of awesome."
    },
    {
        id: 8,
        message: "You wouldn’t believe me if I told you how much I look forward to every single time we get to hang out or go on a date. I love what your company does to me."
    },
    {
        id: 9,
        message: "You’re for keeps darling. I want to be the man that puts smiles on that pretty face of yours. Please let me love you now and forever."
    },
    {
        id: 10,
        message: "I just wanted to let you know that your wife material is so durable and original that even the strongest of chemicals can never make it fade or tear. Can’t wait to be married to you."
    },  
    {
        id: 11,
        message: "There are a billion stars in the sky, but the brightest one is on earth. Thank you for being mine, my beautiful star."
    },  
    {
        id: 12,
        message: "Your happiness matters to me more than my own. I can do anything and give everything to see you smile."
    },
    {
        id: 13,
        message: "I am lucky that an incredible woman like you chose me."
    },
    {
        id: 14,
        message: "Whenever you need me, you will always find me by your side, holding you close."
    },
    {
        id: 15,
        message: "The world might change, we might grow old, but my love for you will always remain constant and never-ending."
    }
]

const powerBtn = document.querySelector(".power-btn")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const displayMessage = document.querySelector(".displayMsg")

let count = -1

powerBtn.addEventListener("click", (e) => {
    powerBtn.textContent = e.target.textContent == "on" ? "off" : "on"

    if (e.target.textContent == "on"){
        displayMessage.textContent = "beeper off."
        prevBtn.classList.add("disabled")
        nextBtn.classList.add("disabled")
    }else{
        displayMessage.textContent = "beeper on."
        nextBtn.classList.remove("disabled")
    }
})

const nextMessage = () => {
    const messageArr = messageData
    const len = messageArr.length - 1
    if (count < len){
        prevBtn.classList.remove("disabled")
        count += 1
    }else if(count === len){
        nextBtn.classList.add("disabled")
    }else return

    const message = messageArr[count].message
    displayMessage.textContent = message
}

const prevMessage = () => {
    const messageArr = messageData

    if (count > 0){
        nextBtn.classList.remove("disabled")
        count -= 1
    }else if(count === 0){
        prevBtn.classList.add("disabled")
    }else return

    const message = messageArr[count].message
    displayMessage.textContent = message
}

nextBtn.addEventListener("click", nextMessage)
prevBtn.addEventListener("click", prevMessage)