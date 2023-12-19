# Los server componentes solo se renderizan una vez en el servidor

## Componentes de cliente
Hay ciertas funciones de Next como usePathname o
o el clásico useState, que requieren poner al inicio al archivo "use client". En resumen cualquier mínima interactividad va a requerir de "use client"

## Componentes de cliente y metadata
Si hacemos TODA UNA PÁGINA con la instrucción "use client" al inicio, hara que la metadata que genermos no se aplique a la página. Por lo que necesario extraer en componentes esas partes interactivas con todo y el "use client"
