# Development
Pasos para levantar app en desarrollo

1. Levantar la base de datos, *Es necesario tener docker instalado*
```shell
docker compose up -d
```
1. Crear .env a partir del example
2. Remplazar las variables de entorno
3. Ejecutar el comando ```npm install```
4. Ejecutar comandos de prisma:
```shell
npx prisma migrate dev # Crear las tablas en la base de datos
npx prisma generate # Genere el cliente de prisma
```
5. Ejecutar el comando ```npm run dev```
6. Hacer petición a al seed para [generar](http://localhost:3000/api/seed) información de prueba en la base de datos

# Prisma commands
```shell
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Producción

# Stage