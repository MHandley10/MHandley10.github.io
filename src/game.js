var title = "My Balloon Game"
//hoisting is the difference between let and var
let developer = "Matthew Handley"

const BALLOON_TOTAL = 20

const balloons = []

let score = 0


function greeting() {
    //document.write("And if I don't see ya...") shouldn't use document.write unless you want to rewrite page
    //window.alert("Good afternoon, good evening and good night.")
    //let gameTitle = title + " - " + "by" + developer
    let gameTitleText = `${title} - by ${developer}`

    let gameTitle = document.getElementById("game-title");
    gameTitle.innerHTML = gameTitleText
}

function setup() {
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")

    for(let i = 0; i < BALLOON_TOTAL; i++){
    balloons.push(new Balloon(
        random(width), 
        random(height),  
        33, 
        color(random(255), random(255), random(255))))
    }
}

function draw() {
    background(135, 206, 235)

    for(let balloon of balloons){
        balloon.blowAway()
        balloon.checkToPop()
        fill(balloon.col)
        circle(balloon.x, balloon.y, balloon.r)
    }

    if(score == BALLOON_TOTAL) youWin()
}

function youWin() {
    noLoop()

    let para = document.createElement("p")

    para.style.fontSize = "64px"

    let textNode = document.createTextNode("You win!")

    para.appendChild(textNode)

    document.getElementById("game-container").appendChild(para)

    let canvas = document.querySelector("#game-container canvas")
    canvas.remove()
}



//balloons.push("A new balloon")
//balloons.push(1)

/*const testBalloon = {
    label: "Pop me!",
    x : 100,
    y :50,
    isPopped : false,
    move(){
        this.x += 10
    }
}*/