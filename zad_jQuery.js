alert('Задание по JS с применением библиотеки jQuery!');
//setTimeout(function(){$('body').fadeOut('slow')}, 3000);

$(function($) {
	$('button').on('click', () => {
		$('p').fadeIn('slow');
	});
});