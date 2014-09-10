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
    'change input,select': function(e,t){
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