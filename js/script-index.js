$(document).ready(function(){


$(".js-back").hide(); //bontones ocultos y mostrados
$(".js-Menu").show();
$(".js-menu").hide();


//noticia pint

function printNews(){
 	$(".recipes-food").html("<b>News Recipes</b>");  //muestra de noticias
};
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes:', recipesArray); 

	var find = recipesArray ['highlighted']

	$.each(recipesArray,function(i,find){ //metodo "each" para iterar dentro de la data buscando el highlighted, solicitado
			
			if (find.highlighted===true){ //si en la data este exactamente igual el highlighted
				console.log(find);		  // muestramelo.

				renderRecipe(find); //muestra la información apendada con los 6 platillos que trabajan con "true"
			}
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta:find', recipe); //se cumplio lo solicitado en la función anterior

	$(".list-recipes").append( //apende el contenido de templates para mostrar la info que se necesitaba
        "<a class='item-recipe' href='#'>" +
            "<span class='attribution'>" +
                "<span class='title-recipe'>" + recipe.title + "</span>" +
                "<span class='metadata-recipe'>" +
                     "<span class='author-recipe'>" + recipe.source.name + "</span>" +
                    "<span class='bookmarks-recipe'>" +
                        "<span class='icon-bookmark'></span>" +
                    "</span>" +
                "</span>" +
            "</span>" +
            "<img src='img/recipes/640x800/" + recipe.name + ".jpg'>" +
        "</a>"
    );
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
 	
}

function listRecipes(){

}

});