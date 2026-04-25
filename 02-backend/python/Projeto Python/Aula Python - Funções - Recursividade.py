# Funções recursivas em Python
#def fatorial (número):
#    if número == 0 or número == 1:
#        return 1
#    else:
#        return número * fatorial(número -1)
#x = int(input('Digite um número para calcular seu fatorial'))
#res = fatorial(x)
#print('O fatorial de %d é %d' % (x, res))


def fibonacci(num):
    if num <= 1:
        return num
    else:
        return fibonacci(num -1) + fibonacci(num - 2)
x = int(input('Digite um número para calcular seu fibonacci:'))
res = fibonacci(x-1)
print('O fibonacci de %d é %d' % (x, res))
