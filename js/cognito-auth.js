var WildRydes = window.WildRydes || {};

(function ($) {
    var poolData = {
        UserPoolId: _config.cognito.userPoolId,
        ClientId: _config.cognito.userPoolClientId
    };

    if (!(_config.cognito.userPoolId && _config.cognito.userPoolClientId && _config.cognito.region)) {
        // Show a warning if config is incomplete
        if (typeof $ !== "undefined") {
            $('#noCognitoMessage').show();
        } else {
            alert("No Cognito User Pool Configured!");
        }
        return;
    }

    // Place your Cognito login, register, verification JS logic here

}(jQuery));
