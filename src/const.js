
/*
 * Error context
 */
export const ERR_CTX_ANY = 0;

export const ERR_CTX_INIT_BOOKING_FLOW = 10;
export const ERR_CTX_RESTORE_BOOKING_FLOW = 11;

export const ERR_CTX_USER_LOCATION = 20;
export const ERR_CTX_REVERSE_GEOCODE = 21;
export const ERR_CTX_SEARCH_ROUTE = 22;

export const ERR_CTX_SEARCH_SERVICES = 30;
export const ERR_CTX_SEARCH_AVAILABILITY = 31;
export const ERR_CTX_SEARCH_FLEET = 32;
export const ERR_CTX_GET_AVAILABILITIES = 33;
export const ERR_CTX_SEARCH_PRICE = 34;
export const ERR_CTX_CREATE_ORDER = 35;
export const ERR_CTX_CANCEL_ORDER = 36;
export const ERR_CTX_COMPLETE_ORDER = 37;
export const ERR_CTX_GET_ORDER_STATUS = 38;
export const ERR_CTX_RATE_ORDER = 39;
export const ERR_CTX_GET_ACTIVE_ORDERS = 40;

export const ERR_CTX_USER_REGISTER = 60;
export const ERR_CTX_USER_VERIFY = 61;
export const ERR_CTX_USER_ENABLE = 62;
export const ERR_CTX_USER_LOGIN = 63;
export const ERR_CTX_USER_PASSWORD_RESET = 64;
export const ERR_CTX_USER_SETUP_PARTNER_PROGRAM = 65;
export const ERR_CTX_USER_SIGN_IN_PARTNER_PROGRAM = 66;
export const ERR_CTX_USER_UPDATE_CREDIT_CARD = 67;
export const ERR_CTX_USER_GET_PAYMENT_OPTIONS = 68;
export const ERR_CTX_USER_GET_USER_PROFILE = 69;
export const ERR_CTX_USER_UPDATE_USER_PROFILE = 70;
export const ERR_CTX_USER_UPDATE_USER_CLIENT = 71;

/*
 * Client API errors.
 */
export const CLIENT_ERR_INVALID_JSON = 4001;
export const CLIENT_ERR_SECRET_KEY_MISSING = 4100;
export const CLIENT_ERR_INVALID_SECRET_KEY = 4101;
export const CLIENT_ERR_RATE_LIMIT_EXCEEDED = 4102;

export const CLIENT_ERR_USER_INVALID_VERIFICATION_CODE = 4002;
export const CLIENT_ERR_USER_NOT_VERIFIED = 4003;
export const CLIENT_ERR_USER_INVALID_PAYMENT_OPTION = 4004;
export const CLIENT_ERR_USER_NOT_ENABLED = 4006;
export const CLIENT_ERR_USER_INVALID_PHONE_NUMBER = 4007;
export const CLIENT_ERR_USER_INVALID_CREDENTIALS = 4008;
export const CLIENT_ERR_USER_NOT_FOUND = 4009;
export const CLIENT_ERR_USER_TOKEN_INVALID = 4010;
export const CLIENT_ERR_USER_BLACKLISTED = 4011;
export const CLIENT_ERR_USER_INSECURE_PASSWORD = 4012;
export const CLIENT_ERR_USER_ALREADY_REGISTERED = 4013;
export const CLIENT_ERR_USER_EMAIL_ADDR_MISSING = 4014;

export const CLIENT_ERR_AVAILABILITY_NOT_FOUND = 4050;
export const CLIENT_ERR_ORDER_NOT_FOUND = 4051;
export const CLIENT_ERR_ORDER_STATUS_NOT_FOUND = 4052;
export const CLIENT_ERR_USER_CANCELLATION_NOT_ALLOWED = 4053;
export const CLIENT_ERR_API_NOT_SUPPORTED = 4054;
export const CLIENT_ERR_ORDER_INVALID_STATUS = 4055;

export const WS_ERR_PARTNER_API_FAILURE = 6020;

/*
 * Client high level errors.
 */
export const ERR_REQUEST_TIMEOUT = 10003;
export const ERR_REQUEST_NETWORK_ERROR = 10004;
export const ERR_REQUEST_CANCELLED = 10005;

export const ERR_NO_LOCATION = 1000;
export const ERR_NO_ADDRESS = 1001;
export const ERR_NO_ROUTE = 1002;

export const ERR_PICKUP_OUT_OF_RANGE = 1003;
export const ERR_DROPOFF_OUT_OF_RANGE = 1004;

export const HTTP_ERR_INTERNAL_ERROR = 500;
export const HTTP_ERR_BAD_GATEWAY = 502;
export const HTTP_ERR_FORBIDDEN = 403;
export const HTTP_ERR_NOT_FOUND = 404;
export const HTTP_ERR_TOO_MANY_REQUESTS = 429;

export const ERR_NOT_AUTHORISED = 1050;

export const ERR_INVALID_PHONE_NUMBER = 'ERR_INVALID_PHONE_NUMBER';
export const ERR_INVALID_VERIFICATION_CODE = 'ERR_INVALID_VERIFICATION_CODE';

export const ERR_CANCEL_FAILED = 'ERR_CANCEL_FAILED';

export const ERR_USER_PROFILE_GET_FAILED = 'ERR_USER_PROFILE_GET_FAILED';

/*
 * Global Redux actions
 */
export const REQUEST_CANCELLED = 'REQUEST_CANCELLED';

/*
 * Client API timeouts
 */
export const DEFAULT_REQUEST_TIMEOUT = 8000;
export const AVAILABILITY_SEARCH_TIMEOUT = 15000;
export const PARTNER_SIGN_IN_TIMEOUT = 30000;

/*
 * Search ranges
 * Min range defines the minimum origin change (km) until services call is dispatched.
 * Max range defines the maximum distance (km) between pickup and destination.
 */
export const MIN_RANGE = 0.25;
export const MAX_RANGE = 300;

/*
 * Global actions
 */
export const SEND_FEEDBACK = 'SEND_FEEDBACK';

/*
 * Other
 */
export const REGEX_VALID_PHONE_NUMBER = /^(?:\+|00|011)(?:[. ()-]*\d){11,12}[. ()-]*$/;
export const REGEX_VALID_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d+-_@#$%&!?.]{8,}$/;
export const REGEX_VALID_VERIFICATION_CODE = /^[0-9]{4}$/;
export const REGEX_VALID_EMAIL = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
