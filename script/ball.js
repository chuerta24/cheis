const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddel)
let LPaddleWidth = 20
let LPaddleHeight = 100
let LPaddleSpeed = 5
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2

const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth

setInterval(moveBall, 10)

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ){
        ballXDirection = ballXDirection * -1
    }
}





createBall()
function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "purple"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}
createLPaddel()
function createLPaddel() {
    LPaddel.style.height = `${LPaddelHeight}px`
    LPaddel.style.width = `${LPaddelWidth}px`
    LPaddel.style.backgroundColor = 'blue'
    LPaddel.style.position = 'absolute'
    LPaddel.style.left = "50px"
    LPaddel.style.height = `${LPaddelYPosition}px`
}

LPaddel.addEventListener('keydown', (event)=> {
    if (event.key == 'w'){
        if (LPaddelYPosition <= 0) {
            LPaddelYPosition = 0
        }
        else {
            LPaddelYPosition = LPaddelYPosition - LPaddelSpeed
        }
    }
    if (event.key == 's') {
        if (LPaddelYPosition >= windowHeight - LPaddelHeight){
            LPaddelYPosition = windowHeight - LPaddelHeight
        }
        else {
            LPaddelYPosition = LPaddelYPosition + LPaddelSpeed
        }
    }
    LPaddel.style.top = `${LPaddelYPosition}px`
})

function animate() {
    moveBall()
    moveLPaddel()
    requestAnimationFrame(animate)
}
animate()
