var ColorCycles = /** @class */ (function () {
    function ColorCycles(config) {
        this.colors = config.colors;
        this.pause = config.pause;
        this.transition = config.transition;
        this.elemQueries = config.elemQueries;
        this.currentColorIndex = 0;
    }
    ColorCycles.prototype.startColors = function () {
        var thisObj = this; // pass the context of 'this' into setInterval scope
        setInterval(function () {
            thisObj.currentColorIndex = (thisObj.currentColorIndex + 1 == thisObj.colors.length) ? 0 : thisObj.currentColorIndex + 1;
        }, this.pause);
        var _loop_1 = function (i) {
            var elems = document.querySelectorAll(this_1.elemQueries[i]);
            var _loop_2 = function (j) {
                elems[j].style.transition = this_1.transition;
                elems[j].style.color = this_1.colors[this_1.currentColorIndex];
                setInterval(function () {
                    elems[j].style.color = thisObj.colors[thisObj.currentColorIndex];
                }, this_1.pause);
            };
            for (var j = 0; j < elems.length; j += 1) {
                _loop_2(j);
            }
            ;
        };
        var this_1 = this;
        for (var i = 0; i < this.elemQueries.length; i += 1) {
            _loop_1(i);
        }
        ;
    };
    return ColorCycles;
}());
;
// example implementation
var exampleColors = new ColorCycles({
    colors: ["pink", "violet", "orange", "paleturquoise", "lightgreen", "aqua", "plum", "peachpuff"],
    pause: 500,
    transition: '0.5s',
    elemQueries: ["#example"]
});
var myCustomFont = new ColorCycles({
    colors: ["yellow", "pink", "teal", "springgreen", "aqua", "orange", "fuchsia", "lavender"],
    pause: 1000,
    transition: '0.5s',
    elemQueries: ["#testText"]
});
var myCustomFont2 = new ColorCycles({
    colors: ["rgb(200,150,60)", "rgb(190,50,230)", "rgb(230,210,240)", "rgb(20,230,240)", "rgb(250,200,200)", "rgb(190,190,70)"],
    pause: 500,
    transition: '0.3s',
    elemQueries: ["#testText2", "#testText3"]
});
var myCustomFont3 = new ColorCycles({
    colors: ["rgb(20,20,20)", "rgb(60,60,60)", "rgb(100,100,100)", "rgb(140,140,140)", "rgb(180,180,180)", "rgb(220,220,220)", "rgb(180,180,180)", "rgb(140,140,140)", "rgb(100,100,100)", "rgb(60,60,60)"],
    pause: 300,
    transition: '0.3s',
    elemQueries: ["#otherId"]
});
exampleColors.startColors();
myCustomFont.startColors();
myCustomFont2.startColors();
myCustomFont3.startColors();
