class ColorCycles {
	constructor(config) {
		this.colors = config.colors;
		this.pause = config.pause;
		this.transition = config.transition;
		this.elemQueries = config.elemQueries;
		this.currentColorIndex = 0;
	}

	startColors() {
		let thisObj = this; // pass the context of 'this' into setInterval scope
		setInterval(function() {
				thisObj.currentColorIndex = (thisObj.currentColorIndex + 1 == thisObj.colors.length) ? 0 : thisObj.currentColorIndex + 1;
		}, this.pause);
		for (let i=0; i<this.elemQueries.length; i+=1) {
			let elems = document.querySelectorAll(this.elemQueries[i]);
			for (let j=0; j<elems.length; j+=1) {
				elems[j].style.transition = this.transition;
				elems[j].style.color = this.colors[this.currentColorIndex];
				setInterval(function() {
					elems[j].style.color = thisObj.colors[thisObj.currentColorIndex];
				}, this.pause);
			};
		};
	}
};


// example implementation
let myCustomFont = new ColorCycles({
	colors: ["yellow", "pink", "teal", "springgreen", "aqua", "orange", "fuchsia", "lavender"],
	pause: '1000',
	transition: '0.5s',
	elemQueries: ["#testText"],
});
let myCustomFont2 = new ColorCycles({
	colors: ["rgb(200,150,60)", "rgb(190,50,230)", "rgb(230,210,240)", "rgb(20,230,240)", "rgb(250,200,200)", "rgb(190,190,70)"],
	pause: '500',
	transition: '0.3s',
	elemQueries: ["#testText2", "#testText3"],
});
let myCustomFont3 = new ColorCycles({
	colors: ["rgb(20,20,20)", "rgb(60,60,60)", "rgb(100,100,100)", "rgb(140,140,140)", "rgb(180,180,180)", "rgb(220,220,220)", "rgb(180,180,180)", "rgb(140,140,140)", "rgb(100,100,100)", "rgb(60,60,60)"],
	pause: '300',
	transition: '0.3s',
	elemQueries: ["#otherId"],
});

myCustomFont.startColors();
myCustomFont2.startColors();
myCustomFont3.startColors();