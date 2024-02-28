---
title: "REST & RESTful"
subtitle: "Um resumo sobre o que é REST e RESTful."
date: "24-02-2024"
---

### REST - REpresentational State Tranfer

REST, ou Representational State Transfer, é um **estilo que fornece padrões entre sistemas de computador na web, facilitando a comunicação entre eles**.

Os sistemas em conformidade com REST, muitas vezes conhecidos como sistemas RESTful, são reconhecidos pelo jeito como separam as **preocupações do cliente e do servidor**.

No estilo REST, a implementação do cliente e do servidor pode ser feita de **forma independente**, sem que cada um conheça o outro. Isso significa que o código do **lado do cliente pode ser alterado** a qualquer momento, **sem afetar a operação do servidor,** e o contrário também é válido.

#### APIs REST são baseadas em quatro conceitos principais:

1. Utilização dos métodos HTTP, como GET, POST, PUT e DELETE, para realizar operações em recursos.
2. Uso de URLs (Uniform Resource Locators) para identificar recursos específicos.
3. Transferência de dados entre cliente e servidor em um formato padrão, geralmente JSON ou XML.
4. Estado da aplicação no cliente, em vez de armazená-lo no servidor.

Para uma API ser considerada RESTful, ela deve atender a certos critérios adicionais além dos princípios REST.

- **Interface uniforme e simples**: a API deve fornecer uma interface consistente e padronizada para acessar e manipular recursos.
- **Clientes sem estado**: cada solicitação enviada pelo cliente para o servidor deve conter todas as informações necessárias para entendê-la, sem depender de nenhum contexto armazenado no servidor.
- **Operações baseadas em recursos**: as ações realizadas pela API devem ser orientadas a recursos identificados por URLs únicas.

  > Ou seja, as principais diferenças entre APIs REST e RESTful está no nível de aderência aos princípios REST. Enquanto as APIs REST seguem os princípios básicos do REST, as APIs RESTful são uma implementação mais completa e estrita desses princípios. APIs RESTful aderem a critérios adicionais, como a interface uniforme, clientes sem estado e operações baseadas em recursos.

- **Maior compatibilidade e escalabilidade**: como não existem restrições rígidas, as APIs REST podem ser usadas em uma ampla variedade de plataformas e linguagens de programação. O estilo arquitetural REST permite que as APIs sejam escaláveis e suportem uma carga de tráfego maior.

### Stateless

Os sistemas que seguem o paradigma REST são stateless, o que pode ser traduzido livremente como “sem estado”. Isso significa que **o servidor não precisa saber nada sobre o estado em que o cliente se encontra e vice-versa**.

![/posts/1.png](/posts/1_rest_and_restfull/1.png)

### Cacheable

As restrições de [cache](https://rockcontent.com/br/blog/w3-total-cache/) requerem que as informações contidas em uma resposta a uma solicitação sejam, diretamente ou não, definidas como cacheáveis ou não cacheáveis.
Caso uma resposta for armazenável em cache, então, é dado ao cliente o direito de utilizar novamente esses dados para atividades similares no futuro.

### Interface Uniforme

O principal elemento que distingue o REST de outras opções com base na rede é o seu foco em uma interface uniforme entre os componentes. O princípio de generalidade, característica da engenharia de software, quando aplicado à interface de componentes, simplifica a arquitetura do sistema e torna as interações mais visíveis.

A fim de obter uniformidade na interface, são necessárias múltiplas restrições para orientar o comportamento dos componentes. REST é definido por quatro fatores:

- identificação de recursos;
- gerenciamento de recursos por meio de representações;
- mensagens auto-descritivas;
- hipermídia.

---

## Como utilizar o REST?

Uma solicitação, geralmente, consiste em:

- verbo [[HTTP]], que define o tipo de operação a realizar;
- header, que permite ao cliente transmitir informações sobre o pedido;
- caminho para um recurso;
- corpo de mensagem opcional contendo dados.

Sobre o primeiro item, o verbo HTTP, é fundamental conhecer quatro entradas básicas:

- GET — recuperar um recurso específico (por id) ou uma coleção de recursos;
- POST — criar um novo recurso;
- PUT — atualizar um recurso específico (por id);
- DELETE — remover um recurso específico por id.

No cabeçalho da solicitação, o cliente envia o tipo de conteúdo que é capaz de receber do servidor. Esse é o campo chamado ACCEPT, e garante que o servidor não envie dados que não possam ser compreendidos ou processados pelo cliente.

Os pedidos devem conter um caminho para o recurso no qual a operação deve ser realizada. Nas APIs RESTful, **os caminhos devem ser projetados para ajudar o cliente a saber o que está acontecendo**.
