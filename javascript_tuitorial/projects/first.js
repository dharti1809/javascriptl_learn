const buttons = document.querySelectorAll('.button');
// const buttons = document.querySelector('.button');
console.log(buttons)

const body = document.querySelector("body");
// console.log(body)

buttons.forEach(function(buttons) {
	// console.log(buttons);

	buttons.addEventListener('click', function(e){
		// console.log(e);
		// console.log(e.target);
		if(e.target.id === 'grey'){
			body.style.backgroundColor = e.target.id;
		}
		if(e.target.id === 'white'){
			body.style.backgroundColor = e.target.id;
		}
		if(e.target.id === 'blue'){
			body.style.backgroundColor = e.target.id;
		}
		if(e.target.id === 'pink'){
			body.style.backgroundColor = e.target.id;
		}
	})
})