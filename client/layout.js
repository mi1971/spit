function userEmail(){
    return (Meteor.user() ? Meteor.user().emails[0].address.toString() : "");
}


Template.userMenu.displayUser = function() {
    return userEmail();
}

Template.userMenu.gravatar = function() {
    return Gravatar.imageUrl(userEmail());
}