# GIT: Versionamento de código

## Configurações GIT

* Usuário

        git config --global user.name "USERNAME"

* E-mail

        git config --global user.email "EMAIL"

### Visualizar configurações

* Nome ou E-mail

        git config user.name
        git config user.email

## Iniciando um repositório GIT

* Executar seguinte comando no repositório que será versionado:

        git init

O comando ```git status``` exibe as modificações realizadas.

*Arquivos exibidos que não estão monitorados pelo git ficam em vermelho.*

### Rastrear arquivos

* Rastrear individualmente: ```git add NOME_DO_ARQUIVO```

* Rastrear todos: ```git add .``` ou ```git add -A```

### Enviar arquivos rastreados (Commit)

*Ao executar ```git status```, arquivos rastreados não enviados aparecerão em verde*

* Realizar commit

```git commit -m "MENSAGEM DO QUE FOI REALIZADO NO COMMIT"```

### Visualizar commits

* Executar ```git log``` para visualizar todos os commits.