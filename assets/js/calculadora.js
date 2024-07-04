//Este es el click//

function handleButtonClick(event) {
    let buttonText = $(event.target).text();
    let resultado = $('#resultado');
    resultado.val(resultado.val() + buttonText);
  }

  let buttons = $('.botonmanual');

  buttons.on('click', handleButtonClick);
;
// Este es la función del botón C (limpiar)//
$('#btn-cle').on('click', function() {
    $('#resultado').val('');
});

// Esta es la función del botón borrar un dígito//
$('#btn-del').on('click', function() {
    let resultado = $('#resultado');
    resultado.val(resultado.val().slice(0, -1));
  });

// Funciones de sumar, restar, multiplicar y dividir//
 $(document).ready(function() {
    function sumar() {
      let num1 = parseInt($('#num1').val());
      let num2 = parseInt($('#num2').val());
      let resultado = num1 + num2;
      $("#resultado").val(resultado);
    }
  
    function restar() {
      let num1 = parseInt($("#num1").val());
      let num2 = parseInt($("#num2").val());
      let resultado = num1 - num2;
      $("#resultado").val(resultado);
    }
  
    function multiplicar() {
      let num1 = parseInt($("#num1").val());
      let num2 = parseInt($("#num2").val());
      let resultado = num1 * num2;
      $("#resultado").val(resultado);
    }
  
    function dividir() {
      let num1 = parseInt($("#num1").val());
      let num2 = parseInt($("#num2").val());
      let resultado = num1 / num2;
      $("#resultado").val(resultado);
    }

    //Función para entregar el resultado//
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
  