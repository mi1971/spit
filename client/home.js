Meteor.subscribe("nothing");

//Template.listActivity.helpers({
//    activities: function() {
//        return Activities.find({});
//    }
//});

//tempData = [{note:"Hello1"}, {note: "Hello2"}];



//Template.activityList.activities = function(){
//    return Activities.find({}, {sort:{createdAt:-1}});
//}

Template.userMenu.events({
    'click #logout': function() {
        //alert('logging out');
        Meteor.logout();
    }
    //,
//    'click #login': function() {
//        //alert('logging in');
//        Meteor.loginWithGoogle({
//            requestPermissions: ['email', 'profile']
//        }, function (err) {
//            if(err) {
//                //error handling
//                alert('error : '+ err);
//                throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
//            } else {
//                //show an alert
//                // alert('logged in');
//            }
//        });
//    }
})

Template.activityAdd.events({
    'keypress #note': function (e, t) {
        if(e.which === 13){
            var note = $('#note').val();
            Activities.insert({
                note: note
            })

            $('#note').val('');
            return false;
            //$('#note').focus();

        }

        if(e.which === 32){
            var note = $('#note').val();
            if(note.substr(0,5).toLocaleLowerCase() == 'lorem')
                $('#note').val('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        }
    }
})

Template.activityItem.events({
    "click .expand-activity": function (e, t) {
        var el = t.find('.activity-expanded');
        UI.insert( UI.render( Template.activityExpanded ), el );
    }
});

Template.activityItem.helpers({
    selected: function() {
        if(this._id == Session.get("selectedActivity"))
            return "selected";
        else
            return "";
    }
});

Template.activityButtons.helpers({
    hidden: function() {
        if(this._id == Session.get("selectedActivity"))
            return "";
        else
            return "hidden";
    }
});



