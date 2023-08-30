    const des = document.getElementById('des').getContext('2d')

    // CÉU
    const bg1 = new BG(0,0,800,500,'./assets/img/background/nature_1/1.png')
    const bg2 = new BG(0,0,800,500,'./assets/img/background/nature_1/2.png')
    const bg3 = new BG(0,0,800,500,'./assets/img/background/nature_1/3.png')
    const bg4 = new BG(0,0,800,500,'./assets/img/background/nature_1/4.png')
    const bg6 = new BG(0,0,800,500,'./assets/img/background/sky_3/4.png')
    const earth = new BG(0,0,800,500,'./assets/img/background/sky_3/7.png')
    let robb = new Robb(0,370,110,128,'./assets/img/player/lacaio/robb.png')
    let lacaio = new Lacaio(0,0,80,100,'./assets/img/player/lacaio/lacaio.png')
    let urso = new Lacaio(0,0,100,100,'./assets/img/player/lacaio/urso.png')
    let radioativo = new Lacaio(0,0,60,60,'./assets/img/player/lacaio/radiation.png')
    let planta = new Planta(0,0,80,80,'./assets/img/player/lacaio/cogumelo.png')
    
    let txt_pts = new Texto()
    let txt_vidas = new Texto()
    let txt_municao = new Texto()
    let pts = new Texto()
    let vida = new Texto()
    let municao = new Texto()
    let texto_game_over = new Texto()
    
    let jogar = true
    let dar_tiro = true

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
            let tiro = new Tiro(robb.x - 4 + robb.w / 2, robb.y + 37, 8, 4, 'yellow')
            grupoTiros.push(tiro)
            robb.municao -= 1
        }
    })

    function pontos(){
        
    }
    
    function colisao(){
        if(robb.colid(lacaio)){
            lacaio.recomeca()
            robb.vida -=1
        }
        if(robb.colid(urso)){
            urso.recomeca()
            robb.vida -=1
        }
        if(robb.colid(radioativo)){
            radioativo.recomeca()
            robb.vida -=1
        }
        if(robb.colid(planta)){
            planta.recomeca()
            robb.vida +=1
        }
    }

    function tiro(){
        
    }

    function game_over(){
        if(robb.vida <= 0){
            jogar = false
        }
    }

    function verificarColisaoTiroLacaio(tiro, lacaio) {
        return (
            tiro.x < lacaio.x + lacaio.w &&
            tiro.x + tiro.w > lacaio.x &&
            tiro.y < lacaio.y + lacaio.h &&
            tiro.y + tiro.h > lacaio.y
        );
    }
    function verificarColisaoTiroUrso(tiro, urso) {
        return (
            tiro.x < urso.x + urso.w &&
            tiro.x + tiro.w > urso.x &&
            tiro.y < urso.y + urso.h &&
            tiro.y + tiro.h > urso.y
        );
    }
    function verificarColisaoTiroRadioativo(tiro, radioativo) {
        return (
            tiro.x < radioativo.x + radioativo.w &&
            tiro.x + tiro.w > radioativo.x &&
            tiro.y < radioativo.y + radioativo.h &&
            tiro.y + tiro.h > radioativo.y
        );
    }

    function desenha(){
       if(jogar === true){
            bg1.des_obj()
            bg2.des_obj()
            bg3.des_obj()
            bg4.des_obj()
            bg6.des_obj()
            earth.des_obj()

            robb.des_obj()
            lacaio.des_obj()
            urso.des_obj()
            radioativo.des_obj()
            planta.des_obj()

            grupoTiros.forEach((tiro)=>{
                tiro.des_tiro()
            })

            txt_pts.des_text('Pontos : ',20,40,'white','30px Times')
            pts.des_text(robb.pts,120,40,'white','30px Times')
            txt_vidas.des_text('Vidas : ',300,40,'white','30px Times')
            vida.des_text(robb.vida,390,40,'white','30px Times')
            txt_municao.des_text('Munição:',600,40,'white','30px Times')
            municao.des_text(robb.municao,720,40,'white','30px Times')    
       }else if (jogar === false){
            texto_game_over.des_text('Game Over',140,260, 'white','100px Times')
            
    }
    }
    
    function atualiza(){
        robb.move()
        lacaio.move_lacaio()
        radioativo.move_radio()
        urso.move_urso()
        planta.move_planta()
        robb.anim('robb')
        earth.move(-500,800)
        game_over()

        if(robb.municao > 0){
            dar_tiro = true
        }else{
            robb.municao = 0
            dar_tiro = false
        }
        grupoTiros.forEach((tiro) => {
            tiro.move_tiro()
            if(tiro.y <= -50 || !dar_tiro){
                grupoTiros.splice(tiro[0],1)
            }
            // Verificar colisão com o lacaio
            if (dar_tiro && verificarColisaoTiroLacaio(tiro, lacaio)) {
                lacaio.morrer();  // Chamando a função "morrer" do lacaio
                grupoTiros.splice(grupoTiros.indexOf(tiro), 1); // Removendo o tiro
                robb.pts += 1
            }
            // Verificar colisão com o urso
            if (dar_tiro && verificarColisaoTiroLacaio(tiro, urso)) {
                urso.morrer();  // Chamando a função "morrer" do lacaio
                grupoTiros.splice(grupoTiros.indexOf(tiro), 1); // Removendo o tiro
                robb.pts += 1
            }
            // Verificar colisão com o radioativo
            if (dar_tiro && verificarColisaoTiroLacaio(tiro, radioativo)) {
                radioativo.morrer();  // Chamando a função "morrer" do lacaio
                grupoTiros.splice(grupoTiros.indexOf(tiro), 1); // Removendo o tiro
                robb.pts += 1
            }
            if (tiro.y <= -50) {
                grupoTiros.splice(grupoTiros.indexOf(tiro), 1);
            }
        });
        colisao()
        game_over()
       }

    function main(){
        des.clearRect(0,0,des.width,des.height)
        desenha()
        atualiza()
        requestAnimationFrame(main)
    }
    main()


    