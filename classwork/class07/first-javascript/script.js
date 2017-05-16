document.addEventListener("DOMContentLoaded", function(event){

	var codingFunlevel = 5;

	console.log(codingFunlevel);

	codingFunlevel = codingFunlevel + 5;

	console.log(codingFunlevel);

	var bestLanguage = 'Javascript';

	console.log(bestLanguage);

	var elem = document.querySelector("#cool");

	console.log(elem);

	elem.style.background = 'rgb(0,255,0)';

	bestLanguage = bestLanguage + 'is the best language ever!';

	console.log(bestLanguage);


	function whatDay(){
		console.log('it is Thursday')
	}

	whatDay();

});




// 1. create a new variable called codingFunLevel and set it equal to 5

// 2. use console.log() to print out the value of codingFunLevel

// 3. add 5 to the value of codingFunLevel (it should now equal 10)

// 4. use console.log() to print out the value of codingFunLevel again

// 5. create a variable called bestLanguage and set it equal to Javascript as a string.

// 6. console.log() the value of bestLanguage

// 7. Paste following element beneith the H1 in index.html:

//         <p id=“where”>Where in the world have you been?</p>

// 8. Create a variable called “whereElem” in script.js and set it equal to the element we just placed on the page.

//      hint: use a query method like document.querySelector

// 9. use the variable whereElem and set the background of the element it points to to rgb(0,255,0)

//     hint: use style.background =

// 10. add “is the best langage ever!” to the variable bestLanguage

// 11. console.log() the value of bestLanguage
