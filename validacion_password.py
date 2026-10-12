print("*** Validacion de password ***")
password = input("Ingresa la contraseña (De alemenos 6 caracteres) ")
while len(password) < 6:
    print("La contraseña tiene menos de 6 caracteres, vuelve a intentarlo")
    password = input("ingresa la contraseña ")
else:
    print("La contraseña es valida")