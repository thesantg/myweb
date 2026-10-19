print("*** Juego de adivinanzas ***")
from random import randint
contador = 0
numero = randint(1,50)
usuario =  None
while usuario != numero:
    usuario = int(input("ingresa en numero del 1 - 50"))
    if usuario == numero:
        print(f"Felicidades numero acertado, {numero}")
    elif usuario != numero:
        print("Numero incorrecto, vuelve a intentarlo")