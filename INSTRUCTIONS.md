# 📋 Instructions de Déploiement

## Commandes à exécuter maintenant :

```bash
# 1. Pousser les changements (sans le workflow)
git add .
git commit -m "Remove workflow, use manual deployment"
git push origin main

# 2. Déployer sur GitHub Pages
npm run deploy
```

## Après le déploiement :

1. Allez sur : https://github.com/Homoye2/portfolio/settings/pages

2. Configurez :
   - Source : **Deploy from a branch**
   - Branch : **gh-pages**
   - Folder : **/ (root)**

3. Sauvegardez

4. Attendez 2-3 minutes

5. Votre site sera sur : **https://Homoye2.github.io/portfolio/**

---

## ✅ Avantages de cette méthode :

- ✅ Pas besoin de permissions spéciales sur GitHub
- ✅ Déploiement simple avec une commande
- ✅ Fonctionne immédiatement
- ✅ Pas de configuration complexe

---

## 🔄 Mises à jour futures :

```bash
git add .
git commit -m "Update"
git push origin main
npm run deploy
```

C'est tout ! 🎉
