#array ou list - carros=["Gol","Polo","Argo","Focus"]
carros=[
    ["Modelo","Polo"],
    ["Fabricante","Volkswagen"],
    ["Ano","2020"]
    ] #Tenho uma list com três posições: pos 0, pos 1, pos 2.

#print(carros[0][0]) # vai imprimir modelo
#print(carros[0][1]) # vai imprimir Polo
#print(carros[1][1]) # vai imprimir Volkswagen
#print(carros[2][0]) # vai imprimir Ano

#se eu quiser utilizar um for para percorrer todos os elementos dessa list
#eu posso criar uma variável para linha e uma para coluna

carros.append(["Cor","Prata"]) #se eu quiser adicionar uma nova informação
for l,c in carros:
    print("Linha: " + l + " | Coluna: " + str(c))
