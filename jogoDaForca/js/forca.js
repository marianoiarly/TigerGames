let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "EDUCACAO",
        categoria:"DICA: PROCESSO DE DESENVOLVIMENTO INTELECTUAL, MORAL E SOCIAL QUE BUSCA A FORMAÇÃO COMPLETA E APRIMORAMENTO DAS HABILIDADES DE UMA PESSOA."
    },
    palavra002 = {
        nome: "EMPATIA",
        categoria:"DICA: CAPACIDADE DE SE COLOCAR NO LUGAR DE OUTRA PESSOA, COMPREENDENDO E COMPARTILHANDO SEUS SENTIMENTOS E PERSPECTIVAS."
    },
    palavra003 = {
        nome: "TOLERANCIA",
        categoria:"DICA: ATITUDE DE RESPEITO E ACEITAÇÃO DAS DIFERENÇAS, MESMO QUANDO EM DESACORDO, DEMONSTRANDO PACIÊNCIA E ABERTURA MENTAL."
    },
    palavra004 = {
        nome: "DIALOGO",
        categoria:"DICA: CONVERSA ENTRE DUAS OU MAIS PESSOAS COM O OBJETIVO DE COMPARTILHAR IDEIAS, OPINIÕES E INFORMAÇÕES, VISANDO O ENTENDIMENTO MÚTUO."
    },
    palavra005 = {
        nome: "RESPEITO",
        categoria:"DICA: RECONHECIMENTO E VALORIZAÇÃO DAS OPINIÕES, DIREITOS E DIGNIDADE DAS PESSOAS, INDEPENDENTEMENTE DE DIFERENÇAS OU CONFLITOS."
    },
    palavra006 = {
        nome: "IGUALDADE",
        categoria:"DICA: PRINCÍPIO QUE DEFENDE A MESMA VALORIZAÇÃO DE DIREITOS, OPORTUNIDADES E TRATAMENTO PARA TODOS, SEM DISCRIMINAÇÃO POR MOTIVOS COMO GÊNERO, RAÇA, RELIGIÃO OU ORIGEM."
    },
    palavra007 = {
        nome: "SENSIBILIZACAO",
        categoria:"DICA: PROCESSO DE AUMENTAR A CONSCIÊNCIA E A SENSIBILIDADE DAS PESSOAS PARA QUESTÕES, PROBLEMAS OU REALIDADES ESPECÍFICAS, VISANDO PROMOVER MUDANÇA DE ATITUDES OU COMPORTAMENTOS."
    },
    palavra008 = {
        nome: "JUSTICA",
        categoria:"DICA: PRINCÍPIO E VALOR QUE ENVOLVEM A EQUIDADE, O TRATAMENTO IMPARCIAL E APLICAÇÃO DE LEIS E NORMAS PARA GARANTIR DIREITOS E PUNIR VIOLAÇÕES DE FORMA JUSTA E EQUITATIVA."
    },
    palavra009 = {
        nome: "ACAO",
        categoria:"DICA: ATIVIDADE OU INICIATIVA REALIZADA COM UM PROPÓSITO ESPECÍFICO,"
    },
    palavra010 = {
        nome: "SOLIDARIEDADE",
        categoria:"DICA: ATITUDE DE APOIO, COLABORAÇÃO E COMPROMETIMENTO COM AQUELES QUE ESTÃO PASSANDO POR DIFICULDADES OU NECESSIDADES,"
    },
    palavra011 = {
        nome: "INCLUSAO",
        categoria:"DICA: PRÁTICA DE GARANTIR A PARTICIPAÇÃO E O ACESSO IGUALITÁRIO DE TODAS AS PESSOAS"
    },
    palavra012 = {
        nome: "DIVERSIDADE",
        categoria:"DICA: VARIEDADE E VARIABILIDADE DE CARACTERÍSTICAS, OPINIÕES, CULTURAS, RAÇAS, GÊNEROS"
    },
    palavra013 = {
        nome: "EQUIDADE",
        categoria:"DICA: CONCEITO DE GARANTIR TRATAMENTO JUSTO E IMPARCIAL, LEVANDO EM CONTA AS NECESSIDADES INDIVIDUAIS E AS DESIGUALDADES EXISTENTES"
    },
    palavra014 = {
        nome: "CIDADANIA",
        categoria:"DICA: CONDIÇÃO E PARTICIPAÇÃO PLENA DE UM INDIVÍDUO NA COMUNIDADE E NA SOCIEDADE,"
    },
    palavra015 = {
        nome: "DIREITOS",
        categoria:"DICA: PRERROGATIVAS OU LIBERDADES QUE SÃO CONCEDIDAS AOS INDIVÍDUOS OU GRUPOS PELA SOCIEDADE OU PELO ESTADO"
    },
    palavra016 = {
        nome: "CONCIENCIA",
        categoria:"DICA: FACULDADE MENTAL QUE PERMITE A PERCEPÇÃO, COMPREENSÃO E REFLEXÃO SOBRE SI MESMO, SUAS AÇÕES E O MUNDO AO SEU REDOR."
    },
    palavra017 = {
        nome: "DENUNCIA",
        categoria:"DICA: ATO DE APONTAR OU COMUNICAR OFICIALMENTE UMA AÇÃO OU SITUAÇÃO ILEGAL"
    },
    palavra018 = {
        nome: "COMPREENSAO",
        categoria:"DICA: A CAPACIDADE DE ENTENDER, PERCEBER OU INTERPRETAR ALGO DE MANEIRA PROFUNDA E ABRANGENTE"
    },
    palavra019 = {
        nome: "ALIANCA",
        categoria:"DICA: UM ACORDO OU ASSOCIAÇÃO ENTRE DUAS OU MAIS PARTES, BASEADO EM OBJETIVOS COMUNS"
    },
    palavra020 = {
        nome: "OPORTUNIDADES",
        categoria:"DICA: CIRCUNSTÂNCIAS, MOMENTOS OU SITUAÇÕES QUE OFERECEM UMA CHANCE FAVORÁVEL PARA ALCANÇAR OBJETIVOS"
    },
    palavra021 = {
        nome: "CAMPANHAS",
        categoria:"DICA: INICIATIVAS ORGANIZADAS E PLANEJADAS PARA PROMOVER UMA CAUSA, IDEIA, PRODUTO OU SERVIÇO"
    },
    palavra022 = {
        nome: "MOBILIZACAO",
        categoria:"DICA: AÇÃO DE UNIR, ORGANIZAR OU INCENTIVAR INDIVÍDUOS OU GRUPOS PARA PARTICIPAR DE UMA CAUSA, MOVIMENTO OU ATIVIDADE COLETIVA"
    },
    palavra023 = {
        nome: "RECONHECIMENTO",
        categoria:"DICA: ATO OU PROCESSO DE IDENTIFICAR, VALORIZAR E VALIDAR CONQUISTAS, QUALIDADES OU REALIZAÇÕES DE PESSOAS OU ENTIDADES, DEMONSTRANDO APRECIAÇÃO E RESPEITO PELO SEU TRABALHO OU CONTRIBUIÇÃO."
    },
    palavra024 = {
        nome: "COMBATE",
        categoria:"DICA: AÇÃO ATIVA E ENÉRGICA CONTRA UM PROBLEMA, DESAFIO OU AMEAÇA,"
    },
    palavra025 = {
        nome: "DIVERSIDADE",
        categoria:"DICA: VARIEDADE E VARIABILIDADE DE CARACTERÍSTICAS, OPINIÕES, CULTURAS, RAÇAS, GÊNEROS E OUTROS ASPECTOS QUE ENRIQUECEM E ENRIQUECEM UM GRUPO OU AMBIENTE."
    },
    palavra027 = {
        nome: "CULTURA",
        categoria:"DICA: CONJUNTO DE COSTUMES, VALORES, TRADIÇÕES, EXPRESSÕES ARTÍSTICAS, CRENÇAS E MANEIRAS DE VIDA QUE CARACTERIZAM UM GRUPO DE PESSOAS OU UMA SOCIEDADE."
    },
    palavra028 = {
        nome: "MUDANCA",
        categoria:"DICA: ALTERAÇÃO OU TRANSIÇÃO DE UMA CONDIÇÃO, SITUAÇÃO OU ESTADO PARA OUTRO, ENVOLVENDO UMA TRANSFORMAÇÃO EM TERMOS DE COMPORTAMENTO"
    },
    palavra029 = {
        nome: "HARMONIA",
        categoria:"DICA: UM ESTADO DE CONCÓRDIA, EQUILÍBRIO E COEXISTÊNCIA PACÍFICA ENTRE DIFERENTES ELEMENTOS, PESSOAS OU PARTES"
    },
    palavra030 = {
        nome: "COLABORACAO",
        categoria:"DICA: AÇÃO DE TRABALHAR EM CONJUNTO COM OUTRAS PESSOAS OU ENTIDADES, COMPARTILHANDO IDEIAS, RECURSOS E ESFORÇOS PARA ALCANÇAR UM OBJETIVO COMUM."
    },
    
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}
montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        // verificar se ainda tem tentativas // mensagem
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
    var frase = "Você Venceu!";
      $('#frase').text(frase);
      $('#exampleModal').modal('show');
        tentativas = 0;
    }

}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
          var frase = "Você Perdeu!";
          $('#frase').text(frase);
          $('#exampleModal').modal('show');
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}
const btn =document.querySelector("#refresh")
btn.addEventListener("click",()=>{
location.reload()
})





