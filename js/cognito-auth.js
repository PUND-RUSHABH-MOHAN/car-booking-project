/*global AmazonCognitoIdentity $ _config*/
(function() {
    var poolData = {
        UserPoolId: _config.cognito.userPoolId,
        ClientId: _config.cognito.userPoolClientId
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    function register(email, password, onSuccess, onFailure) {
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'email', Value: email });
        userPool.signUp(email, password, [attributeEmail], null, function(err, result) {
            if (!err) {
                onSuccess(result);
            } else {
                onFailure(err);
            }
        });
    }

    function handleRegister(event) {
        event.preventDefault();
        var email = $('#emailInputRegister').val();
        var password = $('#passwordInputRegister').val();
        var password2 = $('#password2InputRegister').val();

        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }
        register(email, password,
          function success(result) {
              alert('Registration successful! Check your email for a code to verify your account.');
              window.location.href = 'verify.html';
          },
          function failure(err) {
              alert(err.message || JSON.stringify(err));
          }
        );
    }

    $(function() {
        $('#registrationForm').submit(handleRegister);
    });
})();
