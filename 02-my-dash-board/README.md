# Los server componentes solo se renderizan una vez en el servidor

## Archivo especial: error.tsx / .jsx
En una carpeta podemos crear este tipo de archivo, de tal manera que cuando ocurre cualquier tipo de error que no permita mostrar el contenido de siempre, mostrara esta pantalla de error. Debido a que esto ya ocurre en tiempo de ejecución y hace uso de useEffect, es necesario que tenga el "use client" hasta arriba del archivo. Checar el error.tsx en la carpeta de pokemon para más detalles.

## Archivo especial: not-found.tsx / .jsx
Página que se mostrara cuando cuando el recurso encontado no este disponible. Si creamos unos de estos en el ROOT DE APP, remplazara el 404 por defecto de Next. Podemos crear un archivo not-found para cada página que queramos, en proyecto por ejemplo, para la página del pokemon individual.

Un breve ejemplo, donde si no se llega a obtener un pokemon, mandamos al usuario a una página 404 mediante una función que trae Next.
```js
const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache"
    }).then(res => res.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
};
```

## Componente Link
Desemboca en un anchor nativo de html, por lo que lo podemos estilar con tailwind o mediante clases. Se hace prefetch de la página desde antes, por lo que al darle click la página carga casi de inmediato, dando la ilusión de que estamos en una SPA, cuando no es así.

## Componentes de cliente
Hay ciertas funciones de Next como usePathname o
o el clásico useState, que requieren poner al inicio al archivo "use client". En resumen cualquier mínima interactividad que haga uso de JavaScript va a requerir de "use client"

## Metada
### Componentes de cliente junto con la metadata
Si hacemos TODA UNA PÁGINA con la instrucción "use client" al inicio, hara que la metadata que genermos no se aplique a la página. Por lo que necesario extraer en componentes esas partes interactivas con todo y el "use client"

### Metadata dinámica
Si como con los pokemones, queremos generar metadata especial o personalizada para cada uno de los pokemones, tenemos que crear una función que se tiene que exportar y llamar de manera exacta, de igual manera ES BUENA IDEA crear metada por defecto en caso de que falle la carga de la info:
```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemonById(params.id);
  
    return {
      title: `#${id} - ${name}`,
      description: `Página del pokemon ${name}`
    };
  } catch (error) {
    return {
      title: "Página del pokemon",
      description: "Descripción de un pokemon"
    };
  }
  
}
```

## Fetching de datos
### En Nextjs, el API de fetch esta trucada
### Por defecto hacemos server side rendering mediante estas funciones
Recordamos que todo en Next por defecto se ejecuta del lado del sevidor, por lo que que es muy fácil cargar información haciendo la función del componente o página asíncrona, Ej:
```tsx
const getAllPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`)
    .then(res => res.json());

  const pokemonArray = data.results.map(pokemon => (
    { 
      name: pokemon.name, 
      id: pokemon.url.split("/").at(-2)!
    }
  ));
  
  return pokemonArray;
};

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listados de Pokemons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons} />      
    </div> 
  );
}
```

## Imágenes bajo demanda con Image
Gracias al atributo priority y el componente Image de Next, podemos indicar si las imágenes son de proridad o no, es decir, se cargan inmediatamente al entrar a la página

Sí lo indicamos como falso, las imágenes CARGARAN BAJO DEMANDA, es decir, hasta que el usuario de verdad las necesite, por ejemplo, cuando aparezcan en el viewport.
```tsx
<Image 
  src={`url`}
  alt={name}
  width={100}
  height={100}
  priority={false}
/>
```
