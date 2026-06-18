D = {'b' : 2, 'a' : 1, 'd' : 4, 'c' : 3}
#ordenada = list(D.keys()) #retorne as chaves do dicionário
#ordenada.sort()
#for key in ordenada: #siginificado >>> para cada chave dentro da minha lista ordenada
#    print(key, ' = ', D[key])

for key in sorted(D):
    print(key, ' = ', D[key])
    