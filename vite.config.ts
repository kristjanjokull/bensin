import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import commonjs from 'rollup-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      reactRefresh(),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
        namedExports: {
          'react-is': Object.keys(require('react-is')),
        },
      }),
    ]
})
