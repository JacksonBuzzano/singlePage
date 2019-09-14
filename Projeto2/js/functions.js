$(function(){
//Slider principal da página
    var indiceAtual = 0;
    var indiceMaximo = $('img').length;
    var daley = 3500;

    initSlider();

    function initSlider(){
        $('img').eq(0).fadeIn();
        setInterval(function(){
            alterarSlider();
        },daley);
    }

    function alterarSlider(){
       $('img').eq(indiceAtual).stop().fadeOut(2000);
       indiceAtual+=1;
       if(indiceAtual == indiceMaximo)
       indiceAtual = 0;
       $('img').eq(indiceAtual).stop().fadeIn(2000);
    }
//Término slider//


//eventos do formulário
$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})

//verificação se havera nome completo
$('form').submit(function(e){
    e.preventDefault();
    var nome = $('input[name=nome]').val();
    var telefone = $('input[name=telefone]').val();
    var email = $('input[name=email]').val();

    if(verificarNome(nome) == false){
        aplicarCampoInvalido($('input[name=nome]'));
    }else if(verificaTelefone(telefone) == false){
        aplicarCampoInvalido($('input[name=telefone]'));
    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
    }else{
        alert('FORMULARIO ENVIADO COM SUCESSO');
    }
//se chegar até o final é pq esta okey
})

 
//função para estilar compo do formulário
function aplicarCampoInvalido(el){
    el.css('color', 'red');
    el.css('border', '2px solid red');
    el.val('Preencher campo corretamente');
}

function resetarCampoInvalido(el){
    el.css('color', '#ccc');
    el.css('border', '1px solid #ccc');
    el.val('');
}

//função para verificar nossos campos
function verificarNome(nome){
    if(nome == ''){
        return false;
    }
    var quantidade = nome.split(' ').length;
    var splitStr = nome.split(' ');
    if(quantidade >= 2){//garantir se vai ter pelo menos 2 nomes
        for(var i = 0; i < quantidade; i++){
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
            }else{
                return false;
                 }
            }
        }else{
            return false;
        } 
}

function verificaTelefone(telefone){
    if(telefone == ''){
        return false;
    }
    if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
        return false;
    }
}

function verificarEmail(email){
    if(email == ''){
        return false;
    }
    if(email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null){
        return false;
    }   
}




});
    
 
