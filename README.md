<!-- CI -->

GitHub
↓
Lance une machine Ubuntu
↓
Machine vide
↓
actions/checkout@v4
↓
Récupère ton repository
↓
fullstack-docker-project/
├── backend/
├── frontend/
├── nginx/
└── docker-compose.yml

<!-- etapes process -->

Step 1
actions/checkout@v4
↓
récupérer le code

Step 2
Node.js
↓
préparer l'environnement

Step 3
npm ci
↓
installer les dépendances

Step 4
npm run build
↓
vérifier que le backend compile

<!-- sans catche -->

CI 1 → télécharger les dépendances
CI 2 → télécharger les dépendances
CI 3 → télécharger les dépendances
...

<!-- mais avec cache : Cela peut accélérer les workflows.-->

CI 1 → télécharger les dépendances
CI 2 → télécharger les dépendances
CI 3 → télécharger les dépendances
...
