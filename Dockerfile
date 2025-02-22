# Usa uma imagem base do Node.js (ex: 16-alpine, 18-alpine etc.)
FROM node:18-alpine

# Cria e define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e package-lock.json (se existir) para o contêiner
COPY package*.json ./

# Instala as dependências (node_modules)
RUN npm install

# Copia o restante do código para dentro do contêiner
COPY . .

# Exponde a porta em que sua aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
# Utilize o script que você definiu no package.json; por exemplo "start" ou "dev"
CMD ["npm", "start"]
