## Cálculo de Complejidad de Contraseña

1. Implementar (al menos 2 reglas)
  - a) Regla de mínimo de caracteres (ejemplo: Longitud mínima 8 caracteres).
  - b) Regla de que contenga (al menos) 2 números siempre y cuando también contenga letras.
  - c) Implementar una función que:
    - Si cumple con las 2 reglas → es Excelente
    - Si cumple con sólo 1 → es Buena
    - Si no cumple con ninguna → es Débil

2. Usando la función construida en el ejercicio anterior, mostrar un semáforo de colores de acuerdo a si la contraseña ingresada es Excelente (verde), Buena (amarillo) o Débil (rojo).

3. Para desacoplar la lógica del front, implementar un servidor con Node que exponga un endpoint que nos permita saber cuán buena es una contraseña (Excelente, Buena o Débil).
