SinglePageLogin.config({
    loginTitle: 'Welcome to Snap',
    signupTitle: 'Signing Up is Easy',
    forgotPasswordTitle: 'Retrieve Password',
    canRetrievePassword: true,
    passwordSignupFields: 'EMAIL_ONLY',
    forbidClientAccountCreation: false,
    routeAfterLogin: '/',
    routeAfterSignUp: '/',
    forceLogin: true,
    exceptRoutes: ['home','about']
});