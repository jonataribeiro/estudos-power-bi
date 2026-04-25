#texto='Curso de Python'
#palavra='python'


#curso='Curso de Python'
#canal='CFB Cursos'

#res=curso+' do canal '+canal #concatenando

#res=palavra.upper() in texto.upper() #venverti tudo pra maiúsculo

cidade='Belo Horizonte'
dia=15
mes='Dezembro'
ano=2025
data='{}, {}, de {} de {}' # cahma-se placeroaders


print(data.format(cidade, dia, mes, ano)) #criando variável usando o método format


#\' (aspas simples - apóstrofo) - Caracteres de escape
#\ " (para imprimir aspas duplas)
#\n (quebra de linha)
#\r (retorno)
#\t (tabulação)
#\b (backspace)
#print(cidade + ', ' + str(dia) + ' de ' + mes + ' de ' + str(ano)) #precisa-se realizar a operação de casting

#print(res)