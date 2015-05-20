$(document).ready(function() {
	
	$('#example1').mouseenter(function() {
		var example1 = $('#example1');
		var example1Element = example1.get(0);

		example1Element._html = example1.html();
		example1
			.load('templates/example1.html')
			.css({
				'background-color': '#87C8EE',
				'color':'black',
				'transition-duration': '.5s',
				'-webkit-transition-duration': '.5s',
			    '-moz-transition-duration': '.5ms',
			    '-o-transition-duration': '.5ms',
			    '-ms-transition-duration': '.5ms'	
			});
	})

	$('#example1').mouseleave(function() {
		var example1 = $('#example1');
		var example1Element = example1.get(0);

		example1
			.html(example1Element._html)
			.css({
				'background-color': '#282929',
				'color': '#D3D3D3'
			});
	})

	$('#example2').mouseenter(function() {
		$('#example2').html('Lorem ipsum dolor sit amet, decore voluptua inimicus duo eu.');
		$('#example2').css('background-color', '#87C8EE');
		$('#example2').css('color', 'black');
		$('#example2').css('transition-duration', '.5s');
	})

	$('#example2').mouseleave(function() {
		$('#example2').html('<strong>' + 'Portfolio Sample 2' + '</strong>' + '<br>' + 'Portfolio sample description here.');
		$('#example2').css('background-color', '#282929');
		$('#example2').css('color', '#D3D3D3');

	})

	$('#example3').mouseenter(function() {
		$('#example3').html('Lorem ipsum dolor sit amet, decore voluptua inimicus duo eu..');
		$('#example3').css('background-color', '#87C8EE');
		$('#example3').css('color', 'black');
		$('#example3').css('transition-duration', '.5s');

	})

	$('#example3').mouseleave(function() {
		$('#example3').html('<strong>' + 'Portfolio Sample 3' + '</strong>' + '<br>' + 'Portfolio sample description here.');
		$('#example3').css('background-color', '#282929');
		$('#example3').css('color', '#D3D3D3');

	})

});

