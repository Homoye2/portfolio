#!/bin/bash

echo "🔍 DIAGNOSTIC COMPLET DU DÉPLOIEMENT"
echo "===================================="
echo ""

# 1. Vérifier la branche gh-pages
echo "1️⃣ Vérification de la branche gh-pages..."
if git ls-remote --heads origin gh-pages > /dev/null 2>&1; then
    echo "   ✅ La branche gh-pages existe sur GitHub"
else
    echo "   ❌ La branche gh-pages n'existe PAS"
    echo "   → Exécutez: npm run deploy"
    exit 1
fi

# 2. Vérifier que le repository est public
echo ""
echo "2️⃣ Vérification du statut du repository..."
PRIVATE=$(curl -s https://api.github.com/repos/Homoye2/portfolio | grep '"private"' | grep -o 'true\|false')
if [ "$PRIVATE" = "false" ]; then
    echo "   ✅ Le repository est PUBLIC"
else
    echo "   ❌ Le repository est PRIVÉ"
    echo "   → GitHub Pages nécessite un repository public (ou un compte payant)"
fi

# 3. Vérifier la configuration Vite
echo ""
echo "3️⃣ Vérification de la configuration Vite..."
if grep -q "base: '/portfolio/'" vite.config.ts; then
    echo "   ✅ Configuration Vite correcte (base: '/portfolio/')"
else
    echo "   ❌ Configuration Vite incorrecte"
fi

# 4. Vérifier que le build fonctionne
echo ""
echo "4️⃣ Vérification du dossier dist..."
if [ -d "dist" ]; then
    echo "   ✅ Le dossier dist existe"
    echo "   📁 Contenu:"
    ls -lh dist/ | grep -E "index.html|assets" | awk '{print "      " $9}'
else
    echo "   ❌ Le dossier dist n'existe pas"
    echo "   → Exécutez: npm run build"
fi

# 5. Instructions finales
echo ""
echo "===================================="
echo "📋 PROCHAINES ÉTAPES:"
echo ""
echo "1. Allez sur: https://github.com/Homoye2/portfolio/settings/pages"
echo ""
echo "2. Configurez:"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo ""
echo "3. Cliquez sur 'Save'"
echo ""
echo "4. Attendez 5 minutes"
echo ""
echo "5. Votre site sera sur: https://Homoye2.github.io/portfolio/"
echo ""
echo "===================================="
echo ""
echo "🔗 Liens utiles:"
echo "   - Paramètres Pages: https://github.com/Homoye2/portfolio/settings/pages"
echo "   - Déploiements: https://github.com/Homoye2/portfolio/deployments"
echo "   - Votre site: https://Homoye2.github.io/portfolio/"
