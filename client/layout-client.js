
Template.userMenu.displayUser = function() {
    return userEmail();
}

Template.userMenu.gravatar = function() {
    return Gravatar.imageUrl(userEmail());
}

Template.headerClient.events({
    'click li': function (e, t) {
        var el = t.find('ul');
        $(el).find('li').removeClass('active');
        $(e.currentTarget).addClass("active");

    }
})