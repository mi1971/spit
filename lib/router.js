Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('profile');
    this.route('login');
    this.route('forgot-password');
    this.route('signup');
    this.route('applications');
})