# Bruker Node.js versjon 12 som base image 
FROM node:12

# Setter arbeidskatalogen i containeren til /app (workdir er som cd. ) 
WORKDIR /app

# Kopierer package.json og package-lock.json til arbeidskatalogen i containeren
COPY package*.json ./

# Kjører npm install for å installere avhengigheter definert i package.json
RUN npm install

# Kopierer alle filene fra den lokale katalogen til arbeidskatalogen i containeren
COPY . .

# Setter miljøvariabelen PORT til 8080
ENV PORT=8080

# Informerer Docker om at containeren lytter på port 8080
EXPOSE 8080

# Setter kommandoen som skal kjøres når containeren starter. Starter Node.js-applikasjonen.
CMD [ "npm", "start" ]
