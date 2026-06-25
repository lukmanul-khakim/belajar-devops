FROM node:20-alpine
WORKDIR /app

RUN adduser -D appuser

COPY package*.json ./
RUN npm install

COPY . .
RUN chown -R appuser:appuser /app
USER appuser

EXPOSE 3001
CMD ["node", "app.js"]
