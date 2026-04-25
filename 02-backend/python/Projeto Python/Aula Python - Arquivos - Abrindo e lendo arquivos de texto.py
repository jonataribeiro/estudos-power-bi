manipulador = open('arquivo.txt','r')
print('\nMétodo read():\n')
print(manipulador.read())

manipulador.seek(0) # Volta para o início do arquivo

print('\nMétodo eradline() :\n')
print(manipulador.readline())
print(manipulador.readline())

manipulador.seek(0)

manipulador.close()

print('Teste de abertura de arquivos em Python')
print('Tentando abrir um arquivo de texto armazenado no PC:\n')

#01
""""
manipulador = open('arquivo.txt','r')
for linha in manipulador:
    linha = manipulador:
    print(linha)
manipulador.close()
"""
#02

print('\nContando as linhas do arquivo de texto analisado:\n')
contador = 0
arq = open('arquivo.txt','r')
for linha in arq:
    contador = contador + 1
print('Número de linhas no arquivo: ', contador)
arq.close()


#03

print('\nRetornando somente as linhas que possuem a palavra Python')
arq = open('arquivo.txt','r')
contador = 0
for linha in arq:
    linha = linha.rstrip()
    if 'Python' in linha:
        contador = contador + 1
        print(linha)
print('\nForam retornadas', contador, 'linhas')
arq.close()
