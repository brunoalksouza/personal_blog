---
title: "O que é UML"
subtitle: "Detalhamento sobre o que é UML e suas relações."
date: "24-02-2024"
---

### O que é UML?

- Padrão aberto
- Suporta o ciclo de vida do software
- Modelagem do negocio(processo e objetos do negocio)
- Modelagem de requisitos alocados ao software
- Modelagem da solução de software

* **Classe:** É um elemento abstrato que representa um conjunto de objetos. Nela contém a especificação do objeto, suas características, atributos e métodos.
* **Atributo:** Basicamente define as características da classe, visibilidade, nome, tipo de dados, multiplicidade, valor inicial e propriedade. A visibilidade pode ser tanto pública(+) ou privada (-). Quando ela é definida como pública significa que outras classes podem ter acesso ao atributo, já quando ela é definida como privada, apenas a própria classe tem acesso. Ela ainda pode ser protegida(#) ou atribuída em pacote(~), onde o atributo é acessado pelo relacionamento da classe com a classe externa.
* **Operação**: Ela trata da função solicitada a um objeto, contém características como nome, visibilidade e parâmetro.
* **Associação:** Ela pode conter nome, a multiplicidade e o tipo de navegação, indica de onde partem as informações da classe e para onde elas irão. O diagrama de classes seria um retângulo com três linhas, onde a linha superior contém o nome da classe, na linha do meio os atributos, e na linha inferior os métodos e suas funções.

As Classes costumam possuir relacionamento entre si, com o intuito de compartilhar informações e colaborarem umas com as outras para permitir a execução dos diversos processos executados pelo sistema.

- Associações
- Simples
- Herança/Generalização
- Agregação
- Composição
- Implementação (Interfaces)

## Relacionamento entre as classes

## Associação

Ela descreve um vínculo que ocorre entre classes — associação binária , mas é possível até mesmo que uma classe esteja vinculada a si própria, associação unitária. Representamos as associações por meio de retas que ligam as classes envolvidas.

![](https://miro.medium.com/v2/resize:fit:499/0*IVvqwbx7tu90tskp)

## Agregação

O objeto-pai poderá usar as informações do objeto agregado.

![](https://miro.medium.com/v2/resize:fit:478/0*ORnbbMIVDQJ9uOpc)

## Composição

Pode-se dizer que composição é uma variação da agregação. Uma composição tenta representar também uma relação todo — parte. No entanto, na composição o objeto-pai (todo) é responsável por criar e destruir suas partes. Em uma composição um mesmo objeto-parte não pode se associar a mais de um objeto-pai. O todo não existe (ou não faz sentido) sem as partes ou, as partes não existem sem o todo.

![](https://miro.medium.com/v2/resize:fit:430/0*rVXWlLdqfioTFNAP)

## Especialização e Generalização

Atributos e métodos definidos na classe-mãe são herdados pelas classes-filhas.

![](https://miro.medium.com/v2/resize:fit:309/0*0ApHz4hviFUhcBVL)

## Interfaces

São elementos do modelo que definem conjuntos de operações que outros elementos do modelo, como classes ou componentes devem implementar.

![](https://miro.medium.com/v2/resize:fit:272/0*FVdlPADepaHrcmnR)
