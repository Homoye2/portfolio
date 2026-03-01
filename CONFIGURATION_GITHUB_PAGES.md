# 📸 Configuration GitHub Pages - Guide Visuel

## Étape par étape avec captures

### 1. Ouvrir les paramètres
Allez sur : https://github.com/Homoye2/portfolio/settings/pages

### 2. Ce que vous devriez voir

```
GitHub Pages
────────────────────────────────────────────

Build and deployment
────────────────────────────────────────────

Source
┌─────────────────────────────────────┐
│ Deploy from a branch            ▼   │  ← Sélectionnez ceci
└─────────────────────────────────────┘

Branch
┌──────────────┐  ┌──────────────┐
│ gh-pages  ▼  │  │ / (root)  ▼  │  ← Sélectionnez ces deux options
└──────────────┘  └──────────────┘

[Save]  ← Cliquez ici
```

### 3. Après avoir cliqué sur Save

Vous verrez un message :
```
✓ Your site is ready to be published at https://Homoye2.github.io/portfolio/
```

Ou :
```
✓ Your site is live at https://Homoye2.github.io/portfolio/
```

### 4. Attendre le déploiement

- Rafraîchissez la page après 2-3 minutes
- Le message passera de "ready to be published" à "is live"

### 5. Tester votre site

Ouvrez : https://Homoye2.github.io/portfolio/

---

## ❌ Si vous voyez toujours 404

### Vérification 1 : La branche gh-pages existe-t-elle ?
```bash
git ls-remote --heads origin gh-pages
```
✅ Si vous voyez une ligne avec "refs/heads/gh-pages", c'est bon

### Vérification 2 : GitHub Pages est-il activé ?
- Allez sur https://github.com/Homoye2/portfolio/settings/pages
- Vérifiez que "gh-pages" est sélectionné
- Vérifiez qu'il y a un message "Your site is live at..."

### Vérification 3 : Attendez-vous assez longtemps ?
- Le premier déploiement peut prendre jusqu'à 10 minutes
- Essayez de vider le cache de votre navigateur (Ctrl+Shift+R ou Cmd+Shift+R)

### Vérification 4 : Le repository est-il public ?
- Allez sur https://github.com/Homoye2/portfolio/settings
- Vérifiez que le repository est "Public"
- Si c'est "Private", GitHub Pages nécessite un compte payant

---

## 🔄 Redéployer si nécessaire

Si rien ne fonctionne, redéployez :
```bash
npm run build
npx gh-pages -d dist
```

Puis attendez 5 minutes et réessayez.

---

## 📞 Vérifier le statut du déploiement

Allez sur : https://github.com/Homoye2/portfolio/deployments

Vous devriez voir :
- Environment: github-pages
- Status: Active (vert) ou In progress (jaune)

Si c'est "Failed" (rouge), cliquez dessus pour voir l'erreur.
