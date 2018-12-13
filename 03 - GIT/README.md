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

* Rastrear arquivo específico: ```git add NOME_DO_ARQUIVO```

* Rastrear todos: ```git add .``` ou ```git add -A```

### Enviar arquivos rastreados (Commit)

*Ao executar ```git status```, arquivos rastreados não enviados aparecerão em verde*

* Realizar commit

```git commit -m "MENSAGEM_DO_QUE_FOI_REALIZADO_NO_COMMIT"```

### Visualizar commits

* Executar ```git log``` para visualizar todos os commits.

### Reverter um commit

* Para reverter o commit e recuperar as alterações para o estado de rastreado:

        git reset --soft CÓDIGO_DO_COMMIT

* Para reverter o commit e recuperar as alterações para o estado de não rastreado:

        git reset --mixed CÓDIGO_DO_COMMIT

* Para reverter o commit eliminando todas as alterações do commit:

        git reset --hard CÓDIGO_DO_COMMIT

### Criando branchs

* Execute ```git branch NOME_DO_BRANCH``` para criar uma nova branch.

* Mudar de branch ```git checkout NOME_DO_BRANCH```

### Visualizar branchs

* Executar ```git branch``` para visualizar todos os branchs.

### Visualizar alterações realizadas

* Para visualizar as alterações realizadas nos arquivos:
        
        git diff

* Para visualizar arquivos que foram alterados:

        git diff --name-only

* Para visualizar as alterações realizadas em um arquivo específico:

        git diff NOME_DO_ARQUIVO.extensão

#### Reverter alterações em um arquivo.

* Execute ```git checkout HEAD -- NOME_DO_ARQUIVO.ext``` para reverter todas as alterações desse arquivo. *HEAD indica o branch atual*

## Repositório remoto

[Gerar chave SSH](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

#### Conectar ao remoto

* Criar repositório via linha de comando:

        echo "# NOME_REPOSITORIO" >> README.md
        git init
        git add README.md
        git commit -m "MENSAGEM_COMMIT"
        git remote add origin 
        git@github.com:NOME_USUARIO/NOME_REPOSITORIO.git
        git push -u origin master


* Enviar um repositório existente via linha de comando:

        git remote add origin 
        git@github.com:NOME_USUARIO/NOME_REPOSITORIO.git
        git push -u origin master

#### Enviar commits para o remoto

Após a realização dos commits locais, execute ```git push origin NOME_BRANCH``` para enviá-los ao repositório remoto.



