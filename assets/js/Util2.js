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

    des_obj2(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    des_obj(){
       

        des.lineWidth = "5"  
        des.beginPath();
        des.arc(200, 400, 15, 0, Math.PI*2)
        des.closePath()
        des.fill()


        des.beginPath()
        des.moveTo(200,414)
        des.lineTo(200,462)
        des.closePath()
        des.stroke()

        
        des.beginPath()
        des.moveTo(200,420)
        des.lineTo(250,420)
        des.closePath()
        des.stroke()


        des.beginPath()
        des.moveTo(200,460)
        des.lineTo(170,480)

        des.moveTo(200,460)
        des.lineTo(220,480)

        des.moveTo(170,500)
        des.lineTo(170,478)

        des.moveTo(220,500)
        des.lineTo(220,478)
        des.closePath()
        des.stroke()

        des.beginPath()
        des.moveTo(228,420)
        des.strokeStyle = "#F0FFFF"
        des.lineTo(250,420)
        des.moveTo(230,420)
        des.strokeStyle = "#F0FFFF"
        des.lineTo(230,435)
        des.closePath()
        des.stroke()

        des.beginPath()
        des.strokeStyle = "#000000"
        des.arc(200, 400, 13, 0, Math.PI*2)
        des.closePath()
        des.stroke()

        des.beginPath()
        des.fillStyle = "#000000"
        des.arc(195, 400, 3, 0, Math.PI*2)
        des.closePath()
        des.fill()

        des.beginPath()
        des.fillStyle = "#000000"
        des.arc(205, 400, 3, -10, Math.PI)
        des.closePath()
        des.fill()
        

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
    vida = 3
    municao = 30

    

    move(){
        this.x += this.dir_x
        if(this.x <= -5){
            this.x = -5
        }else if(this.x >= 740){
            this.x = 740
        }
        this.y += this.dir_y
        if(this.y <= 0){
            this.y = 0
        }else if (this.y >= 370){
            this.y = 370
        }
    }
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }     
    }
    point(objeto){
        if(this.y + this.h < objeto.y){
            return true
        }else{
            return false
        }
    }
}

class BG extends Obj {
    move(inicio,fim){
        this.x +=5
        if(this.x > fim){
            this.x = inicio
        }
    }
}

class Lacaio extends Obj {

    move_lacaio(){
        this.x -= 3
        if(this.x <= 0){
            this.x = 770
            this.y = Math.random() * (370 - 0) 
        }
    }
    move_urso(){
        this.x -= 4
        if(this.x <= 0){
            this.x = 770
            this.y = Math.random() * (370 - 0) 
        }
    }
    move_radio(){
        this.x -= 2
        if(this.x <= 0){
            this.x = 770
            this.y = Math.random() * (370 - 0) 
        }
    }
    
    recomeca(){
        this.y = -200
        this.x = Math.random() * (370 - 0) 
    }

    morrer() {
        this.y = -800; // Por exemplo, mova-o para uma posição fora da tela
        this.x = -800;
        console.log("O lacaio morreu!");
        // Outras ações para lidar com a morte do lacaio
    }
}

class Tiro extends Obj{
    des_tiro(){
        des.fillStyle = this.at
        des.fillRect(this.x+202, this.y+11, this.w, this.h)
    }
    move_tiro(){
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
    move_planta(){
        this.x -= 0.5
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
