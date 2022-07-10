def run():
    mi_diccionario={
        'llave1':1,
        'llave2':2,
        'llave3':3,    
    }
    
    # print(mi_diccionario['llave1'])
    
    poblacion_paises = {
        'Argenitna': 44938712,
        'Brasil': 210147125,
        'Colombia': 50372424
    }

   # print(poblacion_paises['bolivia'])
    
    for pais in poblacion_paises.keys():
        print(pais)

if __name__ == '__main__':
    run()