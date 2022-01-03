# language: pt
Funcionalidade: Usuários

    Como Administrador ForPDi, desejo testar as funcionalidades de login, cadastrar usuário,
    bloquear usuario, desbloquear usuário, visualizar usuário e excluir usuário

Contexto: Login

Dado Que eu esteja logado 
E Entre em Usuários

#@focus
Cenario: Cadastrar Usuário
    Quando Eu cadastrar um Usuário
    Entao A mensagem 'Usuário cadastrado com sucesso..' aparece

Cenario: Cadastrar Usuário com e-mail já cadastrado
    Quando Eu cadastrar um Usuário
    Entao A mensagem 'Já foi cadastrado um usuário..' aparece

#@focus
Cenario: Bloquear Usuário
    Quando Eu bloquear um Usuário
    Entao A mensagem 'Usuário bloqueado com sucesso.' aparece

#@focus
Cenario: Desbloquear Usuário
    Quando Eu desbloquear um Usuário
    Entao A mensagem 'Usuário desbloqueado com sucesso.' aparece

#@focus
Cenario: Visualizar Usuário
    Quando Eu visualizar um Usuário
    Entao O título 'Editar Usuário' deve estar visível
#@focus
Cenario: Excluir Usuário
    Quando Eu excluir um Usuário
    Entao A mensagem 'Usuário removido com sucesso.' aparece






    
