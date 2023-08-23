class Obj {
    frame = 1
    tempo = 0

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
    anim(nome){
        this.tempo +=1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame +=1
        }
        if(this.frame>4){
            this.frame=1
        }
        this.img = "assets/img/player/Raider_1/"+nome+this.frame+".png"
    }
}

class Robb extends Obj{
    dir_x = 0
    dir_y = 0
    pts = 0
    vidas = 3

    move(){
        // EIXO X
        this.x += this.dir_x
        console.log(this.x)
        if(this.x <= -5){
            this.x = -5
        }else if(this.x >= 740){
            this.x = 740
        }
        // EIXO Y
        this.y += this.dir_y
        console.log(this.y)
        if(this.y <= 0){
            this.y = 0
        }else if (this.y >= 390){
            this.y = 390
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
    mov(inicio,fim){
        this.x +=1
        if(this.x > fim){
            this.x = inicio
        }
    }

    mov1(inicio,fim){
        this.x += 4
        if(this.x > fim){
            this.x = inicio
        }
    }
}

class Lacaio extends Obj {

    move(){
        this.x -= 3
        if(this.x <= 0){
            this.x = 770
            this.y = Math.random() * (400 - 0) 
        }
    }
    
    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}

class Tiro extends Obj{
    des_tiro(){
        des.fillStyle = this.at
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    mov(){
        this.x += 10
    }
    // acrescentado, verificar
    colid(objeto) {
        // Verifica colisão entre duas caixas delimitadoras retangulares
        return (
            this.x < objeto.x + objeto.w &&
            this.x + this.w > objeto.x &&
            this.y < objeto.y + objeto.h &&
            this.y + this.h > objeto.y
        )
    }
}

class Texto{
    des_text(texto,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(texto,x,y)
    }
}

class Planta extends Obj {
    move(){
        this.x -= 1
        if(this.x <= 0){
            this.x = 770
            this.y = Math.random() * (400 - 0) 
        }
    }
    
    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}