#if #É um comando de decisão que, de acordo com um resultado de um teste lógico
#ele vai executar um bloco de comandos ou não.

#a=False

#if a: #essa é sintaxe básica do if, dois pontos (se retornar vir verdadeiro, ele executa os seus comandos)
#    print('CFB Curso') #aqui vem o escopo do comando

#print('Fim do programa');

#a=10
#b=5

#if a>b:

#if a<b:
#    print('CFB Cursos') # não foi executado devido porque a não é maior que b nessa etapa.

#print('Fim do Programa')

#a=10
#b=5
#res=0
#op='+'

#if op=='+': #Essa expressão de comparação, neste caso a gente não só um igual; usa-se dois iguais ==
#    res=a+b

#print('Operação '+ op +': ' + str(res)); #esses sinais de + com str e cast significa concatenação

a=10
b=5
res=0
op='-'

if op=='-':
    res=a-b

    
if op=='*':
    res=a*b



if op=='/':
    res=a/b

print(str(a) + op + str(b) + ' = ' + str(res));
