import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { createSerializer } from "enzyme-to-json";
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'; 

Amplify.configure(awsExports);

var authenticationData = {
    Username : 'username',
    Password : 'password',
};
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
var poolData = {
    UserPoolId : 'us-west-2_zEstHS3gA', // Your user pool id here
    ClientId : 'cognito9a63bd57_app_client' // Your client id here
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
    Username : 'username',
    Pool : userPool
};
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
               console.log('Successfully logged!');
            }
        });
    },

    onFailure: function(err) {
        console.log(JSON.stringify(err));
    },

});

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
