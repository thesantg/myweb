print("*** Dibuja TRiangulo Simetrico ***")

numero_filas = int(input('Proporciona el numero de filas: '))

#iterar sobre cada fila del triangulo
for fila in range(1,numero_filas + 1):
    espacio = " " * (numero_filas - fila)
    asterisco = "*" * (2 * fila  - 1)
    print(f"{espacio}{asterisco}")