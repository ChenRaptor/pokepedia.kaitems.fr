# Etape pour démarrer le projet en local

Etape 1 : Cloner le projet

```bash
git clone https://github.com/ChenRaptor/pokepedia.kaitems.fr.git pokepedia
```

Etape 2 : Aller dans le dossier du projet

```bash
cd pokepedia
```

Etape 3 : Installer les dépendances

```bash
npm install
```

Etape 4 : Builder le projet

```bash
npm run build
```

Etape 5 : Lancer le projet sur le port 3000

```bash
npm run start -- --port 3000
```

Etape 6 : Ouvrir votre navigateur et aller à l'adresse suivante **http://localhost:3000**

Etape 7 : Enjoy !


Infos supplémentaires :

Le coté backend de l'application est hébergé à cette addresse : https://pkdxapiprod.kaitems.fr et ce front local utilisera cette api, il est donc nécessaire d'avoir une connexion internet...

Si vous souhaitez avoir la version front hébergé, vous pouvez vous rendre à cette addresse : https://pokepedia.kaitems.fr

A propos de cette version du front :

L'interface pour la modification d'un pokémon est faite mais pas la partie backend. Par conséquant cette feature n'est pas fonctionnelle.

Le front est responsive, il est donc possible de l'utiliser sur mobile.

Actuellement sur l'application on peux donc:

- Voir la liste des pokémons
- Rechercher un pokémon (trier par nom, type primaire, type secondaire)
- Modifier le nombre de résulat envoyé par la recherche de pokemon et naviguez entre les pages de résultats
- Voir les détails d'un pokémon (régions, nom, type primaire, type secondaire)
- Supprimer un pokémon (DOIT ETRE AUTHENTIFIE ET ETRE ADMIN)
- Créer un pokémon (DOIT ETRE AUTHENTIFIE)
- Créer un Dresseur (DOIT ETRE AUTHENTIFIE)
- Se connecter
- Se déconnecter (DOIT ETRE AUTHENTIFIE)
- S'inscrire
- Capturer un pokémon (DOIT ETRE AUTHENTIFIE)
- Découvir un pokémon (DOIT ETRE AUTHENTIFIE)

Il est possible de s'authentifier en se créant un compte

Il est possible de se connecter avec des identifiants administateur que voici (permet de supprimer un pokémon):

- Nom d'utilisateur: admin
- Mot de passe: admin

Autre information :

Les numéro de régions ne sont pas encore montré on peux néanmois renseigner les régions ou vit le pokemon.

Si vous voyez un champ texte avec un label et un placeholder qui demande un url d'image, mettez une url d'image sinon vous risquez de provoquer des bugs lors du chargement de ces images.

Je crois avoir fais le tour.