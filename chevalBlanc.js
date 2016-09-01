 /* Ma 1ère fonction que le script lanceras */
 function aff_question1() { 
 	/*Ici je crée une variable qui contiendras la question que je veux afficher.*/
 var henri = prompt("Quel est la couleur du cheval blanc d'henri 4 ?").toLowerCase();/*La méthode toLowerCase() retourne la chaîne de caractères courante en minuscules.*/
	/* Ici ma condition qui dit si henri ( la réponse de ma question ) est égale à blanc , alors le joueur gagne , sinon il perd */
	if (henri == "blanc" ) {
		alert("Bravo , tu as le droit de continuer.");
	}
	else {
		alert("Faux, recommence !");
		aff_question1();/*Appelez ma fonction ici permet de la relancer en cas d'érreur de la part du joueur.*/
	}
 };
 aff_question1();
 /*Ma seconde fonction que le script lance en cas de réussite */
function aff_question2() {
	/* Comme dans ma 1ère fonction , la question que je veux lancer avec les conditions de réussite et d'échec*/
	var nain = prompt("Combien y a t'il de 7 nains ?")/*Ici j'aurais pu mettre un parseInt (La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.) pour justement forcé le joueur à mettre uniquement un nombre entier et pas une chaine de caractère*/
	if (nain == 7) {
		alert("Bravo, tu sais lire !!!");
	}
	else {
		alert("Faux, franchement apprend à lire");
		aff_question2();
	}
	window.setTimeout("location=('http://lyc-henri4.scola.ac-paris.fr/');",7000);/*Ici je fais une petite surprise en renvoyant après 7 secondes sur une page internet du lycée " Henri IV " */
};
aff_question2();