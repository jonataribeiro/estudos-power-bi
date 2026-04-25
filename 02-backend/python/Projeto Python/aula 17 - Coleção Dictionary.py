# No dictionary usa-se chaves {}
# cada dado precisa de uma chave e um valor  e um valor relacionado a essa chave
#Chave/Key - Valor/Value
#carro={
#   "Fabricante":"Honda",
#  "Modelo":"Civic",
#    "Ano":"2020",
#   "Cor":"Grafite"
#Como imprimir: eu posso criar um loop pra percorrer. Ele é indexável,
#então significa que eu posso mudar os valores para acessar os valores

#carro["Câmbio"]="Automático" #adicionando valor ao Dictionary

#fab=carro.get("Fabricante") #posso usar o get pra acessar diretamente o índice da chave
#fab=carro["Modelo"] #Usa-se uma variável fab para também imprimir o solicitado

#carro["Cor"]="Preto"
#print(carro["Fabricante"]) #usa-se colchetes para imprimir o Fabricante.
#print(carro["Cor"]) #vai imprimir somente a cor

#for x in carro:
    #print(x) #Chave
    #print(x) #aqui eu percorri todos os elementos dentro das chaves
    #print(carro[x]) #Valor
#for c,v in carro.items():
#print("Tamanho do Dictionary: " + str(len(carro)))
#if "Modelo" in carro:
#    print("SIM, modelo é uma chave \n")
#for c,v in carro.items():
#    print(c + ": " + v)

Carro1={
    "Fabricante":"Honda",
    "Modelo":"Civic",
    "Ano":"2020",
    "Cor":"Grafite"
},
Carro2={
    "Fabricante":"Volkswagen",
    "Modelo":"Nivus",
    "Ano":"2018",
    "Cor":"Vermelho"
},
Carro3={
    "Fabricante":"Fiat",
    "Modelo":"Argo",
    "Ano":"2025",
    "Cor":"Branco"
}

Carros={
    "C1":Carro1,
    "C2":Carro2,
    "C3":Carro3
}

print(Carros["C1"],(["C3"]))