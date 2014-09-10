Template.creditCards.events({
    'click #addCreditCard': function(e) {
        e.preventDefault();
//        debugger;
//        return;
        var creditCardCount = Liabilities.find({type:"Card"}).count();
        Liabilities.insert({
            description: null, //"Credit Card " + (creditCardCount + 1).toString(),
            limit: null,
            owing: null,
            type: "Card",
            scenarioId: this.scenario._id
        });
        $(".limit:last").focus().select();

    },

    'click .delete': function(e) {
        e.preventDefault();
        Liabilities.remove(this._id);

    },
    'change input': function(e,t){
        var $tr = $(e.target).parents("tr")
        var description = $tr.find(".description").val();
        var limit = $tr.find(".limit").val();
        var owing = $tr.find(".owing").val();
        //alert(description + "\n"+ limit + "\n" + owing);
        Liabilities.update({_id:this._id},{$set: {
            description: description,
            limit: limit,
            owing: owing
        }});
        toastr.success('Credit card saved');
    }
});

Template.creditCards.hasCreditCards = function(){
    return Liabilities.find().count() > 0;
}