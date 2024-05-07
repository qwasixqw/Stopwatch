'use strict';

// получаем элементы
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');

// переменные
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// обработчики события
btnStart.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 10);
});
btnStop.addEventListener('click', () => {
	clearInterval(interval);
});
btnReset.addEventListener('click', () => {
	clearInterval(interval);

	minutes = 0;
	seconds = 0;
	milliseconds = 0;

	minutesElement.textContent = '00';
	secondsElement.textContent = '00';
	millisecondsElement.textContent = '00';
});

function startTimer() {
	milliseconds++;

	millisecondsElement.textContent = '0' + milliseconds;

	if (milliseconds >= 9 && milliseconds <= 99) {
		millisecondsElement.textContent = milliseconds;
	}

	if (milliseconds === 100) {
		millisecondsElement.textContent = '00';
	}

	if (milliseconds > 99) {
		secondsElement.textContent = '0' + ++seconds;

		milliseconds = 0;
	}

	if (seconds > 9) {
		secondsElement.textContent = seconds;
	}

	if (seconds > 59) {
		minutesElement.textContent = '0' + ++minutes;

		seconds = 0;

		secondsElement.textContent = '0' + seconds;
	}

	if (minutes > 9) {
		minutesElement.textContent = minutes;
	}
}

