from pywebio.input import input, FLOAT
from pywebio.output import *

def interface():
    
    capital_inicial = input("Digite o valor do capital inicial: ", type=FLOAT)
    taxa_mensal = input("Digite a taxa de juros mensal em Porcentagem: ", type=FLOAT)
    tempo_total = input("Digite o periodo em meses: ", type=FLOAT)
    taxa_total = '{:.2f}'.format(((1 + taxa_mensal/100)**tempo_total)*100)
    
    valor_total = '{:.2f}'.format(jurosComp(tempo_total, taxa_mensal, capital_inicial))
    
    put_text(f'O valor Final da aplicação após {tempo_total} meses é {valor_total} e com {taxa_mensal}% e aplicações a cada mes, totalizando {taxa_total}%.')


def jurosComp(tempo_total, taxa_mensal, capital_inicial):

    montante = capital_inicial * (1 + taxa_mensal/100)**tempo_total
    return montante

if __name__ == '__main__':
    interface()