import { defineConfig } from 'vite';

export default defineConfig({
  base: '', // Base vacía para rutas absolutas gestionadas por el servidor
  build: {
    outDir: 'dist', // Carpeta de salida de los archivos
    assetsDir: 'assets', // Carpeta de los assets dentro de dist
  },
});
