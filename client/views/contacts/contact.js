Template.contactForm.rendered = function() {
    $('.phone-number').formatPhone();
    Session.set("showingContactModal", true);
}

Template.contactModal.modalDisplay = function() {
    if(Session.get("showingContactModal") == true)
        return "default";
    else
        return "none";
}

Template.contactModal.events({
    'click #btnCancelSave': function() {
        Session.set("showingContactModal", false);
    }
})