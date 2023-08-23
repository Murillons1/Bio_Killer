    const des = document.getElementById('des').getContext('2d')

    // CÉU
    const bg1 = new BG(0,0,800,500,'./assets/img/background/nature_1/1.png')
    const bg2 = new BG(0,0,800,500,'./assets/img/background/nature_1/2.png')
    const bg3 = new BG(0,0,800,500,'./assets/img/background/nature_1/3.png')
    const bg4 = new BG(0,0,800,500,'./assets/img/background/nature_1/4.png')
    const bg5 = new BG(0,0,800,500,'./assets/img/background/sky_3/7.png')
    const bg6 = new BG(0,0,800,500,'./assets/img/background/sky_3/4.png')
    let robb = new Robb(0,390,64,110,'./assets/img/player/Raider_1/robb1.png')
    let lacaio = new Lacaio(0,0,80,100,'./assets/img/player/lacaio/lacaio.png')
    let planta = new Planta(0,0,80,80,'./assets/img/player/lacaio/cogumelo.png')
    let txt_pts = new Texto()
    let pts = new Texto()
    let txt_vidas = new Texto()
    let n_vidas = new Texto()
    let txt_municao = new Texto()
    let municao = new Texto()
    let jogar = true

    const grupoTiros = []

    let isJumping = false;

    // MOVIMENTO

    document.addEventListener('keydown', (ev)=>{
        if(ev.key === 'a'){
            robb.dir_x -= 5;
        }
        if(ev.key === 'd'){
            robb.dir_x += 5;
        }
        if(ev.key === 's'){
            robb.dir_y += 5;
        }
        if(ev.key === 'w' && !isJumping){  // Verifique se não está pulando para evitar saltos consecutivos
            isJumping = true;  // Define o estado de pulo para verdadeiro
            robb.dir_y -= 10;  // Altere o valor para ajustar a altura do pulo
        }
    });
    
    document.addEventListener('keyup', (ev)=>{
        if(ev.key === 'a'){
            robb.dir_x = 0;
        }
        if(ev.key === 'd'){
            robb.dir_x = 0;
        }
        if(ev.key === 's'){
            robb.dir_x = 0;
        }
        if(ev.key === 'w'){
            robb.dir_y = 0;
            isJumping = false;  // Reinicie o estado de pulo quando a tecla é liberada
        }
    });
    document.addEventListener('keypress', (ev)=>{
        if (ev.key === 'l') {
            let tiro = new Tiro(robb.x - 4 + robb.w / 2, robb.y, 8, 16, 'yellow')
            grupoTiros.push(tiro)
        }
        som1.play()
    })

    function pontos(){
        if(robb.point(disco1)){
            robb.pts +=1
        }else if(robb.point(disco2)){
            robb.pts +=1
        }else if(robb.point(disco3)){
            robb.pts +=1
        }
    }

    function tiros_robb() {
        for (let i = 0; i < grupoTiros.length; i++) {
            for (let j = 0; j < discos.length; j++) {
                if (grupoTiros[i].colid(discos[j])) {
                    // Se houver colisão, remove o tiro e o disco do jogo
                    grupoTiros.splice(i, 1)
                    discos.splice(j, 1)
    
                    // Incrementa os pontos do jogador
                    robb.pts += 1
                }
            }
        }
    }

    function desenha(){
        bg1.des_obj()
        bg2.des_obj()
        bg3.des_obj()
        bg4.des_obj()
        bg5.des_obj()
        bg6.des_obj()
        robb.des_obj()
        lacaio.des_obj()
        planta.des_obj()
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })
    }

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
        robb.move()
        lacaio.move()
        planta.move()
        robb.anim('robb')
        bg1.mov(-500,800)
        bg5.mov1(-1000,800)
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -50){
                grupoTiros.splice(tiro[0],1)
            }
        })
    }

    function main(){
        des.clearRect(0,0,des.width,des.height)
        desenha()
        atualiza()
        requestAnimationFrame(main)
    }
    main()
