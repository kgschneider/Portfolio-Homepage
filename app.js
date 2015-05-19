$(document).ready(function() {
	
	$('#example1').mouseenter(function() {
		$('#example1').html('Lorem ipsum dolor sit amet, decore voluptua inimicus duo eu, has eius scribentur ex, pri malorum perfecto eu. His ei modo iisque sententiae, magna justo hendrerit ut ius.');
		$('#example1').css('background-color', '#359AFF');
		$('#example1').css('color', 'black');
		$('#example1').css('transition-duration', '.5s');
	})

	$('#example1').mouseleave(function() {
		$('#example1').html('<strong>' + 'Portfolio Sample 1' + '</strong>' + '<br>' + 'Portfolio sample description here.');
		$('#example1').css('background-color', '#282929');
		$('#example1').css('color', '#D3D3D3');
	})

	$('#example2').mouseenter(function() {
		$('#example2').html('Lorem ipsum dolor sit amet, decore voluptua inimicus duo eu, has eius scribentur ex, pri malorum perfecto eu. His ei modo iisque sententiae, magna justo hendrerit ut ius.');
		$('#example2').css('background-color', '#359AFF');
		$('#example2').css('color', 'black');
		$('#example2').css('transition-duration', '.5');
	})

	$('#example2').mouseleave(function() {
		$('#example2').html('<strong>' + 'Portfolio Sample 2' + '</strong>' + '<br>' + 'Portfolio sample description here.');
		$('#example2').css('background-color', '#282929');
		$('#example2').css('color', '#D3D3D3');

	})

	$('#example3').mouseenter(function() {
		$('#example3').html('Lorem ipsum dolor sit amet, decore voluptua inimicus duo eu, has eius scribentur ex, pri malorum perfecto eu. His ei modo iisque sententiae, magna justo hendrerit ut ius.');
		$('#example3').css('background-color', '#359AFF');
		$('#example3').css('color', 'black');
		$('#example3').css('transition-duration', '.5s');

	})

	$('#example3').mouseleave(function() {
		$('#example3').html('<strong>' + 'Portfolio Sample 3' + '</strong>' + '<br>' + 'Portfolio sample description here.');
		$('#example3').css('background-color', '#282929');
		$('#example3').css('color', '#D3D3D3');

	})

});

