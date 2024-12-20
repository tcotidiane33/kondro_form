import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const app = express();
const port = process.env.PORT || 3000;

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
// Obtenir le répertoire du fichier actuel
const __dirname = path.dirname(__filename);

async function startServer() {
  if (process.env.NODE_ENV === 'development') {
    const vite = await createViteServer({
      server: { middlewareMode: 'html' },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // Utiliser Vite pour le build en production
    app.use(express.static(path.join(__dirname, 'dist')));
  }

  // Pour servir le fichier index.html en mode production
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
