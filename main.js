var page = document.querySelector(".page");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");
var change = document.querySelector(".change");

var randomColor = function(){
    var red = parseInt(Math.random() * 255 + 1);
    var green = parseInt(Math.random() * 255 + 1);
    var blue = parseInt(Math.random() * 255 + 1);

    var color = `rgba(${red}, ${green}, ${blue}, 0.35)`;

    return color;
}

var generate = function () {
	var num = parseInt(Math.random() * quotes.length + 1);

	quote.textContent = quotes[num].quote;
	author.textContent = "- " + quotes[num].source;
    page.style.backgroundColor = randomColor();
};

generate();
change.addEventListener("click", generate);
