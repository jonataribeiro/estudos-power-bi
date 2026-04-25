#Se a gente quiser avançar sobre valores de uma coleção a gente usa o interator
carros=["HRV","Polo","Jetta","Cruze","Fusion"]

itCarros=iter(carros)

while itCarros:
    try:
        print(next(itCarros)) #é uma forma de eu percorrer a nossa lsita utilizando simplesmente o next
    except StopIteration: #iterator serve pra poder percorrer uma lista 
        print("Fim da Lista")
        break


#for c in carros: #for é o loop próprio para percorrer coleções
    #print(c)
#print(next(itCarros))
#print(next(itCarros))
#print(next(itCarros))
#print(next(itCarros))
#print(next(itCarros))
#print(next(itCarros))

#i=0
#while i<5:
#    print(carros[i])
#    I==1