            # language: pt
            Funcionalidade: Elementos Orçamentários

            Como Administrador ForPDi, desejo testar a Funcionalidade Elementos Orçamentários.

            Contexto: Login

            Dado Que eu esteja logado
            E Entre em Elementos Orçamentários

            Esquema do Cenário: Teste com "<teste>"
            Dado Que eu clique em Novo
            E Preencha a ação "<ação>"
            E Preencha o orçamento "<orçamento>"
            Quando Eu clicar no botão salvar
            Entao A mensagem "<mensagem>" e o popUp "<popUp>" irão aparecer

            Exemplos:
            | teste                    | ação                | orçamento  | mensagem                                   | popUp                                        |
            | Ação inválida            | {home}              | 1000       | Você não pode deixar esse campo em branco! | Existem erros no formulário                  |
            | Orçamento inválido       | teste               | onlyNumber | Você não pode deixar esse campo em branco! | Existem erros no formulário                  |
            | Orçamento e Ação Válidos | Primeira Ação Teste | 1000       | Ação orçamentária                          | Elemento orçamentário adicionado com sucesso |
            | Ação já existente        | Primeira Ação Teste | 1000       | Ação orçamentária                          | Nome de ação orcamentária já existente!      |
            | Segunda Ação Válida      | Segunda Ação Teste  | 10000000   | Ação orçamentária                          | Elemento orçamentário adicionado com sucesso |

            Esquema do Cenario: Editando a "<numeracao>" ação teste

            Dado Que eu tenha ações cadastradas "<posicao>"
            Quando Eu clicar no botão editar da ação "<posicao>"
            E Editar o nome da Ação "<nome>"
            E Editar o orçamento "<orçamento>"
            E Eu clicar no botão salvar
            Entao A mensagem popUp "<popUp>" irá aparecer

            Exemplos:


            | posicao             | nome                | orçamento | numeracao | popUp                                      |
            | PRIMEIRA AÇÃO TESTE | TERCEIRA AÇÃO TESTE | 5000      | primeira  | Orçamento editado com sucesso!             |
            | SEGUNDA AÇÃO TESTE  | QUARTA AÇÃO TESTE   | 3000      | segunda   | Elemento orçamentário excluido com sucesso |


            Esquema do Cenario: Excluindo a "<numeracao>" ação teste

            Dado Que eu tenha ações cadastradas "<posicao>"
            Quando Eu clicar no botão excluir da ação "<posicao>"
            Entao A mensagem "<mensagem>" e o popUp "<popUp>" devem aparecer

            Exemplos:

            | posicao             | numeracao | mensagem                                                 | popUp                                      |
            | TERCEIRA AÇÃO TESTE | primeira  | Você tem certeza que deseja excluir terceira Ação Teste? | Elemento orçamentário excluido com sucesso |
            | QUARTA AÇÃO TESTE   | segunda   | Você tem certeza que deseja excluir quarta Ação Teste?  | Elemento orçamentário excluido com sucesso |











