#!/bin/bash

# Directorio de imágenes
img_dir="img"

# Lista de archivos de imagen en el directorio
img_files=($img_dir/*)

# Comenzar a construir el código HTML
html_code="<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Tienda de Camisetas</title>
  <link rel='stylesheet' href='grid.css'>
  <style>
    .product img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body class='grid-container'>
  <header class='header'>HEADER</header>
  <nav class='navbar'>NAVBAR</nav>
  <aside class='sidebar'>
    <h2>Filtros</h2>
    <div class='filter'>
      <label for='category'>Categoría:</label>
      <select id='category'>
        <option value='todos'>Todos</option>
        <option value='manga-corta'>Manga Corta</option>
        <option value='manga-larga'>Manga Larga</option>
      </select>
    </div>
    <div class='filter'>
      <label for='price'>Precio:</label>
      <select id='price'>
        <option value='todos'>Todos</option>
        <option value='menos-de-20'>$0 - $19.99</option>
        <option value='20-50'>$20 - $49.99</option>
        <option value='50-o-mas'>Más de $50</option>
      </select>
    </div>
  </aside>
  <article class='main'>
    <h1>Tienda de Camisetas</h1>
    <div class='product-list'>
      <!-- Aquí se mostrarán las camisetas filtradas -->
    </div>
  </article>
  <footer class='footer'>FOOTER</footer>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const categorySelect = document.getElementById('category');
      const priceSelect = document.getElementById('price');
      const productList = document.querySelector('.product-list');

      // Array de ejemplos de camisetas con imágenes
      const camisetas = ["

# Iterar sobre los archivos de imagen y agregarlos al código HTML
for img_file in "${img_files[@]}"; do
  img_name=$(basename "$img_file")
  html_code+="{
        nombre: '$img_name',
        categoria: 'todos',
        precio: 9.99,
        imagen: '$img_name'
      },"
done

# Remover la coma del último elemento en la lista
html_code="${html_code%,}"

# Completar el código HTML
html_code+="];

      // Función para mostrar las camisetas filtradas
      function mostrarCamisetas() {
        const categoriaSeleccionada = categorySelect.value;
        const precioSeleccionado = priceSelect.value;

        const camisetasFiltradas = camisetas.filter((camiseta) => {
          if (categoriaSeleccionada === 'todos' || camiseta.categoria === categoriaSeleccionada) {
            if (precioSeleccionado === 'todos') {
              return true;
            } else if (precioSeleccionado === 'menos-de-20' && camiseta.precio < 20) {
              return true;
            } else if (precioSeleccionado === '20-50' && camiseta.precio >= 20 && camiseta.precio <= 50) {
              return true;
            } else if (precioSeleccionado === '50-o-mas' && camiseta.precio > 50) {
              return true;
            }
          }
          return false;
        });

        productList.innerHTML = '';

        if (camisetasFiltradas.length === 0) {
          productList.innerHTML = '<p>No se encontraron camisetas que coincidan con los filtros seleccionados.</p>';
        } else {
          camisetasFiltradas.forEach((camiseta) => {
            const producto = document.createElement('div');
            producto.classList.add('product');
            producto.innerHTML = \`
              <h3>\${camiseta.nombre}</h3>
              <p>Categoría: \${camiseta.categoria}</p>
              <p>Precio: $<span>\${camiseta.precio.toFixed(2)}</span></p>
              <img src="\${camiseta.imagen}" alt="\${camiseta.nombre}" />
            \`;
            productList.appendChild(producto);
          });
        }
      }

      categorySelect.addEventListener('change', mostrarCamisetas);
      priceSelect.addEventListener('change', mostrarCamisetas);

      // Mostrar todas las camisetas al cargar la página
      mostrarCamisetas();
    });
  </script>
</body>
</html>"

# Guardar el código HTML en un archivo
echo "$html_code" > grid.html

# Mensaje de confirmación
echo "Se ha generado el archivo grid.html con las imágenes de la carpeta img."
