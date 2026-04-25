#!/usr/bin/env python3
import argparse

parser = argparse.ArgumentParser(description='Calcular a área de um terreno')
#Adicionar os argumentos posicionais com o método add_argument():
parser.add_argument('-l','--largura', type=int, help='Largura do Terreno')
parser.add_argument('-c','--comprimento', type=int, help='Comprimento do Terreno')

args = parser.parse_args()

def calcula_area(largura,comprimento):
    área = largura * comprimento
    return área

if name__=='__main__':
    print('A área do terreno é de %s m2' %calcula_área(args.largura,args.comprimento))
