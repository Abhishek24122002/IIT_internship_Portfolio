window.onload = function() {
	let cards = document.querySelectorAll(".card-event");

	for(let i = 0; i < cards.length; i++) {
		cards[i].onmouseover = function(e) {
			let parent = cards[i].parentNode;
			let fillers = parent.querySelectorAll(".filler");
			for(let j = 0; j < fillers.length; j++) {
				fillers[j].style.width = fillers[j].getAttribute("data-perc") + "%";
			}
		};
		cards[i].onmouseleave = function(e) {
			let parent = cards[i].parentNode;
			let fillers = parent.querySelectorAll(".filler");
			for(let j = 0; j < fillers.length; j++) {
				fillers[j].style.width = "0%";
			}
		}
	}	
}
