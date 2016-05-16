var userNameToggleElements = function() {
	$('.js-user-name__info-elements').toggleClass('g-hidden');
	$('.js-user-name__edit-elements').toggleClass('g-hidden');
};


$('.user-name__confirm-button').on('click', userNameToggleElements);
$('.user-name__edit-button').on('click', userNameToggleElements);