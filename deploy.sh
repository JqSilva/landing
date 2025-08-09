#!/bin/bash

# 🚨 Detener script si hay un error
set -e

# 1. Ir a la rama principal y construir
echo "🏗 Construyendo proyecto..."
git checkout master
npm run build

# 2. Crear carpeta temporal solo con dist/
TEMP_DIR=$(mktemp -d)
cp -r dist/* "$TEMP_DIR"

# 3. Cambiar a gh-pages y limpiar
echo "🧹 Limpiando gh-pages..."
git checkout gh-pages
git rm -rf . > /dev/null 2>&1 || true

# 4. Copiar SOLO el contenido de dist/
echo "📦 Copiando archivos de build..."
cp -r "$TEMP_DIR"/* .

# 5. Evitar node_modules y otras carpetas innecesarias
rm -rf node_modules
rm -rf src
rm -rf .astro

# 6. Commit y push
git add .
git commit -m "🚀 Deploy automático"
git push origin gh-pages

# 7. Volver a la rama principal
git checkout master

# 8. Borrar carpeta temporal
rm -rf "$TEMP_DIR"

echo "✅ Deploy completado sin basura."
