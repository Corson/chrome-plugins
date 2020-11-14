/*var div = $('div[class="box-content-row"');
var innerDiv = [];
innerDiv = div.children("div");

for (i = 0; i < innerDiv.length - 1; i++) {
	var innerA = innerDiv.eq(i).children("a:first");
	console.log(innerA);
	var url = innerA.attr("href");
	console.log(url);
	window.open(url, '_blank');
}
*/
document.documentElement.style.visibility = 'hidden';
document.addEventListener('DOMContentLoaded', function() {	
	var prices = document.getElementsByClassName('price');
	var i;
	for (i = 0; i < prices.length; i++) {
		prices[i].style.visibility = 'hidden';
	}
	document.documentElement.style.visibility = '';
});