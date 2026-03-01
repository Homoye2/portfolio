# 🚀 Déployer MAINTENANT sur GitHub Pages

## Étape 1 : Commiter et pousser les changements

```bash
git add .
git commit -m "Add CV and fix deployment"
git push origin main
```

## Étape 2 : Déployer avec gh-pages

```bash
npm run deploy
```

Cette commande va :
- Builder votre projet
- Créer/mettre à jour la branche `gh-pages`
- Pousser le build sur GitHub

## Étape 3 : Configurer GitHub Pages (IMPORTANT !)

1. Allez sur : **https://github.com/Homoye2/portfolio/settings/pages**

2. Sous **"Build and deployment"** :
   - **Source** : Sélectionnez **"Deploy from a branch"**
   - **Branch** : Sélectionnez **"gh-pages"** et **"/ (root)"**
   - Cliquez sur **"Save"**

3. Attendez 2-3 minutes

## Étape 4 : Vérifier le déploiement

Votre site sera disponible sur :
**https://Homoye2.github.io/portfolio/**

---

## ✅ Ce qui a été corrigé :

- ✅ CV déplacé dans le dossier `public/`
- ✅ Lien du CV corrigé pour GitHub Pages : `/portfolio/CV_Mamadou_Kouma.pdf`
- ✅ Configuration Vite avec `base: '/portfolio/'`

---

## 🔍 Vérifier que ça fonctionne :

Après le déploiement, testez :
- Page d'accueil : https://Homoye2.github.io/portfolio/
- CV : https://Homoye2.github.io/portfolio/CV_Mamadou_Kouma.pdf

---

## ❌ Si vous voyez toujours 404 :

1. Vérifiez que la branche `gh-pages` existe :
   ```bash
   git branch -a
   ```
   Vous devriez voir `remotes/origin/gh-pages`

2. Vérifiez les paramètres GitHub Pages :
   - Allez sur https://github.com/Homoye2/portfolio/settings/pages
   - Assurez-vous que "gh-pages" est sélectionné

3. Attendez 5 minutes et rafraîchissez la page

---

## 🔄 Pour les mises à jour futures :

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

Attendez 2-3 minutes et votre site sera mis à jour !
