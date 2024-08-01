document.getElementById('formularioIngresos').addEventListener('submit', function(e) {
    e.preventDefault();

    const ingresoBruto = parseFloat(document.getElementById('ingresoBruto').value);

    if (isNaN(ingresoBruto)) {
        alert("Por favor, ingresa valores válidos");
        return;
    }

    const tablaISR = [
        { limiteInferior: 0.01, limiteSuperior: 644.58, cuotaFija: 0.00, porcentaje: 0.0192 },
        { limiteInferior: 644.59, limiteSuperior: 5470.92, cuotaFija: 12.38, porcentaje: 0.064 },
        { limiteInferior: 5470.93, limiteSuperior: 9614.66, cuotaFija: 321.26, porcentaje: 0.1088 },
        { limiteInferior: 9614.67, limiteSuperior: 11009.40, cuotaFija: 772.10, porcentaje: 0.16 },
        { limiteInferior: 11009.41, limiteSuperior: 32736.83, cuotaFija: 1022.01, porcentaje: 0.1792 },
        { limiteInferior: 32736.84, limiteSuperior: 62500.00, cuotaFija: 6054.79, porcentaje: 0.2136 },
        { limiteInferior: 62500.01, limiteSuperior: 83333.33, cuotaFija: 14469.94, porcentaje: 0.2352 },
        { limiteInferior: 83333.34, limiteSuperior: 250000.00, cuotaFija: 19909.68, porcentaje: 0.30 },
        { limiteInferior: 250000.01, limiteSuperior: Infinity, cuotaFija: 78076.22, porcentaje: 0.32 }
    ];

    let isr = 0;
    for (const tramo of tablaISR) {
        if (ingresoBruto > tramo.limiteInferior && ingresoBruto <= tramo.limiteSuperior) {
            isr = tramo.cuotaFija + ((ingresoBruto - tramo.limiteInferior) * tramo.porcentaje);
            break;
        }
    }

    const IMSS = ingresoBruto * 0.07;

    const sueldoNeto = ingresoBruto - (isr + IMSS);

    document.getElementById('resultado').innerText = `Sueldo neto: $${sueldoNeto.toFixed(2)}`;
});

