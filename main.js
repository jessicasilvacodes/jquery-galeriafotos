$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoImgNova = $('#endereco-img-nova').val();
        
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoImgNova}" />`).appendTo(novoItem);

        $(`<div class="overlay-img-link" <a href="${enderecoImgNova}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real </a> </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn();

        $('#endereco-img-nova').val('');
    })

 
})

