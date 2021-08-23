Tone.start();
const synth = new Tone.Synth().toDestination();
let pad = document.getElementById('pad');
let label = document.getElementById('label')
let dragging = false;

function down(event) {
	dragging = true;
	let x = event.pageX;
	synth.triggerAttack(x);
	label.innerHTML = Math.round(x) + 'Hz';

}

function up(event) {
		dragging = false;
	synth.triggerRelease();
	label.innerHTML = 'CLICK / DRAG';
}

function move(event) {
	if (dragging) {
		let x = event.pageX
		synth.setNote(x);
		label.innerHTML = Math.round(x) + 'Hz';
	}
}


pad.addEventListener('pointerdown', down);
pad.addEventListener('pointerup', up);
pad.addEventListener('pointermove', move);



