export const stateFilters = [
  /*
   * User token is stored whenever a saved session exists. The token is stored at
   * the end of the signup flow (ENABLE_SUCCESS) or login (LOGIN_SUCCESS) and
   * removed from storage on logout (LOGOUT_SUCCESS)
   */
  ['userState', 'userToken'],

  /*
   * User id
   */
  ['userState', 'userId'],

  /*
   * Client key is a random key generated upon signing in to partner services and
   * used whenever partner credentials needs to be accerssed.
   */
  ['userState', 'clientKey'],

  /*
   * User enabled state is set when the signup is complete (ENABLE_SUCCESS)
   */
  ['userState', 'isUserOnboarded'],

  /*
  * User enabled state is set when the signup is complete (ENABLE_SUCCESS)
  */
  ['userState', 'isUserEnabled'],

  /*
   * Whether to use of sms, push notifications or no messages for booking notifications.
   */
  ['userState', 'notificationType'],

  ['userState', 'lastPath'],

  ['historyState', 'orders'],

  ['helpState', 'tripObj'],

  ['helpState', 'topicObj'],

  ['helpState', 'subQuestionObj'],

  ['helpState', 'helpDetailsObj']

];

export const eventFilters = [
  'LOGIN_SUCCESS',
  'LOGOUT_REQUEST',
  'GET_ORDER_HISTORY_SUCCESS',
  'UNSET_ORDER_HISTORY',
  'SET_LAST_PATH',
  'SAVE_HELP_STATE'
];