#planeta_anao = {'Plutão', 'Ceres', 'Eris', 'Haumea', 'Makemake'}
#print(planeta_anao)

#qtde_p = len(planeta_anao)
#print(qtde_p)

#for astro in planeta_anao:
#    print(astro.upper())

#astros = ['Lua', 'Vênus', 'Sirius', 'Marte', 'Lua']
#print('Lista:',astros)
#astrosSet = set(astros)
#print('Conjunto:' ,astrosSet)

#p1 = {'Terra','Vênus','Mercúrio','Marte'}
#p2 = {'Terra','Vênus','Mercúrio','Marte','Saturno'}
#print(p1 != p2)

#p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
#p2 = {'Terra','Jupiter','Urano','Marte','Saturno'}
#p1 | p2



p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p2 = {'Terra','Jupiter','Urano','Marte','Saturno'}
print(p1 & p2)


p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p2 = {'Terra','Jupiter','Urano','Marte','Saturno'}
print(p1 - p2)


p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p2 = {'Terra','Jupiter','Urano','Marte','Saturno'}
print(p1 ^ p2) #operador de diferença simétrica


p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p2 = {'Terra','Jupiter','Urano','Marte','Saturno'}
p3 = {'Júpiter','Urano','Saturno'}
#print(p1.isdisjoint(p2)) #perguntando se são is dijunto entre si.)
print(p1.isdisjoint(p3))


p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p4 = p1.copy()
print('P1:', p1)
print('P4:', p4)


p1 = {'Terra','Vênus','Mercúrio','Marte','Netuno'}
p1.add('Júpiter')
print(p1)