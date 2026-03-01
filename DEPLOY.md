# Guide de Déploiement sur GitHub Pages

## Méthode 1 : Déploiement Automatique avec GitHub Actions (Recommandé)

### Configuration GitHub

1. Allez sur votre repository GitHub : `https://github.com/Homoye2/portfolio`

2. Cliquez sur **Settings** (Paramètres)

3. Dans le menu de gauche, cliquez sur **Pages**

4. Sous **Source**, sélectionnez :
   - Source : **GitHub Actions**

5. Sauvegardez les modifications

### Déploiement

Maintenant, à chaque fois que vous poussez sur la branche `main`, le site sera automatiquement déployé !

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Le site sera disponible sur : `https://Homoye2.github.io/portfolio/`

---

## Méthode 2 : Déploiement Manuel avec gh-pages

Si vous préférez déployer manuellement :

```bash
# Build et déploiement en une commande
npm run deploy
```

### Configuration pour la méthode manuelle

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** > **Pages**
3. Sous **Source**, sélectionnez :
   - Source : **Deploy from a branch**
   - Branch : **gh-pages** / **(root)**
4. Sauvegardez

---

## Vérification

Après le déploiement, votre portfolio sera accessible sur :
**https://Homoye2.github.io/portfolio/**

## Résolution de problèmes

### Le site ne s'affiche pas correctement

1. Vérifiez que `base: '/portfolio/'` est bien dans `vite.config.ts`
2. Vérifiez que le nom du repository est bien `portfolio`
3. Attendez quelques minutes après le déploiement

### Erreur 404

- Assurez-vous que GitHub Pages est activé dans les paramètres
- Vérifiez que la branche `gh-pages` existe (pour la méthode manuelle)
- Vérifiez que le workflow GitHub Actions s'est exécuté sans erreur

### Les styles ne s'appliquent pas

- Vérifiez que tous les chemins dans le code sont relatifs
- Rebuild le projet : `npm run build`
- Redéployez

## Commandes utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Déploiement manuel
npm run deploy
```
