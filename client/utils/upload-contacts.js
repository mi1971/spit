Template.uploadContacts.events({
    'click #btnUpload': function() {
        filepicker.pick(function(inkblob){
            filepicker.read(inkblob, function(data){
                alert(data);
            });
        });
    }
})