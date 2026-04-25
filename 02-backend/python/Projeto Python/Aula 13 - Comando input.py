#nome=input("Digite seu nome")
#print("Nome digitado: " + nome)
#input()

import os
os.system('cls') #Windows
#os.system('clear') #Linux

num1=int(input("Digite o primeiro valor..: ")) #aqui tenho que converter para inteiro int se eu quiser realizar a soma
num2=int(input("Digite o segundo valor..: "))
res=num1+num2
print("Soma dos valores: " + str(res)) #num é string, mas res é str (se for somar muda para string)
