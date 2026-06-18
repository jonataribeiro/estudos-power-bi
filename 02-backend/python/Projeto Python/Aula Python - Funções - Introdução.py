#def mensagem():
#    print('Jônata Ribeiro')

#mensagem()

#x = 10
#y = 20

#def soma (a, b):
#    return a + b
#r = soma (x, y)
#print(r)

#x = 5
#y = 6
#def soma (a, b):
#	return a + b
#c = soma(x, y)
#print('A soma de a e b é %d' % c)

valores = [1, 2, 3, 4, 5]

def quadrado(valores):
    quadrados = []
    for x in valores:
        quadrados.append(x**2)
    return quadrados

resultados = quadrado(valores)
for y in resultados:
    print(y)

