a = int(input('Introduce un numero'))
operador= input(('introduce un operador'))
b = int(input('Introduce otro numero'))


if operador=='+':
    suma = a + b
    print ('Calculando...')
    print ('El resultado es ', suma)
 
elif operador=='-':
    resta = a - b
    print ('Calculando...')
    print ('El resultado es ', resta)
 
elif operador=='*':
    multi = a * b
    print ('Calculando...')
    print ('El resultado es ', multi)
 
elif operador=='/':
    divi = a / b
    print ('Calculando...')
    print ('El resultado es ', divi)

else:
    print("Syntax Error")    