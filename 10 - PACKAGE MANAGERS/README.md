# Package Managers

## NPM

### Instalação

* Instalar o [node](https://nodejs.org/en/).
  
  *verificar versão `node -v` e `npm -v`*

----------
### Iniciar novo pacote

* Executar `npm init`.
* Preencher questionário no terminal 
  
  1. package name:
  2. version: (1.0.0) *default*
  3. description:
  4. entry point: (index.js) *default*
  5. test command:
  6. git repository:
  7. keywords:
  8. author:
  9. license: (ISC) *default*

* Criar **index.js** em um repositório src.

----------
#### Instalar um pacote

* Executar `npm install NOME_DA_LIB`.

    *Alias para instalação de pacotes* `i`, `add`.

* Instalação de versões específicas `npm install NOME_DA_LIB@VERSAO`

----------
#### Atualizar um pacote

* Atualizar todas as dependências do projeto `npm update`.
* Atualizar uma de dependência específica `npm update NOME_DA_LIB`.

----------
#### Remover um pacote

* Executar `npm unistall NOME_DA_LIB` 

    *Alias para remover pacotes* `un`, `unlink`, `remove`, `rm`, `r`.

----------
## YARN

### Instalação

* Instalar o [Yarn](https://yarnpkg.com/pt-BR/).

----------
### Iniciar novo pacote

* Executar `yarn init`.
* Preencher questionário no terminal 
  
  1. question name (02_yarn):
  2. question version (1.0.0):
  3. question description:
  4. question entry point (index.js):
  5. question repository url:
  6. question author:
  7. question license (MIT):
  8. question private:

----------
*Operações/comandos de gerenciamento de pacotes são semelhantes ao do npm*






