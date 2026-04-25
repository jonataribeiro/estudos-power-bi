# Função para listar os itens
#def listar_itens(w, x, y, z):
#    print(w, x, y, z)

#lista = [21, 22, 67, 69]

#Tentando listar os itens diretamente:
#listar_itens(lista)

#Tentando listar os itens com o operador adequado:
#listar_itens(*lista)

# Empacotando itens

def somar(*args):
    soma = 0
    for i in range(0, len(args)):
        soma += args[i]
    return soma

# testanto:
print(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
print(somar(77, 23))
