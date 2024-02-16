const formulario = document.getElementById('formularioFibonacci');
    const numero = document.getElementById('numeroIngresado');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const numero1 = parseInt(numero.value);

      if (isNaN(numero1) || numero1 <= 0) {
          resultado.textContent = "Ingrese un número entero positivo válido.";
          return;
      }

      let fibSeries = [0, 1];
      for (let i = 2; i < numero1; i++) {
          fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
      }

      resultado.textContent = `Serie de Fibonacci para ${numero1} números: ${fibSeries.join(', ')}`;
    });