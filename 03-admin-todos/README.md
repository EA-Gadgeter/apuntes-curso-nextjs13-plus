# Development
Pasos para levantar app en desarrollo

1. Levantar la base de datos, *Es necesario tener docker instalado*
```shell
docker compose up -d
```
2. Crear .env a partir del example
3. Remplazar las variables de entorno

# Prisma commands
```shell
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Producción

# Stage