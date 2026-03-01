# 🚀 Déploiement Rapide sur GitHub Pages

## Étapes à suivre :

### 1. Configurer GitHub Pages

1. Allez sur : https://github.com/Homoye2/portfolio/settings/pages

2. Sous **"Source"**, sélectionnez : **GitHub Actions**

3. Sauvegardez

### 2. Pousser votre code

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Attendre le déploiement

- Allez sur : https://github.com/Homoye2/portfolio/actions
- Attendez que le workflow se termine (cercle vert ✓)
- Cela prend environ 2-3 minutes

### 4. Accéder à votre site

Votre portfolio sera disponible sur :
**https://Homoye2.github.io/portfolio/**

---

## ✅ Ce qui a été configuré :

- ✅ `vite.config.ts` : ajout de `base: '/portfolio/'`
- ✅ `.github/workflows/deploy.yml` : workflow automatique
- ✅ `package.json` : scripts de déploiement
- ✅ Images : utilisation d'URLs en ligne (Unsplash)

---

## 🔧 Commandes utiles :

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Tester le build localement
npm run preview
```

---

## ❌ Problèmes courants :

### Le site affiche une page blanche
- Vérifiez que `base: '/portfolio/'` est dans `vite.config.ts`
- Attendez 5 minutes après le push

### Erreur 404
- Vérifiez que GitHub Pages est activé
- Vérifiez que le workflow s'est exécuté sans erreur

### Les styles ne s'affichent pas
- Faites un hard refresh : `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
- Videz le cache du navigateur

---

## 📞 Besoin d'aide ?

Vérifiez les logs du workflow :
https://github.com/Homoye2/portfolio/actions
