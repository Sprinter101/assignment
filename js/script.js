goog.provide('profile.UserNameEdit');
goog.provide('profile.ContactsEdit');

// goog.require('goog.dom.classes');
// goog.require('goog.dom.classlist');
// goog.require('goog.events');
// goog.require('goog.soy');
// goog.require('goog.ui.Component');

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

        if (this.nameInfoEditButton_) {
            handler.listen(
                this.nameInfoEditButton_,
                goog.events.EventType.CLICK,
                this.toggleNameEditElements_
            );
        }

        if (this.nameEditConfirmButton_) {
            handler.listen(
                this.nameEditConfirmButton_,
                goog.events.EventType.CLICK,
                this.toggleNameEditElements_
            );
        }

        // if (this.hideShownFiltersButtonElement_) {
        //     handler.listen(
        //         this.hideShownFiltersButtonElement_,
        //         goog.events.EventType.CLICK,
        //         this.hideShownFilters_
        //     );
        // }

        // if (this.showFiltersButtonElement_) {
        //     var header = this.getElementByClass(Filter.CssClass.HEADER);
        //     handler.listen(
        //         header,
        //         goog.events.EventType.CLICK,
        //         this.toggleFiltersVisibility_
        //     );
        // }

        // for (var i = 0; i < this.inputElements.length; i++) {
        //     handler.listen(
        //         this.inputElements[i],
        //         goog.events.EventType.CLICK,
        //         this.onChangeFilterItem
        //     );
        // }
    };

    UserNameEdit.prototype.toggleNameEditElements_ = function() {
    	goog.dom.classlist.toggle(
            this.nameInfoElements_,
            UserNameEdit.CssClass.HIDDEN
        );

    	goog.dom.classlist.toggle(
            this.nameEditElements_,
            UserNameEdit.CssClass.HIDDEN
        );
    };

});


jQuery(function() {
	var userNameElementsBlock = goog.dom.getElementByClass(
    profile.UserNameEdit.CssClass.USER_NAME_ELEMENTS_BLOCK
  );

  userNameEdit = new profile.UserNameEdit();
  userNameEdit.decorate(userNameElementsBlock);
});