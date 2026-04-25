carros=['HRV', 'Golf','Argo','Focus'] #As listas são indexadas
#carros[3]='Fusion'
carros.append('Fit') #que faz a adição de novos itens dentro de nossa lista
carros.append('Fusion')
carros.append('Polo')

#carros.remove('Fusion') # remove ítens da lista
#carros.pop() #remove o último elemento da nossa lista
#del carros[2] #indexação de ítens para remoção da lista (neste caso ele removerá o penultimo)
#carros.clear() # para limpar todos os elemtos da nossa lista

carros2=['Fusca','147','Brasília','Celta']
carros3=carros+carros2

print(str(len(carros3)) + ' Carros na lista')
print(carros3)

#print(str(len(carros)) + ' Carros na lista') #o tamanho ou quantidade da nossa lista
print(carros)
