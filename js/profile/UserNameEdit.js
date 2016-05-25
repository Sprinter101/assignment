goog.provide('profile.UserNameEdit');

goog.require('goog.dom.classes');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.soy');
goog.require('goog.ui.Component');

profile.UserNameEdit = function() {
	goog.base(this);

	this.nameInfoElements_ = null;
	this.nameInfoText_ = null;
	this.nameInfoEditButton_ = null;
	this.nameEditElements_ = null;
	this.nameEditTextfield_ = null;
	this.nameEditConfirmButton_ = null;
};

goog.inherits(profile.UserNameEdit, goog.ui.Component);

goog.scope(function() {
	var UserNameEdit = profile.UserNameEdit;

	UserNameEdit.CssClass = {
		USER_NAME_ELEMENTS_BLOCK: 'user-name',
		NAME_INFO_ELEMENTS: 'js-user-name-info-elements',
		NAME_INFO_TEXT: 'user-name__text',
		NAME_INFO_EDIT_BUTTON: 'user-name__edit-button',
		NAME_EDIT_ELEMENTS: 'js-user-name-edit-elements',
		NAME_EDIT_TEXTFIELD: 'user-name-edit__edit-field',
		NAME_EDIT_CONFIRM_BUTTON: 'user-name-edit__confirm-button',
		HIDDEN: 'g-hidden'
  };

  UserNameEdit.prototype.createDom = function() {
    goog.base(this, 'createDom');

    var element = goog.dom.getElementByClass('USER_NAME_ELEMENTS_BLOCK');

    this.decorateInternal(element);
  };



  UserNameEdit.prototype.decorateInternal = function(element) {
    goog.base(this, 'decorateInternal', element);

    this.nameInfoElements_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_INFO_ELEMENTS,
        element
    );

    this.nameInfoText_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_INFO_TEXT,
        element
    );

    this.nameInfoEditButton_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_INFO_EDIT_BUTTON,
        element
    );

    this.nameEditElements_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_EDIT_ELEMENTS,
        element
    );

    this.nameEditTextfield_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_EDIT_TEXTFIELD,
        element
    );

    this.nameEditConfirmButton_ = goog.dom.getElementByClass(
        UserNameEdit.CssClass.NAME_EDIT_CONFIRM_BUTTON,
        element
    );
  };

  UserNameEdit.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');

        var handler = this.getHandler();

        handler.listen(
          this.nameInfoEditButton_,
          goog.events.EventType.CLICK,
          this.editButtonPressHandler_
        );

        handler.listen(
          this.nameEditConfirmButton_,
          goog.events.EventType.CLICK,
          this.confirmButtonPressHandler_
        );

        handler.listen(
          this.nameEditTextfield_,
          goog.events.EventType.KEYDOWN,
          this.textfieldKeyPressHandler_
        );

    };

    UserNameEdit.prototype.editButtonPressHandler_ = function() {
      this.nameEditTextfield_.value = this.nameInfoText_.innerText.trim();
      this.toggleNameElements_();
    };

    UserNameEdit.prototype.confirmButtonPressHandler_ = function() {
      var val_ = this.nameEditTextfield_.value.trim();

      if (val_) {
        this.nameInfoText_.innerText = val_;
      }

      this.toggleNameElements_(); 
    };

    UserNameEdit.prototype.toggleNameElements_ = function() {
    	goog.dom.classlist.toggle(
            this.nameInfoElements_,
            UserNameEdit.CssClass.HIDDEN
        );

    	goog.dom.classlist.toggle(
            this.nameEditElements_,
            UserNameEdit.CssClass.HIDDEN
        );
    };

    UserNameEdit.prototype.textfieldKeyPressHandler_ = function(key) {

      if (key.keyCode == 13) {
        this.confirmButtonPressHandler_();
        return;
      }

      if (key.keyCode == 27) {
        this.toggleEmailElements_();
        return;
      }
    };

});