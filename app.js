const app = Vue.createApp({
  data() {
    return {
      selectedCategory: 'todos',
      selectedPrice: 'todos',
      camisetas: [
        { nombre: "Camiseta Manga Corta 1", categoria: "manga-corta", precio: 15.99, imagen: "./img/photo_1.jpg" },
        { nombre: "Camiseta Manga Corta 2", categoria: "manga-corta", precio: 22.99, imagen: "./img/photo_10.jpg" },
        { nombre: "Camiseta Manga Larga 1", categoria: "manga-larga", precio: 29.99, imagen: "./img/photo_11.jpg" },
        { nombre: "Camiseta Manga Larga 2", categoria: "manga-larga", precio: 45.99, imagen: "./img/photo_15.jpg" },
      ],
    };
  },
  computed: {
    filteredCamisetas() {
      return this.camisetas.filter(camiseta => {
        if (this.selectedCategory === 'todos' || camiseta.categoria === this.selectedCategory) {
          if (this.selectedPrice === 'todos') {
            return true;
          } else if (this.selectedPrice === 'menos-de-20' && camiseta.precio < 20) {
            return true;
          } else if (this.selectedPrice === '20-50' && camiseta.precio >= 20 && camiseta.precio <= 50) {
            return true;
          } else if (this.selectedPrice === '50-o-mas' && camiseta.precio > 50) {
            return true;
          }
        }
        return false;
      });
    },
  },
});

app.mount('#app');
