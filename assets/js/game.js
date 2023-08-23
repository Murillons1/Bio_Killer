    const des = document.getElementById('des').getContext('2d')

    // CÉU
    const bg1 = new BG(0,0,800,500,'./assets/img/background/nature_1/1.png')
    const bg2 = new BG(0,0,800,500,'./assets/img/background/nature_1/2.png')
    const bg3 = new BG(0,0,800,500,'./assets/img/background/nature_1/3.png')
    const bg4 = new BG(0,0,800,500,'./assets/img/background/nature_1/4.png')
    const star = new Lacaio(0,0,64,54,'./assets/img/player/lacaio/star.png')
    const bg6 = new BG(0,0,800,500,'./assets/img/background/sky_3/4.png')
    let robb = new Robb(0,370,110,128,'./assets/img/player/lacaio/robb.png')
    let lacaio = new Lacaio(0,0,80,100,'./assets/img/player/lacaio/lacaio.png')
    let urso = new Lacaio(0,0,100,100,'./assets/img/player/lacaio/urso.png')
    let radioativo = new Lacaio(0,0,60,60,'./assets/img/player/lacaio/radiation.png')
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
        star.des_obj()
        bg6.des_obj()
        robb.des_obj()
        lacaio.des_obj()
        urso.des_obj()
        radioativo.des_obj()
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
        lacaio.move_lacaio()
        radioativo.move_radio()
        urso.move_urso()
        planta.move_planta()
        robb.anim('robb')
        star.move_star()
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -50){
                grupoTiros.splice(tiro[0],1)
            }
        })
        txt_pts.des_text('Pontos : ',20,40,'white','30px Times')
        pts.des_text(robb.pts,120,40,'white','30px Times')
        txt_vidas.des_text('Vidas : ',300,40,'white','30px Times')
        n_vidas.des_text(robb.vida,390,40,'white','30px Times')
        txt_municao.des_text('Munição:',600,40,'white','30px Times')
        municao.des_text(robb.municao,720,40,'white','30px Times')
    }

    function main(){
        des.clearRect(0,0,des.width,des.height)
        desenha()
        atualiza()
        requestAnimationFrame(main)
    }
    main()
