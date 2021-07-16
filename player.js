class Player
{
    constructor()
    {
        this.size2 = 30
        this.size = 75
        this.x = 50
        this.y = height - this.size
        this.velocity_Y = 0
        this.Gravity = 0.5;
    }
    show()
    {
        image(pImg,this.x,this.y,this.size,this.size)
    }
    
    jump()
    {
        if(this.y == height - this.size)
        {
            this.velocity_Y = -9;
        }
    }

    move()
    {
        this.y += this.velocity_Y;
        this.velocity_Y += this.Gravity
        this.y = constrain(this.y,0,height - this.size)
    }

    collided(currentObs)
    {
        let isColliding = collideRectRect(this.x,this.y,this.size,this.size,currentObs.x,currentObs.y,currentObs.size,currentObs.size)
        return isColliding
    }
}