# Desafío Técnico: Simuladores Web

Este proyecto es una página con dos simuladores que funcionan con lógica matemática, usando HTML, CSS y JavaScript nativo sin librerías externas.

## Ejercicios

### 1. Simulador de Transferencia de Calor
Calcula la temperatura final de un objeto con el paso del tiempo.
* **Fórmula:** $T = T_s + (T_0 - T_s) \cdot e^{-k \cdot t}$
* **Funcionamiento:** Agarra los valores de los inputs por su ID, hace el cálculo con `Math.exp()` y redondea el resultado final al entero más cercano usando `Math.round()`.

### 2. Calculador de Combinaciones Complejas
Saca el total de combinaciones posibles para un sorteo con dos grupos independientes.
* **Fórmula:** $C(n, r) = \frac{n!}{r!(n - r)!}$
* **Funcionamiento:** Usa una función propia con un bucle para calcular el factorial sin librerías. También valida que la muestra ($r$) no sea mayor al total de elementos ($n$) para evitar errores.
