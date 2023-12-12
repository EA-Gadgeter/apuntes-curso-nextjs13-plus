
# Apuntes proyecto 01

## Sección 2

### Por defecto TODO es un server component
El server genera la pagina, y al final la regresa
al navegador, esto significa que nuestro pagina, puede llegar
a FUNCIONAR en gran medida SIN JS, incluso si hacemos una expresion si queremos resolver cosas como un {1 + 1}
Eso si, si llegaramos a necesitar interactividad, ahi si se tiene que cargar JS
Como se ejecutan en el server por defecto, podemos incluso hacer peticiones asíncronas

### Archivos especiales y como interactuan con el sistema de rutas
1. page.tsx: Cualquier archivo tsx o jsx con ese nombre será una página, si lo creamos dentro de una carperta esa sera la ruta:
contact/page.tsx -> localhost:3000/contact
2. Cualquier carpeta sera tratada como una ruta extra, si queremos que esa carpeta NO sea PARTE de la RUTA, la ponemos
entre parentesis: (general)/about/page.tsx -> localhost:3000/about
3. layout.tsx: Si bien tenemos un RootLayout, podemos crear uno por ruta de la app. EJEMPLO: Si queremos un layout que SOLO APLIQUE para ciertas paginas menos el home, hariamos algo así con una carpeta que no forma parte del routing, de esta forma ese layout aplica solo para esas páginas y no afecta al home (si agregaramos al al RootLayout, se va a anidando con los demas):
- &ensp;&ensp; (noruta)/layout.tsx
- &ensp;&ensp; (noruta)/contact/page.tsx
- &ensp;&ensp; (noruta)/pricing/page.tsx
- &ensp;&ensp; (noruta)/about/page.tsx

### Metadata - metatags
Si queremos ingresar metatags globales, basta con agregarlo en el RootLayout
Si queremos sobrescribir o agregar mas meta tags, lo podemos hacer de manera individual en cada pagina page.tsx o .jsx
```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Esta es la pagina de pricing",
  keywords: ["page", "pricing", "emiliano", "acevedo", "gadgeter"]
};
```


