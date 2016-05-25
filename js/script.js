goog.require('profile.UserNameEdit');
goog.require('profile.EmailEdit');

jQuery(function() {
	var userNameElementsBlock = goog.dom.getElementByClass(
    profile.UserNameEdit.CssClass.USER_NAME_ELEMENTS_BLOCK
  );

	var userEmailElementsBlock = goog.dom.getElementByClass(
    profile.EmailEdit.CssClass.USER_EMAIL_ELEMENTS_BLOCK
  );

  userNameEdit = new profile.UserNameEdit();
  userNameEdit.decorate(userNameElementsBlock);

  EmailEdit = new profile.EmailEdit();
  EmailEdit.decorate(userEmailElementsBlock);
});

// closure-library/closure/bin/calcdeps.py -i js/script.js -p closure-library/ -o script > js/my-deps.js