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
//        debugger;
//        return;
        Liabilities.insert({
            description: "Credit Card",
            limit: "0",
            owing: "0",
            type: "Card",
            scenario: this.scenario._id
        });
        $(".limit:last").focus().select();

    },
    'click .delete': function(e) {
        e.preventDefault();
        Liabilities.remove(this._id);

    }
});

Template.creditCards.hasCreditCards = function(){
    return Liabilities.find().count() > 0;
}