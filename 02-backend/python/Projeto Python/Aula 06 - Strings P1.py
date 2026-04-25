curso='Curso de Python'

#curso.strip() tira os espaços

#print(curso[9:15]) como usar o indexador
#print(curso.lower()) Coberte as strings para minúsculo.
#print(curso.upper().strip())
#print(curso.lower().strip()) #converte para minúsculo e tira os espaços.
#print(curso.strip())
#print(curso.upper())
#print(curso.replace('Python','C#')) #ele faz a substituição de uma string ou caractere por outra string ou caractere
a=curso.split(' ')
print(a[2]) #faz subdivisão na nossa string - onde encontrar o espaço ele fará o split
print('tamanhho: ' + str(len(curso))) #para converter precisa de uma operação de quest kest