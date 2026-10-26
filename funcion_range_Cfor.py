print("*** Funcion Range En ciclo for ***")
for i in range(5):
    print(i, end=" ")

print("\nSecuencia del 0 al 20 con paso 2")
for i in range(0,20 + 1,2):
    print(i, end=" ")

print("*** Repeticion de un mensaje ***")
mensaje = "hola mundo"
repetir = int(input("Ingresa las veces a repetir el mensaje"))
for _ in range(repetir):
    print(mensaje)