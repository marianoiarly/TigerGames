const imgs = ['imgs/kazuha.png', 'imgs/ayaka.png', 'imgs/hutao.png', 'imgs/zhongli.png', 'imgs/kokomi.png', 'imgs/klee.png', 'imgs/xiao.png', 'imgs/shogun.png', 'imgs/ningguang.png', 'imgs/venti.png', 'imgs/kazuha.png', 'imgs/ayaka.png', 'imgs/hutao.png', 'imgs/zhongli.png', 'imgs/kokomi.png', 'imgs/klee.png', 'imgs/xiao.png', 'imgs/shogun.png', 'imgs/ningguang.png', 'imgs/venti.png'];
const frente = document.querySelectorAll(".frente");
const cartas = document.querySelectorAll(".carta");
let reinicie = document.querySelector("#reinicia");
let primeiraCarta = "";
let segundaCarta = "";
let pontuacao = 0;
let numJogadas = 0;
let podeJogar = true;
let bloquearContainer = false;
let block = false;
const som = document.getElementById("som");
const audio = document.getElementById("audio");

embaralhar(imgs);

for(let i = 0; i<frente.length; i++){
	frente[i].src = imgs[i];
	cartas[i].addEventListener('click', girarCarta);
}

function tocar() {
  if(som.className == "desligado"){
    som.className = 'ligado'
    audio.play();
  }else{
    som.className = 'desligado'
    audio.pause();
  }
}

function girarCarta(){
 
  if(podeJogar){
    if(bloquearContainer)return;
    if(this === primeiraCarta)return;
    
    this.classList.add('girar');
    
    if(!block){
      primeiraCarta = this;
      block = true;
      
      return;
  
    }
    block = false;
      segundaCarta = this;
      podeJogar = false;
      verificarCarta();
      
      numJogadas += 1;
      document.getElementById("jogadas").innerHTML = "Jogadas: " + numJogadas;
      
    }
  }

reinicie.addEventListener('click',reiniciar);

function reiniciar(){
  
  location.reload(true);
  
}

function verificarCarta(){
 combina = primeiraCarta.children[0].src === segundaCarta.children[0].src;

    combina ? habilitarCarta() : desabilitarCarta();
    
    podeJogar = true;

}

function habilitarCarta(){
  var carta = primeiraCarta.children[0].getAttribute('src');
  var frase = "";
  primeiraCarta.removeEventListener('click', girarCarta);
  segundaCarta.removeEventListener('click', girarCarta);
  
  pontuacao = pontuacao+100;

  switch(carta){
    case "imgs/ayaka.png": {
      frase = "Sadio Mané é um futebolista senegalês que atua como ponta-esquerda. Atualmente, joga pelo Al-Nassr.";
      break;
    }
    case "imgs/hutao.png": {
      frase = "George Tawlon Manneh Oppong Ousman Weah é um ex-futebolista liberiano e atual presidente da Libéria. Como futebolista, passou pelo auge de sua carreira atuando pelo AC Milan, entre 1995 e 2000.";
      break;
    }
    case "imgs/kazuha.png": {
      frase = "Vinícius José Paixão de Oliveira Júnior é um futebolista brasileiro que atua como atacante. Atualmente joga pelo Real Madrid e pela Seleção Brasileira. Em junho de 2017, Vinícius apareceu na 39ª posição de uma lista do jornal inglês The Telegraph com os melhores jogadores Sub-21 do mundo.";
      break;
    }
    case "imgs/klee.png": {
      frase = "Mohamed Salah Hamed Mahrous Ghaly é um futebolista egípcio que atua como ponta-direita. Atualmente defende o Liverpool e a Seleção Egípcia de Futebol.";
      break;
    }
    case "imgs/kokomi.png": {
      frase = " Paul Labile Pogba é um futebolista francês que atua como meio-campista. Atualmente, está na Juventus. Tem como características principais o drible, a excelente visão de jogo, os bons passes e os chutes de fora da área. Pode fazer várias funções no meio-campo: atua como primeiro volante, Playmaker e até meia-atacante.";
      break;
    }
    case "imgs/ningguang.png": {
      frase = "N'Golo Kanté é um futebolista francês de ascendência malesa que atua como volante. Atualmente joga pelo Al-Ittihad.";
      break;
    }
    case "imgs/shogun.png": {
      frase = "Samuel Eto'o Fils é um ex-futebolista camaronês que atuava como atacante. Marcou geração jogou pelo Barcelona, Real Madrid e entre outros grandes clubes.";
      break;
    }
    case "imgs/venti.png": {
      frase = " Didier Yves Drogba Tébily, mais conhecido como Didier Drogba, é um ex-futebolista marfinense que atuava como centroavante. Drogba atualmente é o embaixador da saúde e esporte na OMS. Ídolo do Chelsea, ganhou importantes títulos pela equipe como a Liga dos Campeões da UEFA. Em 2012, deixou o clube para atuar na China. ";
      break;
    }
    case "imgs/xiao.png": {
      frase = " Mario Barwuah Balotelli é um futebolista italiano de origem ganesa que atua como centroavante. Atualmente joga no Sion, da Suíça. ";
      break;
    }
    case "imgs/zhongli.png": {
      frase = "Pierre-Emerick Emiliano François Aubameyang é um futebolista gabonês que atua como atacante. Atualmente joga no Olympique de Marseille e na Seleção Gabonense.";
      break;
    }
  }
  document.getElementById("pontuacao").innerHTML = ("Pontuação: " + pontuacao);
  $('#frase').text(frase);
  $('#exampleModal').modal('show');
}

function desabilitarCarta(){
  
  bloquearContainer = true;
  
  setTimeout(()=>{
      
      primeiraCarta.classList.remove('girar');
      segundaCarta.classList.remove('girar');
      resetarContainer();
    }, 1000);
    
    if(pontuacao>0){
      pontuacao = pontuacao - 25;
			document.getElementById("pontuacao").innerHTML = ("Pontuação: " + pontuacao);
    }
    
}

function embaralhar(array) {
  
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
     array[randomIndex], array[currentIndex]];
  }
  return array;
  
}

function resetarContainer() {
  
  [block, bloquearContainer] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
  
}
