#qual a diferença de uma tupla pra uma lista: na lista, eu posso mudar de gol pra saveiro.
#na tupla, não tem jeito. Se eu substituo na tupla, uma vez criada a tupla, eu não posso fazer alterações
#l_carros=["Gol", "Saveiro", "Ford Ka"]
t_carros=("Gol", "Saveiro", "Ford Ka") # na tupla a gente vai usar parênteses e, uma vez definida a tupla, não podemos alterar o seu valor
l_carros=list(t_carros)
l_carros[2]="Argo"
t_carros=tuple(l_carros)

#print(t_carros[0])

for x in t_carros:
    print(x)
