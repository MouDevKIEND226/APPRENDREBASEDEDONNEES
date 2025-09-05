// script.js
// URL de ton JSON Server
const url = 'http://localhost:3000/users';

// Sélectionne l'élément où on va afficher la liste
const userList = document.getElementById('user-list');

// Récupération des données avec fetch
fetch(url)
  .then(response => response.json())
  .then(users => {
    console.log("users:", users); // Affiche les données dans la console pour vérification
    users.forEach(user => {
      // Crée un élément li pour chaque utilisateur
      const li = document.createElement('li');
      li.textContent = `${user.id}-${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  })
  .catch(error => console.error('Erreur:', error));
