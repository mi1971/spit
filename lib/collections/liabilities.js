Liabilities = new Meteor.Collection("liabilities");



//Liabilities.deny({insert: function (userId, doc) {
//    //doc.createdAt = new Date();
//    return false;
//}})

Liabilities.allow({insert: function (userId, doc) {
    return true;
}})

Liabilities.allow({update: function (userId, doc) {
    return true;
}})

Liabilities.allow({remove: function (userId, doc) {
    return true;
}})

Meteor.startup(function () {

    return Meteor.methods({

        removeAllLiabilities: function () {

            return Liabilities.remove({});

        }

    });

});

Liabilities.before.insert(function (userId, doc) {
    doc.createdAt = Date.now();
    doc.createdBy = userId;

//    if(doc.payment){
//        doc.monthlyPayment = convertToMontly(doc.payment);
//    }
});

Liabilities.before.update(function (userId, doc, fieldNames, modifier, options) {
    modifier.$set = modifier.$set || {};
    if(modifier.$set.payment)
        modifier.$set.monthlyPayment = convertToMonthly(modifier.$set.payment);
});

function convertToMonthly(figure){
    var amt = parseFloat(figure);
    if(figure.indexOf("w") > -1)
        return parseInt(amt * 52 / 12);
    if(figure.indexOf("f") > -1)
        return parseInt(amt * 26 / 12);
    if(figure.indexOf("y") > -1)
        return parseInt(amt / 12);

    return parseInt(amt);
}