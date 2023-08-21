const des = document.getElementById('des').getContext('2d')
let bg = new Bg(0,0,500,700,)
let bg2 = new Bg(0,-700,500,700,)
let planta = new Planta(0,0,50,50,)
let lacaio = new Lacaio(200,500,100,100)
let robb = new Robb(200,500,100,100)
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        robb.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        robb.dir = 5
    }else if(event.key === 's'){
        console.log('pressionado a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('pressionado a tecla "w" ')
    }

})
document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
        // console.log('soltou a tecla "a" ')
        robb.dir = 0
    }else if(event.key === 'ArrowRigth'){
        // console.log('soltou a tecla "d" ')
        robb.dir = 0
    }else if(event.key === 'ArrowDown'){
        console.log('soltou a tecla "ArrowDown" ')
    }else if(event.key === 'ArrowUp'){
        console.log('soltou a tecla "ArrowUp" ')
    }
})

document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        robb.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        robb.dir = 0
    }else if(event.key === 's'){
        console.log('soltou a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('soltou a tecla "w" ')
    }
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'ArrowLeft'){
        // console.log('soltou a tecla "a" ')
        robb.dir = 0
    }else if(event.key === 'ArrowRigth'){
        // console.log('soltou a tecla "d" ')
        robb.dir = 0
    }else if(event.key === 'ArrowDown'){
        console.log('soltou a tecla "ArrowDown" ')
    }else if(event.key === 'ArrowUp'){
        console.log('soltou a tecla "ArrowUp" ')
    }
})
function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar){        
        robb.desenha_obj()
        lacaio.desenha_obj()
        planta.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(robb.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(robb.vidas,120,40, 'white','30px Times')
    }
}
// colisao
function colisao(){
    if(robb.colid(lacaio)){
        lacaio.recomeca()
        robb.vidas -=1
    }
    if(robb.colid(flor)){
        planta.recomeca()
        robb.pts +=1
    }
}

function pontos(){
    if(robb.point(lacaio)){
        robb.pts +=1
    }else if(robb.point(lacaio)){
        robb.pts +=1
    }else if(robb.point(lacaio)){
        robb.pts +=1
    }
}
function tiro(){

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
        pontos()
    }
    
}

function main(){
    des.clearRect(0,0,800,500)
    desenha()
    requestAnimationFrame(main)
}
main()
