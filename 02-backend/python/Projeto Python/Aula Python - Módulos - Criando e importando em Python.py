# Módulo com funções variadas

# Função que exibe mensagem de boas-vindas:
#def mensagem ():
#    print('Jônata Emerson da Silva Ribeiro!\n')

#Função para cálculo do fatorial de um número:
#def fatorial(número):
#    if número < 0:
#        return 'Digite um valor maior ou igual a zero'
#    else:
#        if número == 0 or número == 1:
#            return 1
#        else:
#            return número * fatorial(número - 1)
        
#Função para retornar uma série de Fibonacci até um valor x
#def fibo(n):
#    resultado = [0]
#    a, b = 0, 1
#    while b < n:
#        resultado.append(b)
#        a, b = b, a+b
#    return resultado



# Módulo principal
#import modfunções

#modfunções.mensagem()

#número = int(input('Digite um número inteiro:'))

#print('Calculando o fatorial do número:')
#fat = modfunções.fatorial(número)
#print('O fatorial é ', fat)

#print('Calculando a sequência de Fibonacci:')
#fib = modfunções.fibo(número)
#print('O Fibonacci é ', fib)

#import modfunções
#import random

#modfunções.mensagem()

#n = random.randint(1, 10)

#print('Calculando o fatorial do número gerado:')
#fat = modfunções.fatorial(n)
#print('O fatorial de ', n, ' é ', fat)

#print('Exibindo a série de fibonacci até número:')
#fib = modfunções.fibo(n)
#print('Série de fibonacci: ', fib)


# Importando apenas funções específicas
#Módulo principal
from modfunções import fatorial, mensagem

mensagem()

número = int(input('Digite um número inteiro:'))

print('Calculando o fatorial do número:')
fat - fatorial(número)
print('O fatorial é', fat)

print('Exibindo a série de fibonacci até número:')
fib = fibo(n)
print('Série de fibonacci:', fib)