//Template.scenario.rendered = function() {
//    // $('.selector').action();
//}
//
//Template.scenario. = function() {
//    // do something...
//}

Template.creditCards.events({
    'click #addCreditCard': function(e) {
        e.preventDefault();
        Liabilities.insert({
            description: "Credit Card",
            limit: "0",
            owing: "0"
        });

    },
    'click .delete': function(e) {
        e.preventDefault();
        Liabilities.remove(this._id);

    }
});