#!/bin/bash

echo "🔍 Vérification avant déploiement..."
echo ""

# Vérifier que le CV existe dans public
if [ -f "public/CV_Mamadou_Kouma.pdf" ]; then
    echo "✅ CV trouvé dans public/"
else
    echo "❌ CV manquant dans public/"
    echo "   Exécutez : cp CV_Mamadou_Kouma.pdf public/"
    exit 1
fi

# Vérifier la configuration Vite
if grep -q "base: '/portfolio/'" vite.config.ts; then
    echo "✅ Configuration Vite correcte"
else
    echo "❌ Configuration Vite incorrecte"
    echo "   Ajoutez 'base: \"/portfolio/\"' dans vite.config.ts"
    exit 1
fi

# Vérifier que gh-pages est installé
if npm list gh-pages > /dev/null 2>&1; then
    echo "✅ gh-pages installé"
else
    echo "❌ gh-pages manquant"
    echo "   Exécutez : npm install --save-dev gh-pages"
    exit 1
fi

echo ""
echo "✅ Tout est prêt pour le déploiement !"
echo ""
echo "Commandes à exécuter :"
echo "  1. git add ."
echo "  2. git commit -m \"Ready for deployment\""
echo "  3. git push origin main"
echo "  4. npm run deploy"
echo ""
echo "Puis configurez GitHub Pages :"
echo "  https://github.com/Homoye2/portfolio/settings/pages"
echo "  Source: Deploy from a branch"
echo "  Branch: gh-pages / (root)"
