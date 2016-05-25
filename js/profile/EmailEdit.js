goog.provide('profile.EmailEdit');

goog.require('goog.dom.classes');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.soy');
goog.require('goog.ui.Component');

profile.EmailEdit = function() {
  goog.base(this);

  this.emailInfoElements_ = null;
  this.emailInfoText_ = null;
  this.emailInfoEditButton_ = null;
  this.emailEditElements_ = null;
  this.emailEditTextfield_ = null;
  this.emailEditConfirmButton_ = null;
};

goog.inherits(profile.EmailEdit, goog.ui.Component);

goog.scope(function() {
  var EmailEdit = profile.EmailEdit;

  EmailEdit.CssClass = {
    USER_EMAIL_ELEMENTS_BLOCK: 'user-email',
    EMAIL_INFO_ELEMENTS: 'js-user-email-info-elements',
    EMAIL_INFO_TEXT: 'user-email__email',
    EMAIL_INFO_EDIT_BUTTON: 'user-email__edit-button',
    EMAIL_EDIT_ELEMENTS: 'js-user-email-edit-elements',
    EMAIL_EDIT_TEXTFIELD: 'user-email-edit__edit-field',
    EMAIL_EDIT_CONFIRM_BUTTON: 'user-email-edit__confirm-button',
    HIDDEN: 'g-hidden',
    INPUT_FIELD_ERROR: 'g-input-field-error'
  };

  EmailEdit.prototype.createDom = function() {
    goog.base(this, 'createDom');

    var element = goog.dom.getElementByClass('USER_EMAIL_ELEMENTS_BLOCK');

    this.decorateInternal(element);
  };



  EmailEdit.prototype.decorateInternal = function(element) {
    goog.base(this, 'decorateInternal', element);

    this.emailInfoElements_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_INFO_ELEMENTS,
        element
    );

    this.emailInfoText_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_INFO_TEXT,
        element
    );

    this.emailInfoEditButton_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_INFO_EDIT_BUTTON,
        element
    );

    this.emailEditElements_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_EDIT_ELEMENTS,
        element
    );

    this.emailEditTextfield_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_EDIT_TEXTFIELD,
        element
    );

    this.emailEditConfirmButton_ = goog.dom.getElementByClass(
        EmailEdit.CssClass.EMAIL_EDIT_CONFIRM_BUTTON,
        element
    );
  };

  EmailEdit.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');

    var handler = this.getHandler();

    handler.listen(
      this.emailInfoEditButton_,
      goog.events.EventType.CLICK,
      this.editButtonPressHandler_
    );

    handler.listen(
      this.emailEditConfirmButton_,
      goog.events.EventType.CLICK,
      this.confirmButtonPressHandler_
    );

    handler.listen(
      this.emailEditTextfield_,
      goog.events.EventType.KEYDOWN,
      this.textfieldKeyPressHandler_
    );

  };

  EmailEdit.prototype.editButtonPressHandler_ = function() {
    this.emailEditTextfield_.value = this.emailInfoText_.innerText.trim();
    this.toggleEmailElements_();
  };

  EmailEdit.prototype.confirmButtonPressHandler_ = function() {
    var val_ = this.emailEditTextfield_.value.trim();

    if (validateEmail(val_)) {
      this.emailInfoText_.innerText = val_;

      goog.dom.classlist.remove(
        this.emailEditTextfield_,
        EmailEdit.CssClass.INPUT_FIELD_ERROR
      );

      this.toggleEmailElements_(); 
    } else {
      goog.dom.classlist.add(
        this.emailEditTextfield_,
        EmailEdit.CssClass.INPUT_FIELD_ERROR
      );
    }
    
  };

  EmailEdit.prototype.toggleEmailElements_ = function() {
    goog.dom.classlist.toggle(
      this.emailInfoElements_,
      EmailEdit.CssClass.HIDDEN
    );

    goog.dom.classlist.toggle(
      this.emailEditElements_,
      EmailEdit.CssClass.HIDDEN
    );
  };

  EmailEdit.prototype.textfieldKeyPressHandler_ = function(key) {

    if (key.keyCode == 13) {
      this.confirmButtonPressHandler_();
      return;
    }

    if (key.keyCode == 27) {
      this.toggleEmailElements_();
      return;
    }
  };

  var validateEmail = function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

});