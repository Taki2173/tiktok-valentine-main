import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Define rutas relativas en producción
  build: {
    outDir: 'dist', // Carpeta donde se generarán los archivos de producción
    assetsDir: 'assets', // Carpeta donde se guardarán los assets como imágenes, CSS, JS
    sourcemap: true, // Activa el sourcemap para depurar errores en producción
  },
  server: {
    open: true, // Abre el navegador automáticamente al ejecutar el servidor de desarrollo
  },
});
