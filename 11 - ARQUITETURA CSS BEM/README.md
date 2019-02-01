# Arquitetura de CSS (BEM)
*Blocos-Elementos-Modificadores*

[BEM](http://getbem.com/introduction/)

-------------

## Diretrizes

### Blocos

* Não deve conter dependência hierarquia
  * ![x](https://user-images.githubusercontent.com/23413093/52103400-a1d29780-25cc-11e9-80de-b4d8bd3c931c.png)
  `div .bloco` ou `.container .galeria .bloco`

  * ![v](https://user-images.githubusercontent.com/23413093/52103436-c4fd4700-25cc-11e9-8400-09ec923e361e.png)
  `.bloco`

* Usar apenas CLASS
  * ![x](https://user-images.githubusercontent.com/23413093/52103400-a1d29780-25cc-11e9-80de-b4d8bd3c931c.png)
  `div` ou `#nome` ou `input`

  * ![v](https://user-images.githubusercontent.com/23413093/52103436-c4fd4700-25cc-11e9-8400-09ec923e361e.png)
  `.bloco`

### Elements

* O nome sempre é precedido do BLOCK + __
  * Para um bloco `.formulario`:
    * ![x](https://user-images.githubusercontent.com/23413093/52103400-a1d29780-25cc-11e9-80de-b4d8bd3c931c.png)
    `div .formulario__botao` ou `.formulario .formulario__botao` ou `.botao`
    * ![v](https://user-images.githubusercontent.com/23413093/52103436-c4fd4700-25cc-11e9-8400-09ec923e361e.png)
    `.formulario__botao` *indica que este é um elemento (botao) do bloco formulario.*

### Modifier

* Possui o nome do bloco/elemento-> -- -> nome do modificador
  * `bloco--nome-do-modificador`





