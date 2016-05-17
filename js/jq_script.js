var userNameToggleElements = function() {
	$('.js-user-name-info-elements').toggleClass('g-hidden');
	$('.js-user-name-edit-elements').toggleClass('g-hidden');
};

var userEmailToggleElements = function() {
	$('.js-user-email-info-elements').toggleClass('g-hidden');
	$('.js-user-email-edit-elements').toggleClass('g-hidden');
};


$('.user-name-edit__confirm-button').on('click', userNameToggleElements);
$('.user-name__edit-button').on('click', userNameToggleElements);

$('.user-email-edit__confirm-button').on('click', userEmailToggleElements);
$('.user-email__edit-button').on('click', userEmailToggleElements);