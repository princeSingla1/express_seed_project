'use strict';

var SERVER = {
    APP_NAME: 'Your App Name',
    PORTS: {
        HAPI: 8000
    },
    TOKEN_EXPIRATION_IN_MINUTES: 600,
    JWT_SECRET_KEY: 'sUPerSeCuREKeY&^$^&$^%$^%7782348723t4872t34Ends',
    GOOGLE_API_KEY : 'AIzaSyBO2bhirASSGwMDzaO64hisl7CMDX1_Whg',
    COUNTRY_CODE : '+91',
    MAX_DISTANCE_RADIUS_TO_SEARCH : '1',
    THUMB_WIDTH : 50,
    THUMB_HEIGHT : 50,
    BASE_DELIVERY_FEE : 25,
    COST_PER_KM: 9, // In USD
    DOMAIN_NAME : 'http://localhost:8000/',
    SUPPORT_EMAIL : 'support@click-labs.com'
};

var DATABASE = {
    PROFILE_PIC_PREFIX : {
        ORIGINAL : 'profilePic_',
        THUMB : 'profileThumb_'
    },
    LOGO_PREFIX : {
        ORIGINAL : 'logo_',
        THUMB : 'logoThumb_'
    },
    DOCUMENT_PREFIX : 'document_',
    USER_ROLES: {
        ADMIN: 'ADMIN',
        CUSTOMER: 'CUSTOMER',
        DRIVER: 'DRIVER'
    },
    FILE_TYPES: {
        LOGO: 'LOGO',
        DOCUMENT: 'DOCUMENT',
        OTHERS: 'OTHERS'
    },
    VEHICLE_TYPE: {
        BICYCLE: 'BICYCLE',
        SCOOTER: 'SCOOTER',
        CAR: 'CAR'
    },
    DEVICE_TYPES: {
        IOS: 'IOS',
        ANDROID: 'ANDROID'
    },
    LANGUAGE: {
        EN: 'EN',
        ES_MX: 'ES_MX'
    },
    PAYMENT_OPTIONS : {
        CREDIT_DEBIT_CARD : 'CREDIT_DEBIT_CARD',
        PAYPAL : 'PAYPAL',
        BITCOIN : 'BITCOIN',
        GOOGLE_WALLET : 'GOOGLE_WALLET',
        APPLE_PAY : 'APPLE_PAY',
        EIYA_CASH : 'EIYA_CASH'
    }
};

