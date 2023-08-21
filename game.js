class Bee extends Obj{
    dir = 0
    pts = 0
    vidas = 3

    move(){
        this.x += this.dir
        if(this.x <= 16){
            this.x = 16
        }else if (this.x >= 400){
            this.x = 400
        }
        if(this.y <= 16){
            this.y = 16
        }else if (this.x >= 600){
            this.x = 600
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.width)&&
            (this.x + this.width > objeto.x)&&
            (this.y < objeto.y + objeto.height)&&
            (this.y + this.height > objeto.y)){
            return true       
        }else{
            return false
        }

    }
}
function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar){
        robb.move()
        robb.anim('robb')
        lacaio.move()
        lacaio.anim('lacaio')
        planta.move()
        planta.anim('planta')
        colisao()
    }
    
}
setInterval(main,10)