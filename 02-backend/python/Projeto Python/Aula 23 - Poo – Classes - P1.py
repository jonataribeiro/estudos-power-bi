class Carro:
    velMax=0
    ligado=False
    cor=""

c1=Carro()
c2=Carro()
c3=Carro()

c1.velMax=200
c1.cor="Preto"
c1.ligado=False

print("Velocidade Máxima: " + str(c1.velMax))
print("Cor: " + c1.cor)
estado="sim" if c1.ligado else "não"
print("Ligado: " + estado)
