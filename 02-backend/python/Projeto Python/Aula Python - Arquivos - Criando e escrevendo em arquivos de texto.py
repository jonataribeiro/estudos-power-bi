# Criando e escrevendo em arquivos de texto (modo 'w')

arquivo = open('arq01.txt','w')
arquivo.write('Jônata Ribeiro\n')
arquivo.write('Criando um arquivo de texto com Python\n')
arquivo.write('Arquivo criado por Jônata Emerson Ribeiro\n')
arquivo.write('É isso aí, pessoal!\n')

#Lendo o arquivo criado:
arquivo = open('arq01.txt','r')
for linha in arquivo:
    linha = linha.rstrip()
    print(linha)
arquivo.close()

