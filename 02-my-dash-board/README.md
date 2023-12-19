# Los server componentes solo se renderizan una vez en el servidor

## Archivo especial: error.tsx / .jsx
En una carpeta podemos crear este tipo de archivo, de tal manera que cuando ocurre cualquier tipo de error que no permita mostrar el contenido de siempre, mostrara esta pantalla de error. Debido a que esto ya ocurre en tiempo de ejecución y hace uso de useEffect, es necesario que tenga el "use client" hasta arriba del archivo. Checar el error.tsx en la carpeta de pokemon para más detalles.

## Componente Link
Desemboca en un <a>. Se hace prefetch de la página desde antes, por lo que al darle click la página carga casi de inmediato, dando la ilusión de que estamos en una SPA, cuando no es así.

## Componentes de cliente
Hay ciertas funciones de Next como usePathname o
o el clásico useState, que requieren poner al inicio al archivo "use client". En resumen cualquier mínima interactividad va a requerir de "use client"

## Componentes de cliente y metadata
Si hacemos TODA UNA PÁGINA con la instrucción "use client" al inicio, hara que la metadata que genermos no se aplique a la página. Por lo que necesario extraer en componentes esas partes interactivas con todo y el "use client"

## Fetching de datos
### En Nextjs, el API de fetch esta trucada
Recordamos que todo en Next por defecto se ejecuta del lado del sevidor, por lo que que es muy fácil cargar información haciendo la función del componente o página asíncrona, Ej:
```ts
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
Gracias al atributo priority y el componente Image de Next, podemos indicar que si las imágenes son de proridad o no, es decir, se cargan inmediatamente al entrar a la página

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
