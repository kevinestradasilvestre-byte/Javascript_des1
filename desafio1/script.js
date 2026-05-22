document.addEventListener("DOMContentLoaded", () => {
    
    // --- EJERCICIO 1: TRANSFERENCIA DE CALOR ---
    const formCalor = document.getElementById("form-calor");
    const resultCalor = document.getElementById("resultado-calor");

    formCalor.addEventListener("submit", (e) => {
        e.preventDefault();

        // Captura estricta con document.getElementById().value
        const t0 = parseFloat(document.getElementById("t0").value);
        const ts = parseFloat(document.getElementById("ts").value);
        const k = parseFloat(document.getElementById("k").value);
        const t = parseFloat(document.getElementById("tiempo").value);

        // Procesamiento matemático
        // T = Ts + (T0 - Ts) * e^(-k * t)
        const tempFinal = ts + (t0 - ts) * Math.exp(-k * t);
        const resultadoRedondeado = Math.round(tempFinal);

        // Renderizado dinámico
        resultCalor.innerHTML = `Temperatura Final Calculada: <span style="color:#2ecc71;">${resultadoRedondeado} °C</span>`;
        resultCalor.classList.remove("hidden", "error");
    });


    // --- EJERCICIO 2: COMBINACIONES COMPLEJAS ---
    const formCombinaciones = document.getElementById("form-combinaciones");
    const resultCombinaciones = document.getElementById("resultado-combinaciones");

    // Función iterativa propia para calcular el factorial (!) sin librerías
    function calcularFactorial(num) {
        if (num === 0 || num === 1) return 1;
        let resultado = 1;
        for (let i = 2; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // Función auxiliar para calcular combinaciones C(n, r)
    function obtenerCombinaciones(n, r) {
        return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
    }

    formCombinaciones.addEventListener("submit", (e) => {
        e.preventDefault();

        // Captura estricta de datos
        const n1 = parseInt(document.getElementById("n1").value);
        const r1 = parseInt(document.getElementById("r1").value);
        const n2 = parseInt(document.getElementById("n2").value);
        const r2 = parseInt(document.getElementById("r2").value);

        // Validación obligatoria: Evitar incompatibilidades (r > n)
        if (r1 > n1 || r2 > n2) {
            resultCombinaciones.innerHTML = "Error: El tamaño de la muestra (r) no puede ser mayor que el total de elementos (n).";
            resultCombinaciones.classList.remove("hidden");
            resultCombinaciones.classList.add("error");
            return;
        }

        // JS maneja enteros seguros hasta 9,007,199,254,740,991. 
        // Para n > 170 el factorial da Infinity, añadimos control de desbordamiento.
        if (n1 > 170 || n2 > 170) {
            resultCombinaciones.innerHTML = "Error: Los valores de 'n' son demasiado altos y causan desbordamiento numérico.";
            resultCombinaciones.classList.remove("hidden");
            resultCombinaciones.classList.add("error");
            return;
        }

        // Aplicar ecuación a ambos grupos y efectuar el producto total
        const combinacionesGrupo1 = obtenerCombinaciones(n1, r1);
        const combinacionesGrupo2 = obtenerCombinaciones(n2, r2);
        const totalCombinaciones = combinacionesGrupo1 * combinacionesGrupo2;

        // Formatear salida con separadores de miles
        const resultadoFormateado = totalCombinaciones.toLocaleString('de-DE');

        // Mostrar el total de combinaciones de manera dinámica
        resultCombinaciones.innerHTML = `Total de Combinaciones Posibles: <br><span style="color:#2ecc71; font-size: 1.3rem;">${resultadoFormateado}</span>`;
        resultCombinaciones.classList.remove("hidden", "error");
    });
});