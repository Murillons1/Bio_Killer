class Obj {
    constructor(x,y,w,h,at){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.at = at
    }
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}

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

class BG extends Obj {
    
}

class Player extends Obj {

}

class Tiro extends Obj {

}
