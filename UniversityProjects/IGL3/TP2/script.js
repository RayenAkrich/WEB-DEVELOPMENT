console.log('Bienvenue dans votre application de gestion de tâches !');// msg de bienvenue 
let tasks = []; // liste pour stocker les taches

function ajouterTache() { //l'ajout du tache
	const input = document.getElementById('taskInput'); // récupération du tache
	const taskText = input.value.trim(); 
	if (taskText !== '') {
		tasks.push({ text: taskText, completed: false }); // ajout du tache dans la liste
		sauvegarderTaches(); // le sauvegard du tache
		afficherTaches(); // rafraichissement de la liste
		input.value = ''; // réinitialisation du champ
	}
}

// affichage des tâches dans la liste
function afficherTaches() {
	const list = document.getElementById('taskList'); // récupération de la liste
	list.innerHTML = '';

	// filtrage par recherche
	if (document.getElementById('searchInput')!=''){
		var searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
	}else {
		var searchValue = '';
	}
	let completedCount = 0;
	let ongoingCount = 0;

	tasks.forEach((task, index) => {
		if (searchValue && !task.text.toLowerCase().startsWith(searchValue)) { // filtre
			return;
		}

		const li = document.createElement('li');// création d'un élément de liste

		// texte de la tâche
		const span = document.createElement('span');
		span.textContent = task.text;
		if (task.completed) {
			span.style.textDecoration = 'line-through';
			span.style.color = '#888';
			completedCount++;
		} else {
			ongoingCount++;
		}
		li.appendChild(span);

		// bouton terminer
		const btnTerminer = document.createElement('button');
		btnTerminer.textContent = 'Terminer';
		btnTerminer.style.marginLeft = '10px';
		btnTerminer.onclick = function() {
			terminerTache(index);
		};
		li.appendChild(btnTerminer);

		// bouton supprimer
		const btnSupprimer = document.createElement('button');
		btnSupprimer.textContent = 'Supprimer';
		btnSupprimer.style.marginLeft = '5px';
		btnSupprimer.onclick = function() {
			supprimerTache(index);
		};
		li.appendChild(btnSupprimer);

		list.appendChild(li);
	});

	// affichage du compteur
	const counters = document.getElementById('counters');
	if (counters) {
		counters.textContent = `Tâches en cours : ${ongoingCount} | Tâches terminées : ${completedCount}`;
	}
}

// fonction pour tout supprimer
function supprimerTout() {
	tasks = []; // vider la liste
	sauvegarderTaches();
	afficherTaches();
}

// fonction pour supprimer une tâche
function supprimerTache(index) {
	tasks.splice(index, 1); // suppression de la tâche
	sauvegarderTaches();
	afficherTaches();
}

// fonction pour terminer une tâche
function terminerTache(index) {
	tasks[index].completed = true; 
	sauvegarderTaches();
	afficherTaches();
}
// sauvegarder les tâches dans le localStorage
function sauvegarderTaches() {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// charger les tâches depuis le localStorage
function chargerTaches() {
	const saved = localStorage.getItem('tasks');
	if (saved) {
		tasks = JSON.parse(saved);
	}
}

// au chargement de la page, on récupère et affiche les tâches sauvegardées
window.addEventListener('DOMContentLoaded', function() {
	chargerTaches();
	afficherTaches();

	// filtrage par recherche
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', afficherTaches); // rafraichissement de la liste à chaque saisie
	}
});

// événement sur le bouton ajouter
document.getElementById('addBtn').addEventListener('click', ajouterTache);

// ajout de l'événement pour la touche Entrée
document.getElementById('taskInput').addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		ajouterTache();
	}
});