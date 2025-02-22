# SPOTIFY-CLONE-API

## Requisitos e Instalação

1. **Instale [Node.js](https://nodejs.org/) (>= 12)** e **npm**.  
2. **Instale [PostgreSQL](https://www.postgresql.org/)** localmente (ou configure via Docker).

### Clone este repositório:

```bash
git clone https://github.com/SEU_USUARIO/spotify-clone-api.git
cd spotify-clone-api
Instale dependências:
bash
Copiar
Editar
npm install
(ou npm ci se preferir)

## Configuração das Variáveis de Ambiente
## Crie um arquivo .env na raiz do projeto (ou em back-end/) com as variáveis:

ini
Copiar
Editar
DB_USER=postgres
DB_PASS=senhabanco
DB_NAME=clone_spotify
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=algumasegredo
Se estiver usando Docker, ajuste o docker-compose.yml conforme necessário.

## Execução do Projeto
## Modo Dev (Nodemon)
## Para rodar o servidor e assistir mudanças em modo desenvolvimento:

bash
Copiar
Editar
npm run start:dev
O backend inicia em:
http://localhost:3000/
O frontend é servido pelo mesmo servidor (rota raiz “/” devolve index.html).
Abra http://localhost:3000 para ver o layout estilo Spotify.
Modo Produção
Opcionalmente, você pode usar:

bash
Copiar
Editar
npm start
Isso executa o node back-end/src/server.js normalmente (sem nodemon).

## Rotas Principais (Exemplos)
No backend, há rotas como:

POST /api/users/register: cadastro de novo usuário
POST /api/users/login: login, retornando token JWT
GET /api/musics: lista de músicas
POST /api/musics: cria música (se usuário for ARTIST)
GET /api/playlists: lista playlists
POST /api/playlists: cria playlist, etc.
Ajuste conforme a implementação que você criou em routes/.

Frontend (Clone Spotify)
O arquivo front-end/index.html contém:

Sidebar (Home, Search, Sua Biblioteca)
Seção principal com “Good morning”, “Shows you might like”, etc.
Playback bar fixa no rodapé (botões de controle, volume).
O style.css (em front-end/css/) define o layout estilo Spotify (gradiente roxo, sidebar escura, etc.).

O main.js faz as requisições fetch() para a API (por exemplo, GET /api/musics) e manipula o DOM para exibir músicas, playlists e permitir ações como “Criar música” (se role = ARTIST), “Curtir”, etc.

## Dica: Customize as imagens e placeholders para algo mais realista, ou mantenha via.placeholder.com para demonstrações rápidas.

## Como Contribuir
Fork este repositório.
Crie um branch com sua feature:
bash
Copiar
Editar
git checkout -b minha-feature
Commit suas alterações:
bash
Copiar
Editar
git commit -m 'Adiciona nova funcionalidade XYZ'
Push para seu fork:
bash
Copiar
Editar
git push origin minha-feature
Crie um Pull Request neste repositório.
Licença
Este projeto é livre para uso educacional. Sinta-se à vontade para adaptar e melhorar. Consulte LICENSE (se houver) ou dedique ao uso que preferir.
