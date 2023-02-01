import { GraphqlQueryError } from "@shopify/shopify-api";
import shopify from "./shopify.js";

const CREATE_DELIVERY_PROFILE_MUTATION = `
    mutation deliveryProfileCreate($profile: DeliveryProfileInput!) {
        deliveryProfileCreate(profile: $profile) {
        profile {
            id
        }
        userErrors {
            field
            message
        }
        }
    }
`;

// mutation populateProduct($input: ProductInput!) {
//     productCreate(input: $input) {
//       product {
//         id
//       }
//     }
//   }

export default async function deliveryCreator(
  session,
) {
  const client = new shopify.api.clients.Graphql({ session });

  try {
      const response = await client.query({
        data: {
          query: CREATE_DELIVERY_PROFILE_MUTATION,
          variables: {
            "profile": {
            //   "conditionsToDelete": [
            //     ""
            //   ],
            //   "locationGroupsToCreate": [
            //     {
            //       "id": 1,
            //       "zonesToCreate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         "id": 1,
            //         "methodDefinitionsToCreate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": 1,
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": 1,
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": 1,
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": 1,
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               }
            //             }
            //           }
            //         ],
            //         // "methodDefinitionsToUpdate": [
            //         //   {
            //         //     "active": true,
            //         //     "conditionsToUpdate": {
            //         //       "criteria": 1.1,
            //         //       "criteriaUnit": "",
            //         //       "field": "",
            //             //   "id": 1,
            //         //       "operator": ""
            //         //     },
            //         //     "description": "",
            //             // "id": 1,
            //         //     "name": "",
            //         //     "participant": {
            //         //       "adaptToNewServices": true,
            //         //       "carrierServiceId": "",
            //         //       "fixedFee": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       },
            //             //   "id": 1,
            //         //       "participantServices": [
            //         //         {
            //         //           "active": true,
            //         //           "name": ""
            //         //         }
            //         //       ],
            //         //       "percentageOfRateFee": 1.1
            //         //     },
            //         //     // "priceConditionsToCreate": {
            //         //     //   "criteria": {
            //         //     //     "amount": "",
            //         //     //     "currencyCode": "USD"
            //         //     //   },
            //         //     //   "operator": ""
            //         //     // },
            //         //     // "rateDefinition": {
            //               "id": 1,
            //         //     //   "price": {
            //         //     //     "amount": "",
            //         //     //     "currencyCode": "USD"
            //         //     //   }
            //         //     // },
            //         //     // "weightConditionsToCreate": {
            //         //     //   "criteria": {
            //         //     //     "unit": "KILOGRAMS",
            //         //     //     "value": 1.1
            //         //     //   },
            //         //     //   "operator": ""
            //         //     // }
            //         //   }
            //         // ],
            //         // "name": ""
            //       },
            //       "zonesToUpdate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         // "id": "",
            //         // "methodDefinitionsToCreate": [
            //         //   {
            //         //     "active": true,
            //         //     "conditionsToUpdate": {
            //         //       "criteria": 1.1,
            //         //       "criteriaUnit": "",
            //         //       "field": "",
            //         //       "id": "",
            //         //       "operator": ""
            //         //     },
            //         //     "description": "",
            //         //     "id": "",
            //         //     "name": "",
            //         //     "participant": {
            //         //       "adaptToNewServices": true,
            //         //       "carrierServiceId": "",
            //         //       "fixedFee": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       },
            //         //       "id": "",
            //         //       "participantServices": [
            //         //         {
            //         //           "active": true,
            //         //           "name": ""
            //         //         }
            //         //       ],
            //         //       "percentageOfRateFee": 1.1
            //         //     },
            //         //     "priceConditionsToCreate": {
            //         //       "criteria": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       },
            //         //       "operator": ""
            //         //     },
            //         //     "rateDefinition": {
            //         //       "id": "",
            //         //       "price": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       }
            //         //     },
            //         //     "weightConditionsToCreate": {
            //         //       "criteria": {
            //         //         "unit": "KILOGRAMS",
            //         //         "value": 1.1
            //         //       },
            //         //       "operator": ""
            //         //     }
            //         //   }
            //         // ],
            //         // "methodDefinitionsToUpdate": [
            //         //   {
            //         //     "active": true,
            //         //     "conditionsToUpdate": {
            //         //       "criteria": 1.1,
            //         //       "criteriaUnit": "",
            //         //       "field": "",
            //         //       "id": "",
            //         //       "operator": ""
            //         //     },
            //         //     "description": "",
            //         //     "id": "",
            //         //     "name": "",
            //         //     "participant": {
            //         //       "adaptToNewServices": true,
            //         //       "carrierServiceId": "",
            //         //       "fixedFee": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       },
            //         //       "id": "",
            //         //       "participantServices": [
            //         //         {
            //         //           "active": true,
            //         //           "name": ""
            //         //         }
            //         //       ],
            //         //       "percentageOfRateFee": 1.1
            //         //     },
            //         //     "priceConditionsToCreate": {
            //         //       "criteria": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       },
            //         //       "operator": ""
            //         //     },
            //         //     "rateDefinition": {
            //         //       "id": "",
            //         //       "price": {
            //         //         "amount": "",
            //         //         "currencyCode": "USD"
            //         //       }
            //         //     },
            //         //     "weightConditionsToCreate": {
            //         //       "criteria": {
            //         //         "unit": "KILOGRAMS",
            //         //         "value": 1.1
            //         //       }
            //         //     }
            //         //   }
            //         // ],
            //         // "name": ""
            //       }
            //     }
            //   ],
            //   "locationGroupsToDelete": [
            //     ""
            //   ],
            //   "locationGroupsToUpdate": [
            //     {
            //       "id": "",
            //       "locations": [
            //         ""
            //       ],
            //       "zonesToCreate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         "id": "",
            //         "methodDefinitionsToCreate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "methodDefinitionsToUpdate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "name": ""
            //       },
            //       "zonesToUpdate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         "id": "",
            //         "methodDefinitionsToCreate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "methodDefinitionsToUpdate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               }
            //             }
            //           }
            //         ],
            //         "name": ""
            //       }
            //     }
            //   ],
            //   "methodDefinitionsToDelete": [
            //     ""
            //   ],
            //   "name": "",
            //   "profileLocationGroups": [
            //     {
            //       "id": "",
            //       "locations": [
            //         ""
            //       ],
            //       "zonesToCreate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         "id": "",
            //         "methodDefinitionsToCreate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "methodDefinitionsToUpdate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "name": ""
            //       },
            //       "zonesToUpdate": {
            //         "countries": [
            //           {
            //             "code": "US",
            //             "includeAllProvinces": true,
            //             "provinces": {
            //               "code": "US"
            //             },
            //             "restOfWorld": true
            //           }
            //         ],
            //         "id": "",
            //         "methodDefinitionsToCreate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //               "operator": ""
            //             }
            //           }
            //         ],
            //         "methodDefinitionsToUpdate": [
            //           {
            //             "active": true,
            //             "conditionsToUpdate": {
            //               "criteria": 1.1,
            //               "criteriaUnit": "",
            //               "field": "",
            //               "id": "",
            //               "operator": ""
            //             },
            //             "description": "",
            //             "id": "",
            //             "name": "",
            //             "participant": {
            //               "adaptToNewServices": true,
            //               "carrierServiceId": "",
            //               "fixedFee": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "id": "",
            //               "participantServices": [
            //                 {
            //                   "active": true,
            //                   "name": ""
            //                 }
            //               ],
            //               "percentageOfRateFee": 1.1
            //             },
            //             "priceConditionsToCreate": {
            //               "criteria": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               },
            //               "operator": ""
            //             },
            //             "rateDefinition": {
            //               "id": "",
            //               "price": {
            //                 "amount": "",
            //                 "currencyCode": "USD"
            //               }
            //             },
            //             "weightConditionsToCreate": {
            //               "criteria": {
            //                 "unit": "KILOGRAMS",
            //                 "value": 1.1
            //               },
            //             }
            //           }
            //         ],
            //         "name": ""
            //       }
            //     }
            //   ]
            }
          }
          ,
        },
      });
      console.log(response.body.data.deliveryProfileCreate);
      console.log("it works");

  } catch (error) {
    console.log(error.response);
    if (error instanceof GraphqlQueryError) {
      throw new Error(
        `${error.message}\n${JSON.stringify(error.response, null, 2)}`
      );
    } else {
      throw error;
    }
  }
}