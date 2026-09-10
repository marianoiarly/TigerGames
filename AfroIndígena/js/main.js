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
      frase = "As crianças indígenas, por exemplo, aprendem muita coisa com seus pais e parentes mais próximos, como os irmãos e os avós. Os conhecimentos podem ser transmitidos durante as atividades do dia a dia ou em momentos especiais, durante os rituais e as festas.";
      break;
    }
    case "imgs/hutao.png": {
      frase = "Um dos líderes indígenas mais conhecidos do Brasil, o cacique é respeitado por defender a Amazônia e os povos indígenas da floresta. Em 2020, foi indicado ao Prêmio Nobel da Paz.";
      break;
    }
    case "imgs/kazuha.png": {
      frase = "Os Ticuna configuram o mais numeroso povo indígena na Amazônia brasileira. Com uma história marcada pela entrada violenta de seringueiros, pescadores e madeireiros na região do rio Solimões, foi somente nos anos 1990 que os Ticuna lograram o reconhecimento oficial da maioria de suas terras.    ";
      break;
    }
    case "imgs/klee.png": {
      frase = "A tribo Xavante é um grupo indígena do Mato Grosso, Brasil, com uma história de ligação com a natureza e tradições culturais. Colonização trouxe conflitos e assimilação. Na década de 1960, reassentaram-se em reservas, mas lutaram por terras e direitos. Cultura rica com cerimônias e arte. Continuam a lutar pela proteção de suas terras e cultura, enfrentando desafios modernos. A história Xavante destaca as lutas enfrentadas pelas comunidades indígenas no Brasil.";
      break;
    }
    case "imgs/kokomi.png": {
      frase = "Comunidades quilombolas são descendentes de africanos escravizados que escaparam da opressão e criaram assentamentos autônomos no Brasil. O Quilombo dos Palmares, que foi liderado por Zumbi dos Palmares, é um exemplo notável. Essas comunidades mantiveram tradições africanas, enfrentaram desafios após a abolição da escravatura e buscaram reconhecimento. A Constituição de 1988 reconheceu seus direitos, porém obstáculos persistem.";
      break;
    }
    case "imgs/ningguang.png": {
      frase = "A base da alimentação dos índios brasileiros são as frutas, raízes, ervas e peixes. Podemos dizer que a alimentação indígena é natural, pois eles consomem alimentos retirados diretamente da natureza.";
      break;
    }
    case "imgs/shogun.png": {
      frase = "Os Guarani são um grupo indígena que historicamente ocupava vastas áreas da América do Sul. Com a chegada dos europeus, enfrentaram doenças, perda de terras e conflitos. As missões jesuíticas foram um marco, trazendo proteção, mas também desafios de assimilação. Apesar das dificuldades, os Guarani mantiveram aspectos culturais. Hoje, continuam lutando por direitos e territórios ancestrais, adaptando-se às mudanças e preservando sua identidade diversificada.";
      break;
    }
    case "imgs/venti.png": {
      frase = "Os Tupinambás foram os primeiros indígenas que Pedro Alvares Cabral encontrou quando chegou ao Brasil em 1500. No início do período colonial, os Tupinambás ocupavam o Sudeste do Brasil numa faixa costeira que ia do rio Juqueriquerê, em São Paulo até ao Cabo de São Tomé, no Rio de Janeiro. ";
      break;
    }
    case "imgs/xiao.png": {
      frase = "Os Yanomami são uma tribo indígena da Amazônia que luta para proteger suas terras e cultura. Sua história inclui conexão com a floresta, ameaças de garimpeiros e doenças, além de práticas espirituais. Enfrentam desafios atuais de desmatamento e mineração ilegal, com apoio para seus direitos e preservação. Isso destaca a importância da proteção indígena e ambiental.";
      break;
    }
    case "imgs/zhongli.png": {
      frase = "Os Potiguara vivem no litoral paraibano e são o povo indígena mais numeroso da região Nordeste. Originalmente falantes de tupi, ocupavam um vasto território costeiro de Pernambuco ao Ceará. Orgulham-se da documentação sobre a presença do povo na região da Baía da Traição ser ininterrupta desde 1501. ";
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
