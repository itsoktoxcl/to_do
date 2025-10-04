FROM arm64v8/node:18

WORKDIR /app

# Update npm
RUN npm install -g npm@latest

COPY package*.json ./

# Install with legacy peer deps if needed
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