var STATUS_MSG = {
    ERROR: {
        INVALID_USER_PASS: {
            statusCode:401,
            type: 'INVALID_USER_PASS',
            customMessage : 'Invalid username or password'
        },
        TOKEN_ALREADY_EXPIRED: {
            statusCode:401,
            customMessage : 'Token Already Expired',
            type : 'TOKEN_ALREADY_EXPIRED'
        },
        DB_ERROR: {
            statusCode:400,
            customMessage : 'DB Error : ',
            type : 'DB_ERROR'
        },
        INVALID_ID: {
            statusCode:400,
            customMessage : 'Invalid Id Provided : ',
            type : 'INVALID_ID'
        },
        APP_ERROR: {
            statusCode:400,
            customMessage : 'Application Error',
            type : 'APP_ERROR'
        },
        ADDRESS_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Address not found',
            type : 'ADDRESS_NOT_FOUND'
        },
        SAME_ADDRESS_ID: {
            statusCode:400,
            customMessage : 'Pickup and Delivery Address Cannot Be Same',
            type : 'SAME_ADDRESS_ID'
        },
        PICKUP_ADDRESS_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Pickup Address not found',
            type : 'PICKUP_ADDRESS_NOT_FOUND'
        },
        DELIVERY_ADDRESS_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Delivery Address not found',
            type : 'DELIVERY_ADDRESS_NOT_FOUND'
        },
        IMP_ERROR: {
            statusCode:500,
            customMessage : 'Implementation Error',
            type : 'IMP_ERROR'
        },
        APP_VERSION_ERROR: {
            statusCode:400,
            customMessage : 'One of the latest version or updated version value must be present',
            type : 'APP_VERSION_ERROR'
        },
        INVALID_TOKEN: {
            statusCode:401,
            customMessage : 'Invalid token provided',
            type : 'INVALID_TOKEN'
        },
        INVALID_CODE: {
            statusCode:400,
            customMessage : 'Invalid Verification Code',
            type : 'INVALID_CODE'
        },
        DEFAULT: {
            statusCode:400,
            customMessage : 'Error',
            type : 'DEFAULT'
        },
        PHONE_NO_EXIST: {
            statusCode:400,
            customMessage : 'Phone No Already Exist',
            type : 'PHONE_NO_EXIST'
        },
        EMAIL_EXIST: {
            statusCode:400,
            customMessage : 'Email Already Exist',
            type : 'EMAIL_EXIST'
        },
        DUPLICATE: {
            statusCode:400,
            customMessage : 'Duplicate Entry',
            type : 'DUPLICATE'
        },
        DUPLICATE_ADDRESS: {
            statusCode:400,
            customMessage : 'Address Already Exist',
            type : 'DUPLICATE_ADDRESS'
        },
        UNIQUE_CODE_LIMIT_REACHED: {
            statusCode:400,
            customMessage : 'Cannot Generate Unique Code, All combinations are used',
            type : 'UNIQUE_CODE_LIMIT_REACHED'
        },
        INVALID_REFERRAL_CODE: {
            statusCode:400,
            customMessage : 'Invalid Referral Code',
            type : 'INVALID_REFERRAL_CODE'
        },
        FACEBOOK_ID_PASSWORD_ERROR: {
            statusCode:400,
            customMessage : 'Only one field should be filled at a time, either facebookId or password',
            type : 'FACEBOOK_ID_PASSWORD_ERROR'
        },
        INVALID_EMAIL: {
            statusCode:400,
            customMessage : 'Invalid Email Address',
            type : 'INVALID_EMAIL'
        },
        PASSWORD_REQUIRED: {
            statusCode:400,
            customMessage : 'Password is required',
            type : 'PASSWORD_REQUIRED'
        },
        INVALID_COUNTRY_CODE: {
            statusCode:400,
            customMessage : 'Invalid Country Code, Should be in the format +52',
            type : 'INVALID_COUNTRY_CODE'
        },
        INVALID_PHONE_NO_FORMAT: {
            statusCode:400,
            customMessage : 'Phone no. cannot start with 0',
            type : 'INVALID_PHONE_NO_FORMAT'
        },
        COUNTRY_CODE_MISSING: {
            statusCode:400,
            customMessage : 'You forgot to enter the country code',
            type : 'COUNTRY_CODE_MISSING'
        },
        INVALID_PHONE_NO: {
            statusCode:400,
            customMessage : 'Phone No. & Country Code does not match to which the OTP was sent',
            type : 'INVALID_PHONE_NO'
        },
        PHONE_NO_MISSING: {
            statusCode:400,
            customMessage : 'You forgot to enter the phone no.',
            type : 'PHONE_NO_MISSING'
        },
        NOTHING_TO_UPDATE: {
            statusCode:400,
            customMessage : 'Nothing to update',
            type : 'NOTHING_TO_UPDATE'
        },
        NOT_FOUND: {
            statusCode:400,
            customMessage : 'User Not Found',
            type : 'NOT_FOUND'
        },
        INVALID_RESET_PASSWORD_TOKEN: {
            statusCode:400,
            customMessage : 'Invalid Reset Password Token',
            type : 'INVALID_RESET_PASSWORD_TOKEN'
        },
        INCORRECT_PASSWORD: {
            statusCode:401,
            customMessage : 'Incorrect Password',
            type : 'INCORRECT_PASSWORD'
        },
        EMPTY_VALUE: {
            statusCode:400,
            customMessage : 'Empty String Not Allowed',
            type : 'EMPTY_VALUE'
        },
        PHONE_NOT_MATCH: {
            statusCode:400,
            customMessage : "Phone No. Doesn't Match",
            type : 'PHONE_NOT_MATCH'
        },
        SAME_PASSWORD: {
            statusCode:400,
            customMessage : 'Old password and new password are same',
            type : 'SAME_PASSWORD'
        },
        ACTIVE_PREVIOUS_SESSIONS: {
            statusCode:400,
            customMessage : 'You already have previous active sessions, confirm for flush',
            type : 'ACTIVE_PREVIOUS_SESSIONS'
        },
        EMAIL_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email Address Already Exists',
            type : 'EMAIL_ALREADY_EXIST'
        },
        ERROR_PROFILE_PIC_UPLOAD: {
            statusCode:400,
            customMessage : 'Profile pic is not a valid file',
            type : 'ERROR_PROFILE_PIC_UPLOAD'
        },
        PHONE_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Phone No. Already Exists',
            type : 'PHONE_ALREADY_EXIST'
        },
        EMAIL_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Email Not Found',
            type : 'EMAIL_NOT_FOUND'
        },
        FACEBOOK_ID_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Facebook Id Not Found',
            type : 'FACEBOOK_ID_NOT_FOUND'
        },
        PHONE_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Phone No. Not Found',
            type : 'PHONE_NOT_FOUND'
        },
        INCORRECT_OLD_PASS: {
            statusCode:400,
            customMessage : 'Incorrect Old Password',
            type : 'INCORRECT_OLD_PASS'
        },
        UNAUTHORIZED: {
            statusCode:401,
            customMessage : 'You are not authorized to perform this action',
            type : 'UNAUTHORIZED'
        }

    },
    SUCCESS: {
        CREATED: {
            statusCode:201,
            customMessage : 'Created Successfully',
            type : 'CREATED'
        },
        DEFAULT: {
            statusCode:200,
            customMessage : 'Success',
            type : 'DEFAULT'
        },
        UPDATED: {
            statusCode:200,
            customMessage : 'Updated Successfully',
            type : 'UPDATED'
        },
        LOGOUT: {
            statusCode:200,
            customMessage : 'Logged Out Successfully',
            type : 'LOGOUT'
        },
        DELETED: {
            statusCode:200,
            customMessage : 'Deleted Successfully',
            type : 'DELETED'
        }
    }
};


