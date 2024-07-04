function handleButtonClick(event) {
    let buttonText = $(event.target).text();
    let resultado = $('#resultado');
    resultado.val(resultado.val() + buttonText);
  }

  let buttons = $('.botonmanual');

  buttons.on('click', handleButtonClick);
;

$('#btn-cle').on('click', function() {
    $('#resultado').val('');
});

$('#btn-del').on('click', function() {
    let resultado = $('#resultado');
    resultado.val(resultado.val().slice(0, -1));
  });


 $(document).ready(function() {
    function sumar() {
      let num1 = parseInt($('buttons').val());
      let num2 = parseInt($('buttons').val());
      let resultado = num1 + num2;
      $("#resultado").val(resultado);
    }
  
    function restar() {
      let num1 = parseInt($(".botonmanual").val());
      let num2 = parseInt($(".botonmanual").val());
      let resultado = num1 - num2;
      $("#resultado").val(resultado);
    }
  
    function multiplicar() {
      let num1 = parseInt($(".botonmanual").val());
      let num2 = parseInt($(".botonmanual").val());
      let resultado = num1 * num2;
      $("#resultado").val(resultado);
    }
  
    function dividir() {
      let num1 = parseInt($(".botonmanual").val());
      let num2 = parseInt($(".botonmanual").val());
      let resultado = num1 / num2;
      $("#resultado").val(resultado);
    }

    $(document).ready(function() {
        $('#btn-res').on('click', function() {
          let resultado = $('#resultado');
          try {
            resultado.val(eval(resultado.val()));
          } catch (e) {
            resultado.val('Error');
          }
        });
      });
  });
  