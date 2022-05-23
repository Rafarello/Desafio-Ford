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

Como foi desenvolvido:

- Criar primeiramente a camada de encriptação e a camada de decriptação juntas. Como são 3 camadas, a primeira de encriptação é a terceira de decriptação e vice-versa.

Obs: Motivo principal de ter sido realizado dessa forma, além da organização é que se não houvesse tempo necessário, pelo menos seria possível de realizar a encriptação e a decriptação corretamente da palavra

- Foram feitos commits para cada função criada
- Terceiro passo foi exportar as funções completas

Linter

- Foi utilizado o EsLint como ferramenta de qualidade de código com enforçamento de estilo de código do AirBnb.

Testes

- Foi realizada uma verificação de uma encriptação e decriptação de uma palavra utilizando as funções criadas anteriormente, onde espera-se que o retorno seja igual a palavra inicial
