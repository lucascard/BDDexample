            # language: pt
            Funcionalidade: Editar os dados do usuário. Meu Perfil

            Como Administrador ForPDi, desejo testar as funcionalidades dentro da página Meu perfil

            Contexto: Login

            Dado Que eu esteja logado
            E Entre em Meu Perfil

            Esquema do Cenário: Teste com "<teste>"

            Dado Que eu clique em editar
            Quando Eu editar o nome "<nome>"
            E Eu editar o email "<email>"
            E Eu editar o cpf "<cpf>"
            E Clicar em alterar Senha
            E Digitar a senha atual "<senha_atual>"
            E Digitar a nova senha "<nova_senha>" e confirmar a nova senha "<confirmar_nova_senha>"
            E Eu editar a celular "<celular>"
            E Clicar em salvar
            Entao Eu devo ver a mensagem "<mensagem>" e o popUp "<popUp>"

            Exemplos:
            | teste                 | nome      | email                           | cpf                | celular            | senha_atual | nova_senha | confirmar_nova_senha | mensagem                                                                                                               | popUp                                                                      |
            | nome inválido         | {home}    | hongwei685@uorak.com            | {home},89380819072 | {home},31203176653 | Teste11!    | Teste10!   | Teste10!             | Você não pode deixar esse campo em branco!                                                                             | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |
            | email inválido        | Lucas     | {home}                          | {home},86634533024 | {home},31203176653 | Teste11!    | Teste10!   | Teste10!             | Você não pode deixar esse campo em branco!                                                                             | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |
            | email já cadastrado   | Lucas     | cardosolucasrodrigues@gmail.com | {home},86634533024 | {home},31203176653 | Teste11!    | Teste10!   | Teste10!             | Verifique se o campo E-MAIL já está cadastrado no sistema                                                              | Verifique se o campo E-MAIL já está cadastrado no sistema                  |
            | cpf inválido          | Lucas     | hongwei685@uorak.com            | {home},00000000000 | {home},31203176653 | Teste11!    | Teste10!   | Teste10!             | CPF inválido!                                                                                                          | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |
            | cpf já cadastrado     | Lucas     | hongwei685@uorak.com            | {home},36578208844 | {home},31203176653 | Teste11!    | Teste10!   | Teste10!             | Verifique se o campo CPF já está cadastrado no sistema                                                                 | Verifique se o campo CPF já está cadastrado no sistema                     |
            | celular inválido      | Lucas     | hongwei685@uorak.com            | {home},89380819072 | {home},219999      | Teste11!    | Teste10!   | Teste10!             | Número inválido, por favor verifique o número e o DDD cadastrados                                                      | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |
            | celular já cadastrado | Lucas     | hongwei685@uorak.com            | {home},89380819072 | {home},61998156698 | Teste11!    | Teste10!   | Teste10!             | Verifique se o campo CELULAR já está cadastrado no sistema                                                             | Verifique se o campo CELULAR já está cadastrado no sistema                 |
            | senha atual inválida  | Lucas     | hongwei685@uorak.com            | {home},89380819072 | {home},31203176653 | kasdnd      | Teste11!   | Teste11!             | Sua senha atual está incorreta                                                                                         | Sua senha atual está incorreta                                             |
            | senha inválida        | Lucas     | hongwei685@uorak.com            | {home},89380819072 | {home},31203176653 | Teste11!    | Teste11    | Teste11              | A senha deve possuir no mínimo 8 dígitos e 3 dos 4 requisitos: Letra Maiúscula, minúscula, número e caractere especial | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |
            | senhas diferentes     | Lucas     | hongwei685@uorak.com            | {home},89380819072 | {home},31203176653 | Teste11!    | Teste10!   | Teste11!             | As senhas não correspondem                                                                                             | Erro ao salvar os dados do formulário. Corrija-os e tente salvar novamente |