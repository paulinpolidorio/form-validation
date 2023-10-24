
$(function () {

  abrirJanela();
  verificarCliqueFechar();

  
  $('form#form1').submit(function (e){
    e.preventDefault();
    var nome = $('input[name=nome]').val();
    var email = $('input[name=email').val();
    var telefone = $('input[name=telefone').val();
     if(VerificarNome(nome)==false){
       CampoInvalid($('input[name=nome]'));
     }
     if(VerificarTelefone(telefone) == false){
      CampoInvalid($('input[name=telefone]'));
     }if(VerificarEmail(email)==false){
      CampoInvalid($('input[name=email]'));
     }
     else{
       alert("formulario enviado");
     }
  })
  
  //funçoes de verificação
  function abrirJanela() {
    $('.btn').click(function (e) {
      e.stopPropagation();
      $('.bg').fadeIn();
    });
  }

  function verificarCliqueFechar() {
    var el = $('body , .fechar');
    el.click(function () {
      $('.bg').fadeOut();
    })

    $('.form').click(function (e) {
      e.stopPropagation();
    })
  }

  function VerificarNome(nome){
    if(nome===''){
      return false;
    }
    var nometam = nome.split(' ').length;
    var splitStr = nome.split(' ');
    if (nometam >= 2) {
      for (var i = 0; i < nometam; i++) {
           if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
            console.log("passou");
          }else{
            
            return false;
          }
      }  
    }else{
      
      return false;
    }
  }
  function VerificarTelefone(telefone){
    if(telefone==''){
        return false; 
    }if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
        return false;
    }
  }

  function VerificarEmail(email){
    if(email=='')
      return false;
      if(email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null){
        return false;
      }
  }

  function CampoInvalid(el){
    el.css('border','2px solid red');
    el.data('invalido','true');
    el.val('Campo Inválido');
  }
  
  function ResetCampoInvalido(el){
    el.css('border','1px solid #ccc');
    el.css('color','#ccc');
    el.val('');
  }
  
  
  $('input[type=text]').focus(function(){
      ResetCampoInvalido($(this));
  })
  
});

