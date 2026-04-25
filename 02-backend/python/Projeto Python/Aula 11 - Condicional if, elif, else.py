#else if: ele fuiciona da seguinte maneira: é o contrário do if
#Como se trabalha com else if, resumindo, é uma junção que forma elif
#else: ele vai ser executado caso todos os testes anteriores tenham sido falsas

clima='sol'
dinheiro=480
lugar=""

if clima=='sol' or (dinheiro>=300 and dinheiro<=500):
    lugar='clube'
else:
    lugar='cinema'

print('Vou ao '+lugar)

# AND - Tabelinha do And: todas têm que ter V pra se tornar verdadeiro
# V - V = V
# V - F = F
# F - V = F
# F - F = F

# OR - Tabelinha do Or: basta apenas um verdadeiro para todos serem verdadeiros
# V - V = V
# V - F = V
# F - V = V
# F - F = F