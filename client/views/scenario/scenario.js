//Template.scenario.rendered = function() {
//    // $('.selector').action();
//}
//
//Template.scenario. = function() {
//    // do something...
//}

Template.commitments.rendered = function() {
    $('select.commitment-type').each(function(){
        alert ('hello')
    }) //.val()) //" option").each(function() { alert(this.text); this.selected = (this.text == "Personal Loan"); });
}

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


// Commitments

Template.commitments.events({
    'click #addCommitment': function(e) {
        e.preventDefault();
//        debugger;
//        return;
        var commitmentCount = Liabilities.find({type:"Commitment"}).count();
        Liabilities.insert({
            description: null, //"Credit Card " + (creditCardCount + 1).toString(),
            limit: null,
            owing: null,
            type: "Commitment",
            scenarioId: this.scenario._id
        });
        //$(".limit:last").focus().select();

    },

    'click .delete': function(e) {
        e.preventDefault();
        Liabilities.remove(this._id);

    },
    'change input': function(e,t){
        var $tr = $(e.target).parents("tr")
        var description = $tr.find(".description").val();
        var payment = $tr.find(".payment").val();
        var owing = $tr.find(".owing").val();
        //alert(description + "\n"+ limit + "\n" + owing);
        Liabilities.update({_id:this._id},{$set: {
            description: description,
            payment: payment,
            owing: owing
        }});
        toastr.success('Commitment saved');
    }
});

Template.commitments.hasCommitments = function(){
    return Liabilities.find().count() > 0;
}

Template.commitments.commitmentList = function() {
    return ["one", "two", "three"];
    return Lookups.find().fetch().map(function(it){ return it.name; });
};

Template.commitments.isSelected = function(str){

    if(str == this.description)
         return "selected"
    else
        return "";
}

