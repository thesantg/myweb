print("*** Cajero Automatico ***")

saldo = 1000
salir = False

while not salir:
    print(""" Operaciones a realizar:
        1. Consultar saldo
        2. Retirar
        3. Depositar
        4. salir
        """)
    usuario = int(input("ingresa la operacion a realizar:"))
    if usuario == 1:
            print(f"Tu saldo es: {saldo}")
    elif usuario == 2:
            retirar = int(input("ingresa la cantidad a retirar: "))
            saldo -=retirar
            print(f"Retiraste: {retirar}, y tu saldo ahora es: {saldo}")
    elif usuario == 3:
            depositar = int(input("ingresa la cantidad a depositar: "))
            saldo += depositar
            print(f"Depositaste: {depositar}, y tu saldo ahora es: {saldo}")
    elif usuario == 4 :
            print("Gracias por usar el Cajero automatico...")
            salir = True
