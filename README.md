## Pré requisitos

- [Git](https://git-scm.com/downloads 'Download Git')
- [VSCode](https://code.visualstudio.com 'Download VSCode') (Ou seu editor de código favorito)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable 'Download Yarn')

## Baixando o projeto

Abra o terminal do seu sistema, copie o comando de `git clone` do [repositório do projeto](https://github.com/SmyrnaDevelop/front-smyrna), cole no terminal e rode o comando. Deve ser algo parecido com isso:

```bash
git clone https://github.com/SmyrnaDevelop/front-smyrna.git
```

Entre na pasta do projeto (front-smyrna por padrão):

```bash
cd front-smyrna
```

## Instalando o projeto localmente

Na pasta front-smyrna, você deverá rodar os seguintes comandos:

```bash
yarn
```

Após concluir a instalação da pasta node_modules, você irá executar:

```bash
yarn start
```
Este comando irá abrir em seu navegador o site http://localhost:3000 com o código montado pelo React.

## Atualizando o código

Para atualizar o código da maneira correta, recomendamos o uso do [Git Flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04 'Explicação do Git Flow'), que consiste, basicamente, em:

#### Criar uma nova branch a partir da develop chamada de feature/<nome_da_feature\>

```bash
git checkout develop
git checkout -b feature/nome_da_feature
```

#### Atualizar e enviar as mudanças para a branch origin feature/<nome_da_feature\>

```bash
git add .
git commit -m "<Mensagem para representar o commit>"
git push origin feature/<nome_da_feature>
```

#### Atualizar a branch develop e origin develop com as novas mudanças

```bash
git checkout develop
git merge feature/<nome_da_feature>
git push origin develop
```

#### Criar uma release a partir da branch develop

```bash
git checkout -b release/v1.0.X
git push origin release/v1.0.X
```

#### Criar uma tag referente a nova release

```bash
git tag -a v1.0.X -m "Mensagem representando a nova tag"
git push origin v1.0.X
```