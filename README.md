# TECP0002DWFEUTM2101

### Crear proyecto de react
npx create-react-app e1

## Buenas practicas
1. Crear carpetas componentes y css

2. Eliminar archivos
  
  - App.css
  - App.test.js
  - logo.svg

3. Mover **App.js** a carpeta componentes

4. Mover **index.css** a carpeta css

## Recomendaciones

- Componentes que solo tienen la tarea de imprimir y/o ejecutar funciones del padre se recomienda:

  const Boton = (props) => {}

- Componente que tienen la tarea de invocar y/o ejecutar otros componentes hijos se recomienda:

  - Tipo clase: Para componentes principales o maestros.
  - Tipo función con useState(): Para componentes secundarios.
