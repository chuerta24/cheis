const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 300
let LPaddleSpeed = 30
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

const RPaddle = document.createElement('div')
document.body.appendChild(RPaddle)
let RPaddleWidth = 10
let RPaddleHeight = 300
let RPaddleSpeed = 30
let RPaddleYPosition = windowHeight / 2 - RPaddleHeight / 2
let RPaddleXPosition = windowWidth - 70


const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 10
let ballXDirection = 1
let ballYDirection = 1


let score = 0
let level = 1

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}

createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "purple"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}


createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}
createRPaddle()
function createRPaddle() {
    RPaddle.style.height = `${RPaddleHeight}px`
    RPaddle.style.width = `${RPaddleWidth}px`
    RPaddle.style.backgroundColor = 'red'
    RPaddle.style.position = 'absolute'
    RPaddle.style.left = `${RPaddleXPosition}px`
    RPaddle.style.top = `${RPaddleYPosition}px`
}


wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
        }
        if (event.key == 's') {
            sKey = true
        }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})
upKey = false
downKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        upKey = true
    }
    if (event.key == 'ArrowDown') {
        downKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowUp') {
        upKey = false
    }
    if (event.key == 'ArrowDown') {
        downKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}
function moveRPaddle() {
    if (upKey == true && RPaddleYPosition > 0) {
        RPaddleYPosition = RPaddleYPosition - RPaddleSpeed
    }
    if (downKey == true && RPaddleYPosition < windowHeight - RPaddleHeight) {
        RPaddleYPosition = RPaddleYPosition + RPaddleSpeed
    }

    RPaddle.style.top = `${RPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    moveRPaddle()
    requestAnimationFrame(animate)
}
animate()


