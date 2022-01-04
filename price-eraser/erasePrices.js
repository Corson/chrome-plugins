document.documentElement.style.visibility = 'hidden';
document.addEventListener('DOMContentLoaded', function() {	
	var prices = document.getElementsByClassName('price');
	var i;
	for (i = 0; i < prices.length; i++) {
		prices[i].style.visibility = 'hidden';
	}
	document.documentElement.style.visibility = '';
});
