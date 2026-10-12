print("*** Aplicación Calculadora ***")

usuario = 0
numero1 = 0
numero2 = 0
salir = False

while not salir:
    print(""" Calculadora
    1. Suma
    2. Resta
    3. Multiplicacion
    4. Division
    5. Salir
    """)
    if 1 <= usuario <= 4:
        usuario = int(input("ingresa la operacion a realizar: "))
        numero1 = int(input("ingresa el numero: "))
        numero2 = int(input("ingresa el numero: "))
    if usuario == 1:
        suma = numero1 + numero2
        print(f"la suma de {numero1} + {numero2} = {suma}")
    elif usuario == 2:
        suma = numero1 - numero2
        print(f"la Resta de {numero1} - {numero2} = {suma}")
    elif usuario == 3:
        suma = numero1 * numero2
        print(f"la Multiplicacion de {numero1} * {numero2} = {suma}")
    elif usuario == 4:
        suma = numero1 / numero2
        print(f"la Division de {numero1} / {numero2} = {suma}")
    elif usuario == 5:
        salir = True