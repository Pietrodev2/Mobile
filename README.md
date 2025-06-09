# Mobile
I♡Animes - React Native App

Bem-vindo ao repositório do aplicativo I♡Animes, um app React Native para explorar animes, visualizar sinopses e favoritar seus animes preferidos usando autenticação Firebase e dados da API Jikan.

🚀 Funcionalidades

Listagem de animes com imagens e informações

Modal com detalhes completos do anime

Sistema de favoritos vinculado à conta do usuário

Autenticação de usuário via Firebase

Menu de navegação inferior com atalhos

⚙️ Instalação


1. Instale as dependências

 npm install

2. Configure o Firebase

Crie um projeto no Firebase Console

Ative a autenticação com email/senha

Ative o Firestore Database

Copie as credenciais do Firebase SDK para o arquivo firebaseConfig.js:

export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

3. Rode o projeto localmente

npx expo start

Ou use o comando abaixo para um emulador Android/iOS:

npx expo run:android
npx expo run:ios

🌐 API Utilizada

Este app consome dados da Jikan API (MyAnimeList Unofficial API).

⚡ Tecnologias Usadas

React Native com Expo

Firebase Auth & Firestore

Jikan API

React Navigation

🚪 Telas

Home

Favoritos

Pesquisa

Perfil do Usuário

Edição de Perfil