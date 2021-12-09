# React Native template

Este projeto foi criado com a intenção de criar um template configurado e pronto para uso de qualquer aplicação. Ele vem com TypeScript, duas bibliotecas muito utilizadas no React-Native e uma lista de recomendações de outras bibliotecas.

## O que foi feito?

- Foi resolvido o problema que ocorre quando iniciamos um novo projeto e o emulador não gera nada em tela quando abrimos o app, apenas uma tela branca. Para resolver esse problema foi preciso entrar em `android/app/src/main` e criar uma pasta chamada assets. Logo em seguida foi executando o comando abaixo na raiz do projeto.

```bash
$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

## Pré-requisitos

Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Android Studio](https://developer.android.com/studio),
opcionalmente pode-se instalar o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes. Caso ainda não possua o ambiente de desenvolvimento configurado, siga o passo-a-passo para a configuração, [Ambiente React Native](https://react-native.rocketseat.dev/).

## Extensões do VSCode

Para o desenvolvimento desse projeto é altamente recomendado que utilize o VSCode e as extensões abaixo:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [GitLens (opcional)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Color Highlight (opcional)](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

## Primeiros passos

```bash
# Clone o projeto
$ git clone https://github.com/Luanfv/template-react-native.git

# Entre no projeto
$ cd template-react-native

# Instale as dependências
$ yarn
ou
$ npm install
```

## Principais comandos

```bash
# Inicia o servidor de desenvolvimento
$ yarn start
ou
$ npx react-native start

# Inicia a aplicação
$ yarn android
ou
$ npx react-native run-android

# Responsável por varrer todos os arquivos da aplicação, aplicando correção de indentação.
$ yarn fix:code
ou
$ npx prettier --write **/*.{js,jsx,ts,tsx,json} && npx prettier --write *.{js,jsx,ts,tsx,json}
```

## Padrão de commit

1. Organize o código:

```bash
# Roda o eslint
$ yarn fix:prettier
```

2. Selecione suas alterações
3. Realize o commit:

```bash
# Inicia o commit
$ yarn commit
```

## Deploy

### Android - Gerando APK e/ou AAB

- Crie ou adicione a chave do aplicativo na pasta `android/app`
- Configure as informações da sua chave no arquivo `gradle.properties` em `android/gradle.properties`
- Rode o(s) comando(s) abaixo:

```bash
# Gerar APK
$ yarn apk
ou
$ cd android && ./gradlew assembleRelease && cd ..

# Gerar AAB
$ yarn aab
ou
$ cd android && ./gradlew bundleRelease && cd ..
```

Obs: Se não tiver experiência em gerar chaves ou controle de versão no Android, siga o passo-a-passo para entender mais, [Gerando aab e apk para Android no React Native](https://www.notion.so/Gerando-aab-apk-para-android-no-React-Native-1703c2d965bc4354ade328ae146d176e).

## Dicas de bibliotecas

- [react-navigation](https://reactnavigation.org/) - realiza navegação dentro do app.
- [axios](https://github.com/axios/axios) - realiza chamadas à API.
- [react-query](https://react-query.tanstack.com/) - utiliza cache nas chamadas à API.
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) - guarda valores no cache do celular.
- [react-hook-form](https://react-hook-form.com/) - controla formulários.
- [yup](https://github.com/jquense/yup) - válida formulários.
- [react-native-modal](https://github.com/react-native-modal/react-native-modal) - cria modals.
