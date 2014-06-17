Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('profile');
    this.route('login');
    this.route('forgot-password');
    this.route('signup');
    this.route('contacts');
    this.route('applications');
    this.route('activity');
    this.route('uploadContacts', {path: 'upload-contacts'});
})