var swaggerDefaultResponseMessages = [
    {code: 200, message: 'OK'},
    {code: 400, message: 'Bad Request'},
    {code: 401, message: 'Unauthorized'},
    {code: 404, message: 'Data Not Found'},
    {code: 500, message: 'Internal Server Error'}
];

var SCREEN_TO_SHOW = {
    HOMEPAGE : 'HOMEPAGE',
    TRACKING : 'TRACKING',
    FEEDBACK : 'FEEDBACK'
};

var notificationMessages = {
    verificationCodeMsg: 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}',
    registrationEmail: {
        emailMessage : "Dear {{user_name}}, <br><br> Please  <a href='{{verification_url}}'>click here</a> to verify your email address",
        emailSubject: "Welcome to Seed Project"
    },
    contactDriverForm: {
        emailMessage : "A new driver has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Vehicle Type : {{vehicleType}} <br><br> Bank Account : {{bankAccountBoolean}} <br><br> Heard From : {{heardFrom}}",
        emailSubject: "New Driver Contact Request"
    },
    contactBusinessForm: {
        emailMessage : "A new business has showed interest <br><br> Details : <br><br> Name : {{fullName}} <br><br> Email : {{email}} <br><br> Phone No : {{phoneNo}} <br><br> Business Name: {{businessName}} <br><br> Business Address: {{businessAddress}}  <br><br> Delivery Service : {{ownDeliveryService}} <br><br> Heard From : {{heardFrom}}",
        emailSubject: "New Business Contact Request"
    },
    forgotPassword: {
        emailMessage : "Dear {{user_name}}, <br><br>  Your reset password token is <strong>{{password_reset_token}}</strong> , <a href='{{password_reset_link}}'> Click Here </a> To Reset Your Password",
        emailSubject: "Password Reset Notification For Seed Project"
    }
};

var languageSpecificMessages = {
    verificationCodeMsg : {
        EN : 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}',
        ES_MX : 'Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}'
    }
};

var APP_CONSTANTS = {
    SERVER: SERVER,
    DATABASE: DATABASE,
    SCREEN_TO_SHOW : SCREEN_TO_SHOW,
    STATUS_MSG: STATUS_MSG,
    notificationMessages: notificationMessages,
    languageSpecificMessages: languageSpecificMessages,
    swaggerDefaultResponseMessages: swaggerDefaultResponseMessages
};

module.exports = APP_CONSTANTS;