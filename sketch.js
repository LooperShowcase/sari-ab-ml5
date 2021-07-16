let player
let pImg
let oImg
let bgImg
let obstcles = []
let wordClassifier

function preload() 
{
  pImg = loadImage("player.png")
  oImg = loadImage("obstcle.png")
  bgImg = loadImage("background.png")
  
  let options = {
    probabilityThreshold: 0.85
  }
  wordClassifier=ml5.soundClassifier("speechCommands18w", options)

}

function setup() {
  createCanvas(622, 345);
  player = new Player();
  wordClassifier.classify(hearWord)
}

function hearWord(error,results)
{
  if(results[0].label === "up")
  {
    player.jump()
  }
}

function keyPressed()
{
  if(key == " ")
  {
    player.jump();
  }
}

function draw() {
  background(bgImg);
  player.show();
  player.move();

  if(random(1) < 0.01)
  {
    obstcles.push(new Obstcle())
  }

  for(let obs of obstcles)
  {
    obs.show()
    obs.move()

    if(player.collided(obs) == true)
    {
      textSize(50)
        text("noob",width / 2 - 50,height / 2)
        noLoop()
    }
  }
}
