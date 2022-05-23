# Desafio-Ford

Desafio de encriptação do VIN NUMBER

O que foi decidido em grupo:

- Primeiro ponto utilizar método de encriptação usando como base tabela ASCII
- Utilizar camadas de criptografia onde cada camada opera de uma maneira
- Para criar a decriptografia seria feito o caminho reverso

Quanto as camadas de criptografia:

- Primeira camada - Somar (VIN_NUMBER).length a cada caractere
- Segunda camada - Inverter a string da primeira camada
- Terceira camada - Inverter maiúsculas por minúsculas e vice-versa
