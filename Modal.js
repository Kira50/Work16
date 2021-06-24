  
$(function($) {
    //let modal = '<div class="screen"><div class="modal"><h1>MODAL WINDOW!</h1><div>click me!</div></div></div>';
    let modal = '';
    
    
    
    $('.screener').click(function(){
        /*
        $('.container').append(modal);
        $('.modal > div').on('click', function(){
            $('.screen').remove();
        });
        */
    });
    $('.alerter').click(function(){
        alert('OGOGO!!!');
    });
});

function makeModal () {
	str = '<div class="screen"><div class="modal"><h1>MODAL WINDOW!</h1><div>click me!</div></div></div>';
	$('.container').append(modal);
	$('.modal > div').on('click', function() {
	$('.screen').remove();
	});
	let d = JSON.parse(data);
	if (d.success) {
		$('h1').html('SUCCESS');
		$('p').('')
}