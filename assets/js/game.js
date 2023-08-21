const des = document.getElementById('des').getContext('2d')

let bg = new BG(0,0,500,700,'./assets/img/background/winter_3/11.png')
let planta = new Planta(0,0,50,50,)
let lacaio = new Lacaio(200,500,100,100)
let robb = new Robb(200,500,100,100)


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
    bg1.desenha_obj()
    if(jogar){        
        robb.desenha_obj()
        lacaio.desenha_obj()
        planta.desenha_obj()
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

}
function tiro(){

}


function atualiza(){
    bg.mov(-500,800)
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

function main(){
    des.clearRect(0,0,800,500)
    desenha()
    requestAnimationFrame(main)
}
main()
