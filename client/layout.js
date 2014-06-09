Template.userMenu.displayUser = function() {
    return (Meteor.user() ? Meteor.user().emails[0].address.toString() : "");
}