# 🚀 Déploiement Simple sur GitHub Pages

## Étape 1 : Pousser votre code

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Étape 2 : Déployer

```bash
npm run deploy
```

Cette commande va :
1. Builder votre projet
2. Créer une branche `gh-pages`
3. Pousser le build sur cette branche

## Étape 3 : Configurer GitHub Pages

1. Allez sur : https://github.com/Homoye2/portfolio/settings/pages

2. Sous **"Source"**, sélectionnez :
   - **Deploy from a branch**
   - Branch : **gh-pages**
   - Folder : **/ (root)**

3. Cliquez sur **Save**

## Étape 4 : Attendre

Attendez 2-3 minutes, puis votre site sera disponible sur :
**https://Homoye2.github.io/portfolio/**

---

## 🔄 Pour mettre à jour votre site

À chaque fois que vous voulez déployer des changements :

```bash
# 1. Commiter vos changements
git add .
git commit -m "Update portfolio"
git push origin main

# 2. Déployer
npm run deploy
```

---

## ✅ C'est tout !

Pas besoin de workflow GitHub Actions, tout est géré par `gh-pages`.
