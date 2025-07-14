import { defineConfig } from 'vite'
import path from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // your main export file
      name: 'snack-alert',
      fileName: (format) => `snack-alert.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // don't bundle these
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    })
  ],
})
