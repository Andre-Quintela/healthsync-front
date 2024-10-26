# Usando uma imagem base do Node.js para criar a aplicação
FROM node:18 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de dependência para o contêiner
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Gera uma versão otimizada da aplicação para produção
RUN npm run build

# Usando uma imagem leve do Nginx para servir a aplicação
FROM nginx:alpine

# Copia os arquivos gerados na build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta que o Nginx vai usar
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
