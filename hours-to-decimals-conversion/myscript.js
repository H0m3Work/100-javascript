function message_error() {
	let minute = Number($('input[name=minute]').val());

	if (minute > 59 || minute < 0) {
		$('.error').html('Minutes must be between 0 and 59');
	} else {
		$('.error').html('');
	}
}

function conversion_time() {
	let hour = $('input[name=hour]').val();
	let minute = $('input[name=minute]').val();

	if (hour == '') {
		hour = '0';
		$('input[name=hour]').val('0');
	}

	if (minute == '') {
		minute = '0';
		$('input[name=minute]').val('00');
	}

	let hh = parseFloat(hour);
	let mm = parseFloat((minute / 60).toFixed(2));
	let time = hh + mm;
	
	$('.decimal-hour').html( time + " hours");
}

function limit_minute() {

	let minute = $('input[name=minute]');
	let maxChar = 2;

	if (minute.val().length > maxChar) {
		minute.val(minute.val().substr(0, maxChar));
	}
}


$(document).ready(function () {

	$('input[type=number]').on('focus', function () {
		let val = $(this).val();
		if (val == '0' || val == '00') {
			$(this).val('');
		}
	});

	$('input[name=hour]').on('blur', conversion_time);
	$('input[name=minute]').on('blur', conversion_time);

	$('input[name=minute]').on('keyup', function () {
		message_error();
		limit_minute();
	});
});
