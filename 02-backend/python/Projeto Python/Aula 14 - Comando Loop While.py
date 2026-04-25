#while #ele precisa de uma condição pra informar se ele vai continuar sendo executado ou não.
#regras básicas: inicialização de variável de controle

#inicialização de variável de controle
#while (teste lógico) #enquanto esse teste aqui retornar \true, ele vai executar os comandos
#    comando1 #eu tenho que controlar pra algum momento pra esse teste retornar falso pra evitar um loop infinito
#    comando2
#    comandox
#    inc ou dec ou controle da variável
import os
os.system("cls")

#i=0
#while i<9:
#    print(i)
#    i+=1 #estou atribuindo o valor de i a 1
#    if(i>=5): #se acaso eu desejar para no meio do programa
#        break
#print("Fim do Programa")

#While pode ser também para criar coleções e imprimir, por exemplo, os valores e os elementos dessa coleção
#eu posso ler o tamanho dessa coleção e criar uma variável de controle chamada tam

#carros=["HRV","Golf","Argo","Onix","Focus"]
#i=0 #inicia uma variável de controle com 0
#tam=len(carros)
#while i<tam:
#   print(carros[i])
#    i+=1
#print("\nFim do Loop")

import os
carros=[]
carro=input("Digite o nome do novo carro: ")
while carro != "999":
    carros.append(carro)
    carro=input("Digite o nome do novo carro: ")

os.system("cls")
for x in carros:
    print(x)

print("\nFim do Loop")
