# language: pt
Funcionalidade: Plano

    Como Administrador, quero criar o meu primeiro plano e conferir os campos.

Contexto: Login

Dado Que eu esteja logado
E Entre em Novo Plano 

Esquema do Cenário: Novo plano
    Dado que eu preencha o "<nome>"
    E preencha a "<dataDeInicio>" e a "<dataDeTermino>"
    E preencha a "<descricao>"
    Quando Eu clicar no botão 'Salvar'
    Entao A "<mensagem>" e a "<popUp>" aparecem 

Exemplos:
|    nome    | dataDeInicio | dataDeTermino |    descricao   |                    mensagem                         |            popUp            |
|   {home}   |  01/09/2021  |   02/09/2021  |      teste     |      Você não pode deixar esse campo em branco!     | Existem erros no formulário |
| PlanoAuto  |    {home}    |   02/09/2021  |      teste     |      Você não pode deixar esse campo em branco!     | Existem erros no formulário |           
| PlanoAuto  |  01/09/2021  |     {home}    |      teste     |      Você não pode deixar esse campo em branco!     | Existem erros no formulário |
| PlanoAuto  |  02/09/2021  |   01/09/2021  |      teste     | Data de término deve ser posterior à data de início | Existem erros no formulário |
| PlanoAuto  |  01/09/2021  |   02/09/2021  | <a> lucas </a> |              Plano criado com sucesso.              | Plano criado com sucesso.   |