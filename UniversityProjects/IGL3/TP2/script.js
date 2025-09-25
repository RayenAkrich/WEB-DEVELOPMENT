console.log('Bienvenue dans votre application de gestion de tâches !');// Message de bienvenue 
// Déclaration de la liste de tâches
// Pour chaque tâche, on stocke le texte et l'état (complétée ou non)
// tasks = [{text: 'Ma tâche', completed: false}, ...]
let tasks = [];
// Fonction pour ajouter une tâche
function ajouterTache() {
	const input = document.getElementById('taskInput');
	const taskText = input.value.trim();
	if (taskText !== '') {
		tasks.push({ text: taskText, completed: false });
		sauvegarderTaches();
		afficherTaches();
		input.value = '';
	}
}

// affichage des tâches dans la liste
function afficherTaches() {
	const list = document.getElementById('taskList');
	list.innerHTML = '';

	// Filtrage par recherche
	const searchValue = document.getElementById('searchInput') ? document.getElementById('searchInput').value.trim().toLowerCase() : '';

	let completedCount = 0;
	let ongoingCount = 0;

	tasks.forEach((task, index) => {
		if (searchValue && !task.text.toLowerCase().includes(searchValue)) {
			return;
		}
		const li = document.createElement('li');

		// Texte de la tâche
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

		// Bouton Terminer
		const btnTerminer = document.createElement('button');
		btnTerminer.textContent = 'Terminer';
		btnTerminer.style.marginLeft = '10px';
		btnTerminer.onclick = function() {
			terminerTache(index);
		};
		li.appendChild(btnTerminer);

		// Bouton Supprimer
		const btnSupprimer = document.createElement('button');
		btnSupprimer.textContent = 'Supprimer';
		btnSupprimer.style.marginLeft = '5px';
		btnSupprimer.onclick = function() {
			supprimerTache(index);
		};
		li.appendChild(btnSupprimer);

		list.appendChild(li);
	});

	// Affichage du compteur
	const counters = document.getElementById('counters');
	if (counters) {
		counters.textContent = `Tâches en cours : ${ongoingCount} | Tâches terminées : ${completedCount}`;
	}
}
// Fonction pour tout supprimer
function supprimerTout() {
	tasks = [];
	sauvegarderTaches();
	afficherTaches();
}

// Fonction pour supprimer une tâche
function supprimerTache(index) {
	tasks.splice(index, 1);
	sauvegarderTaches();
	afficherTaches();
}

// Fonction pour terminer une tâche
function terminerTache(index) {
	tasks[index].completed = !tasks[index].completed;
	sauvegarderTaches();
	afficherTaches();
}
// Sauvegarder les tâches dans le localStorage
function sauvegarderTaches() {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Charger les tâches depuis le localStorage
function chargerTaches() {
	const saved = localStorage.getItem('tasks');
	if (saved) {
		tasks = JSON.parse(saved);
	}
}

// Au chargement de la page, on récupère et affiche les tâches sauvegardées
window.addEventListener('DOMContentLoaded', function() {
	chargerTaches();
	afficherTaches();

	// Ajout de l'événement sur le bouton 'Tout supprimer'
	const deleteAllBtn = document.getElementById('deleteAllBtn');
	if (deleteAllBtn) {
		deleteAllBtn.addEventListener('click', supprimerTout);
	}

	// Ajout de l'événement sur le champ de recherche
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', afficherTaches);
	}
});

// Ajout de l'événement sur le bouton
document.getElementById('addBtn').addEventListener('click', ajouterTache);

// Ajout de l'événement pour la touche Entrée
document.getElementById('taskInput').addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		ajouterTache();
	}
});