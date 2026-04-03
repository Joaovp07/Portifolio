/* ============================================
   SCRIPT.JS - JavaScript (comportamento e interatividade)
   
   HTML = estrutura/esqueleto da página
   CSS = aparência/estilo (como as coisas parecem)
   JavaScript = comportamento (o que acontece quando usuário interage)
   
   Este arquivo JavaScript roda DEPOIS que a página terminou de carregar.
   ============================================ */

/* DOMContentLoaded: evento que dispara quando o HTML termina de carregar */
/* Isso garante que todos os elementos HTML estejam prontos antes de rodar o JS */
/* document: representa a página inteira */
/* addEventListener: adiciona um \"ouvinte\" que espera por um evento */
/* function() { ... }: \"função\" = bloco de código que roda quando o evento acontece */
document.addEventListener('DOMContentLoaded', function () {

    /* ===== EFEITO DE SCROLL SUAVE ===== */
    /* Quando você clica em \"Projetos\" no menu, em vez de pular para lá,
       a página desliza suavemente até chegar naquela seção. */
    
    /* const: palavra-chave que cria uma variável (caixa que armazena um valor) */
    /* linksMenu: nome da nossa variável (vai guardar todos os links) */
    /* document.querySelectorAll(): função que seleciona TODOS os elementos que combinam com o seletor */
    /* 'a[href^=\"#\"]': seletor que significa:
       - 'a' = todos os elementos <a> (links)
       - '[href^=\"#\"]' = cujo atributo href COMEÇA COM # (^= significa \"começa com\")
       = resultado: todos os links âncora que levam para outras partes da página (#projetos, #habilidades, etc.) */
    const linksMenu = document.querySelectorAll('a[href^=\"#\"]');

    /* forEach: método que executa uma função para CADA item de uma lista */
    /* (link) = cada link da lista linksMenu */
    linksMenu.forEach(function (link) {
        /* addEventListener: adiciona um \"ouvinte\" de evento a este link */
        /* 'click': tipo de evento (quando o usuário clica) */
        /* function(e): função que roda quando o evento acontece */
        /* e: objeto que contém informações sobre o evento */
        link.addEventListener('click', function (e) {
            /* getAttribute: pega um atributo HTML do elemento */
            /* 'href': atributo que queremos (ex: \"#projetos\", \"#habilidades\") */
            /* this: se refere ao link que foi clicado */
            const destino = this.getAttribute('href');

            /* if (condição): se a condição for VERDADEIRA, executa o código dentro */
            /* Se o destino for só \"#\" (sem especificar uma seção), devemos ignorar */
            /* return: sai da função (para de executar) */
            if (destino === '#') return;

            /* querySelector: seleciona UM elemento que combina com o seletor */
            /* destino contém algo como \"#projetos\", \"#habilidades\", etc. */
            /* O querySelector vai encontrar o elemento com esse ID */
            const elemento = document.querySelector(destino);

            /* if (elemento): verifica se encontrou o elemento */
            /* Se não encontrou, elemento será null/undefined e esta linha não executa */
            if (elemento) {
                /* preventDefault: cancela o comportamento padrão (pulo instantâneo) */
                /* e: é o objeto do evento que recebemos como parâmetro lá em cima */
                e.preventDefault();
                /* scrollIntoView: faz o elemento aparecer na tela */
                elemento.scrollIntoView({
                    /* behavior: 'smooth' = desliza suavemente (em vez de pular instantâneo) */
                    behavior: 'smooth',
                    /* block: 'start' = coloca o elemento no TOPO da tela visível */
                    block: 'start'
                });
            }
        });
    });

    /* ===== ANIMAÇÃO DOS CARDS ===== */
    /* Quando você rola a página e os cards aparecem na tela visível,
       eles surgem com uma animação suave de baixo para cima. */
    
    /* IntersectionObserver: é uma \"ferramenta\" que observa elementos */
    /* Ele detecta QUANDO um elemento entra ou sai da área visível da tela */
    /* new: cria uma nova instância (cópia) do IntersectionObserver */
    /* function(entradas): função que roda quando algo muda (elemento entra/sai da tela) */
    const observador = new IntersectionObserver(function (entradas) {
        /* entradas: array (lista) com todas as mudanças detectadas neste momento */
        /* forEach: para cada mudança, execute este código */
        entradas.forEach(function (entrada) {
            /* entrada.isIntersecting: propriedade que diz se o elemento está visível (true) ou não (false) */
            if (entrada.isIntersecting) {
                /* classList.add: adiciona uma classe CSS ao elemento */
                /* 'visivel': classe definida no CSS (style.css) que torna o card visível e animado */
                entrada.target.classList.add('visivel');
            }
        });
    /* }, { threshold: 0.1 }): configurações do observador */
    /* threshold: 0.1 = \"aciona\" quando 10% do elemento está visível (0.1 = 10%, 1 = 100%) */
    }, { threshold: 0.1 });

    /* Pega TODOS os cards da página */
    /* '.card': seletor que seleciona todos os elementos com class=\"card\" */
    const cards = document.querySelectorAll('.card');
    
    /* forEach: para cada card, execute este código */
    cards.forEach(function (card) {
        /* classList.add: adiciona uma classe CSS ao card */
        /* 'escondido': classe definida no CSS que torna o card invisível no começo */
        card.classList.add('escondido');
        /* observador.observe: começa a observar este card */
        /* Quando ele aparecer na tela, o observador detecta e ativa a animação */
        observador.observe(card);
    });

});
