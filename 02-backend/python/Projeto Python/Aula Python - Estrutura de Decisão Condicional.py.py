nota1 = 0.00
nota2 = 7.00
média = (nota1 + nota2) / 2
if média >= 7.00:
    print("O aluno foi aprovado!\n")
    print("Parabéns!")
else:
    if média >= 5.00: 
        print("Aluno em recuperação")
    else:
        print("O aluno foi aprovado...")
        print("Estude mais!!!")

print("A média é %f " % média)