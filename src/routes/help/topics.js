import { faqstrings } from '../../strings';

export const topics = [
  {
    title: faqstrings.paymentQueries.title,
    questions: [
      {
        question: faqstrings.paymentQueries.paymentMethods,
        subQuestions: [
          {
            subQuestion: faqstrings.paymentQueries.howDoIPayQ,
            view: {
              text: faqstrings.paymentQueries.howDoIPayA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.isCashEverAcceptedQ,
            view: {
              text: faqstrings.paymentQueries.isCashEverAcceptedA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.canIPayWithPaypalQ,
            view: {
              text: faqstrings.paymentQueries.canIPayWithPaypalA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.isMyPaymentInformationSafeQ,
            view: {
              text: faqstrings.paymentQueries.isMyPaymentInformationSafeA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.imHavingDifficultyRegisteringMyCreditCardQ,
            view: {
              text: faqstrings.paymentQueries.imHavingDifficultyRegisteringMyCreditCardA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.howDoIChangeMyRegisteredPaymentMethodQ,
            view: {
              text: faqstrings.paymentQueries.howDoIChangeMyRegisteredPaymentMethodA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.whyWasMyPaymentDeclinedQ,
            view: {
              text: faqstrings.paymentQueries.whyWasMyPaymentDeclinedA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.iHaveADifferentPaymentQueryQ,
            view: {
              text: faqstrings.paymentQueries.iHaveADifferentPaymentQueryA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        question: faqstrings.paymentQueries.unknownCharges,
        subQuestions: [
          {
            subQuestion: faqstrings.paymentQueries.IDontUnderstandMyFinalBillQ,
            view: {
              text: faqstrings.paymentQueries.IDontUnderstandMyFinalBillA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.whyWasIChargedForTollsQ,
            view: {
              text: faqstrings.paymentQueries.whyWasIChargedForTollsA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.iHaveADuplicateChargeQ,
            view: {
              text: faqstrings.paymentQueries.iHaveADuplicateChargeA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.whyDoIHaveaPendingChargeQ,
            view: {
              text: faqstrings.paymentQueries.whyDoIHaveaPendingChargeA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.whyWasIChargedACancellationFeeQ,
            view: {
              text: faqstrings.paymentQueries.whyWasIChargedACancellationFeeA
            }
          }
        ]
      },
      {
        question: faqstrings.paymentQueries.promos,
        subQuestions: [
          {
            subQuestion: faqstrings.paymentQueries.howDoesRenfeMilesWorkQ,
            view: {
              text: faqstrings.paymentQueries.howDoesRenfeMilesWorkA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.howDoIPayWithMyRenfeMilesQ,
            view: {
              text: faqstrings.paymentQueries.howDoIPayWithMyRenfeMilesA
            }
          },
          {
            subQuestion: faqstrings.paymentQueries.whereCanIViewMyRenfeMilesBalanceQ,
            view: {
              text: faqstrings.paymentQueries.whereCanIViewMyRenfeMilesBalanceQ
            }
          }
        ]
      }
    ]
  },
  {
    title: faqstrings.accountSettings.title,
    questions: [
      {
        question: faqstrings.accountSettings.settingUpAnAccount,
        subQuestions: [
          {
            subQuestion: faqstrings.accountSettings.howDoWeWorkQ,
            view: {
              text: faqstrings.accountSettings.howDoWeWorkA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.howDoISetUpAnAccountQ,
            view: {
              text: faqstrings.accountSettings.howDoISetUpAnAccountA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.addingPaymentMethodsQ,
            view: {
              text: faqstrings.accountSettings.addingPaymentMethodsA
            }
          }
        ]
      },
      {
        question: faqstrings.accountSettings.updatingAccountInformation,
        subQuestions: [
          {
            subQuestion: faqstrings.accountSettings.howDoIUpdateMyMobileNumberAndEmailAddressQ,
            view: {
              text: faqstrings.accountSettings.howDoIUpdateMyMobileNumberAndEmailAddressA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.howDoIManageEmailsSMSAndPushNotificationsQ,
            view: {
              text: faqstrings.accountSettings.howDoIManageEmailsSMSAndPushNotificationsA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.howDoIChangeMyRegisteredPaymentDetailsQ,
            view: {
              text: faqstrings.accountSettings.howDoIChangeMyRegisteredPaymentDetailsA
            }
          }
        ]
      },
      {
        question: faqstrings.accountSettings.accountIssues,
        subQuestions: [
          {
            subQuestion: faqstrings.accountSettings.iCantLogOnToMyAccountQ,
            view: {
              text: faqstrings.accountSettings.iCantLogOnToMyAccountA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.accountSettings.iForgotMyPasswordQ,
            view: {
              text: faqstrings.accountSettings.iForgotMyPasswordA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.thePasswordResetLinkIsNotWorkingQ,
            view: {
              text: faqstrings.accountSettings.thePasswordResetLinkIsNotWorkingA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.iCannotVerifyMyPhoneNumberQ,
            view: {
              text: faqstrings.accountSettings.iCannotVerifyMyPhoneNumberA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.accountSettings.theAppKeepsCrashingOrTheAppWontRespondQ,
            view: {
              text: faqstrings.accountSettings.theAppKeepsCrashingOrTheAppWontRespondA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.accountSettings.myAccountWasSuspendedQ,
            view: {
              text: faqstrings.accountSettings.myAccountWasSuspendedA,

              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        question: faqstrings.accountSettings.other,
        subQuestions: [
          {
            subQuestion: faqstrings.accountSettings.iWantToDeleteMyAccountQ,
            view: {
              text: faqstrings.accountSettings.iWantToDeleteMyAccountA
            }
          },
          {
            subQuestion: faqstrings.accountSettings.iThinkMyAccountHasBeenHackedQ,
            view: {
              text: faqstrings.accountSettings.iThinkMyAccountHasBeenHackedA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.accountSettings.iHaveADifferentIssueQ,
            view: {
              text: faqstrings.accountSettings.iHaveADifferentIssueA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  {
    title: faqstrings.howWeWork.Title,
    questions: [
      {
        question: faqstrings.howWeWork.hailingATaxi,
        subQuestions: [
          {
            subQuestion: faqstrings.howWeWork.howDoIHailATaxiQ,
            view: {
              text: faqstrings.howWeWork.howDoIHailATaxiA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.howDoIPayWithMyRenfeMilesQ,
            view: {
              text: faqstrings.howWeWork.howDoIPayWithMyRenfeMilesA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.canIHailSeveralTaxisAtOnceQ,
            view: {
              text: faqstrings.howWeWork.canIHailSeveralTaxisAtOnceA
            }
          },
          {
            subQuestion:
              faqstrings.howWeWork.iDontHaveSufficientFundsOnMyRegisteredPaymentMethodToPayQ,
            view: {
              text: faqstrings.howWeWork.iDontHaveSufficientFundsOnMyRegisteredPaymentMethodToPayA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.myCurrentLocationIsNotCorrectQ,
            view: {
              text: faqstrings.howWeWork.myCurrentLocationIsNotCorrectA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.canIBringMyGuideDogQ,
            view: {
              text: faqstrings.howWeWork.canIBringMyGuideDogA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.canIBringSmallPetsQ,
            view: {
              text: faqstrings.howWeWork.canIBringSmallPetsA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.whatIsTheCancellationPolicyQ,
            view: {
              text: faqstrings.howWeWork.whatIsTheCancellationPolicyA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.howWillIKnowItsMyTaxiQ,
            view: {
              text: faqstrings.howWeWork.howWillIKnowItsMyTaxiA,
              form: {
                textInputs: [
                  {
                    textInput: faqstrings.name,
                    ref: 'name'
                  },
                  {
                    textInput: faqstrings.email,
                    ref: 'email'
                  },
                  {
                    textInput: faqstrings.leaveUsAQuestion,
                    ref: 'question'
                  }
                ]
              }
            }
          },
          {
            subQuestion: faqstrings.howWeWork.whatDoIDoIfICantFindMyTaxiQ,
            view: {
              text: faqstrings.howWeWork.whatDoIDoIfICantFindMyTaxiA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.whatIfMyTaxiIsLateQ,
            view: {
              text: faqstrings.howWeWork.whatIfMyTaxiIsLateA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.whoAreTheDriversQ,
            view: {
              text: faqstrings.howWeWork.whoAreTheDriversA
            }
          }
        ]
      },
      {
        question: faqstrings.howWeWork.duringYourTrip,
        subQuestions: [
          {
            subQuestion: faqstrings.howWeWork.theDriverIsAskingMeForMoreMoneyQ,
            view: {
              text: faqstrings.howWeWork.theDriverIsAskingMeForMoreMoneyA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.doIHaveToLeaveATipQ,
            view: {
              text: faqstrings.howWeWork.doIHaveToLeaveATipA
            }
          }
        ]
      },
      {
        question: faqstrings.howWeWork.afterYourTrip,
        subQuestions: [
          {
            subQuestion: faqstrings.howWeWork.howDoIRateMyTripQ,
            view: {
              text: faqstrings.howWeWork.howDoIRateMyTripA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.howDoIGetAReceiptQ,
            view: {
              text: faqstrings.howWeWork.howDoIGetAReceiptA
            }
          },
          {
            subQuestion: faqstrings.howWeWork.canITipMyDriverViaTheAppQ,
            view: {
              text: faqstrings.howWeWork.canITipMyDriverViaTheAppA
            }
          }
        ]
      }
    ]
  }
];
