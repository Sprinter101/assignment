goog.provide('example');
goog.provide('example.ui.ChecklistItemRenderer');
goog.require('goog.array');




example.ChecklistItem;

example.Checklist = function(items) {
	this.items_ = goog.array.clone(items);
};

example.Checklist.prototype.getItems = function() {
	return goog.array.clone(this.items_);
};

example.Checklist.prototype.getNumChecked = function() {
	var numChecked = goog.array.reduce(this.items_, function(sum, item) {
		return item.checked ? sum + 1 : sum;
	}, 0);
return numChecked;
};



example.ui.ChecklistItemRenderer = function() {
	goog.base(this);
};

goog.inherits(example.ui.ChecklistItemRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(example.ui.ChecklistItemRenderer);


example.ui.ChecklistItemRenderer.CSS_CLASS = 'example-checklist-item';

example.ui.ChecklistItemRenderer.prototype.getCssClass = function() {
	return example.ui.ChecklistItemRenderer.CSS_CLASS;
};

example.ui.ChecklistItemRenderer.prototype.createDom = function(checklistItem) {
	var el = goog.base(this, 'createDom', checklistItem);
	checklistItem.setElementInternal(el);
	var dom = checklistItem.getDomHelper();
	var isItemChecked = checklistItem.isItemChecked();
	var checkboxState = isItemChecked ?
	goog.ui.Checkbox.State.CHECKED : goog.ui.Checkbox.State.UNCHECKED;
	var checkbox = new goog.ui.Checkbox(checkboxState, dom);
	checklistItem.addChild(checkbox, true /* opt_render */);
	var label = new example.ui.Label(checklistItem.getItemText());
	checklistItem.addChild(label, true /* opt_render */);
	checklistItem.setChecked(isItemChecked);
	return el;
};

example.ui.ChecklistItemRenderer.prototype.decorate = function(checklistItem, element) {
	goog.base(this, 'decorate', checklistItem, element);
	var checkbox = new goog.ui.Checkbox();
	checklistItem.addChild(checkbox);
	checkbox.decorate(goog.dom.getFirstElementChild(element));
	checklistItem.getModel().checked = checkbox.isChecked();
	var label = new example.ui.Label();
	checklistItem.addChild(label);
	label.decorate(goog.dom.getNextElementSibling(checkbox.getElement()));
	checklistItem.getModel().text = label.getLabelText();
	// Note that the following approach would not have worked because using
	// goog.ui.decorate() creates a checkbox that is already in the document, so
	// it cannot be added to checklistItem because it is not in the document yet,
	// as it is in the process of being decorated. In this case, decorate() must
	// be called after addChild(), as demonstrated in the working code earlier.
	//
	// var checkboxEl = goog.dom.getFirstElementChild(element);
	// var checkbox = /** @type {goog.ui.Checkbox} */ goog.ui.decorate(checkboxEl);
	// checklistItem.addChild(checkbox);
	// checklistItem.getModel().checked = checkbox.isChecked();
return element;
};