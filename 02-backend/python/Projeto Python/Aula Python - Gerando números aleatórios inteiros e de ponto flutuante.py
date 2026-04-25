#import random
#print('Gerando cinco números aleatórios entre 1 e 50:\n')
#for i in range(1, 6):
#    n = random.randint(1,50)
#    print('Número gerado: ', n)


#import random
#print('Gerando cinco números aleatórios de ponto flutuante:\n')
#for i in range(1, 6):
#    n = random.random()
#    print('Número gerado: ', n)
#    print('Número gerado: ', n * 10)

#import random
#print('Gerando cinco números aleatórios de ponto flutuante:\n')
#for i in range(1, 6):
#    n = random.uniform(1,100)
#    print('Número gerado: ', n)
    

#import random
#L = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
#print('Extraindo número aleatório da lista:\n')
#n = random.choice(L) #função que significa escolha
#print('Número gerado: ', n)


import random
L = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
print('Extraindo números aleatórios da lista:\n')
print(L)
print('Embaralhando a sequência:\n')
n = random.shuffle(L) #função que significa escolha
print('Exibindo a sequência embaralhada:\n')
print(L)
