#def contar(valor=11, caractere='+'):
#    for i in range(1, valor):
#        print(caractere)
#contar()
#print('Passando valor e caractere diferentes:')
#contar(6, '$')
#print('Tentando passar os parâmetros fora de ordem:')
#contar('#',7)
#print('Passando os parâmetros dora de ordem, nomeado:')
#contar(caractere='$', valor=7)

def contar(caractere, valor=11):
    for i in range(1, valor):
        print(caractere)
#print('Passando apenas o argumento obrigatório:')
#contar('#')
#print('Passando um caractere diferente, nomeado:')
#contar(caractere='&')
#print('Passando o caractere e um valor diferente')
#contar('!', valor=5)
print('Tentando executar a função sem passar o parâmetro obrigatório')
contar()
