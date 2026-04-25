import datetime

data=datetime.datetime.now()
nasc=datetime.datetime(1978,3,7)

print(str(data.day) + "/" + str(data.month) + "/" + str(data.year))
print(nasc.strftime("%A"))

#%a texto dia da semana abreviado
#%A texto dia da semana
#%w núm do dia da semana
#%d núm dia do mês
#%b text mês abreviado
#%B texto mês
#%m retorna o número dp mês
#%y Ano com dois dígitos
#%Y Ano com quatro dígitos
#%H 00 a 23
#%I 00 a 12
#%p indica AM / PM
#%M minutos
#%S segundos
#%f microssegundos
#%j Dia do ano 001 até 366
#%W Número da semana do ano (semana 10, por exemplo)
