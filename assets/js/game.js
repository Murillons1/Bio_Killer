const des = document.getElementById('des').getContext('2d')

function pontos(){

}
function tiro(){

}
function colisao(){

}
function desenha(){

}
function atualiza(){

}
function main(){
    des.clearRect(0,0,800,500)
    desenha()
    requestAnimationFrame(main)
}
main()
