function loadBigFoot() {

	document.getElementById('bigfoot').src = 'bigfoot.png'
	

}

function moveBigFoot() {
	alert('Woohoo, you win! You found Bigfoot!');
	let picture = document.getElementById('bigfoot')

	let x = Math.random() * 1000
	let y = Math.random() * 1400

	picture.style.top = x + 'px'
	picture.style.left = y  + 'px'

}



