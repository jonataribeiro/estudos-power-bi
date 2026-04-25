x=1 #int
x= 'CFB Cursos' #string
x=15.6 #float
x=True #bool
n1=5;n2=2;x=complex(1j)
x=['Carro','Avião,','Navio',1,58.3,True] #Coleção: List / Array, usa-se colchetes
#x[0]='Ônibus' #Assim altera carro por ônibus, criando através dessas colchetes.

x=['Carro','Avião,','Navio',1,58.3,True] #Coleção Tupla, usa-se parênteses. a tupla é diferente do Array,
#ela é fechada e não consigo substituir um elemento,
#portanto, não posso substituir os elementos de uma tupla por serem fechados

#x=range(0,100,1) #List, é uma funçao que cria uma lista e adicionando valor de um em um.
#print('Valor: '+str(x))

x={ #Dict
    'canal':'CFB Cursos',
    'curso':'Curso de Python',
    'nome':'Bruno'
}


x={5,7,4,5,7,4,8} #set não repete valores]
x=frozenset({5,7,4,5,7,4,8})
print('Valor: '+str(x))
print('Tipo: '+str(type(x)))


#print('Valor: '+x['nome']) #os elementos usamos as chaves.


#print('Valor: '+x[0]) #dentro desses colchetes está o valor do índice
#print('Tipo: '+str(type(x)))
