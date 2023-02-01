// @ts-check
import { join } from "path";
import { readFileSync, stat } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import deliveryCreator from "./delivery-creator.js"
import bodyParser from 'body-parser'
import { GraphqlQueryError } from "@shopify/shopify-api";
import { Session } from "inspector";
import XLSX from "xlsx";
import fs from 'fs';

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

app.use(bodyParser.json());

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// All endpoints after this point will require an active session

app.use("/api/*"
,async (req,res, _next) => {

 if (req.body.rate) {
     const orderInfo = req.body;
     const zipCode = orderInfo.rate.destination.postal_code;
     const country = orderInfo.rate.destination.country;
 
     const workbook = XLSX.readFile("redpack.xlsx");
     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
     const data = XLSX.utils.sheet_to_json(worksheet);
 
     if(country === 'AR'){
 
     // query para traer el metodo
       let totalWeight = 0; 
       orderInfo.rate.items.map( item => {
         totalWeight += item.grams/1000;
       })
 
       const matchs = data.filter( row => {
         return ((row.zip_from).toString()) === ((zipCode).toString());
       })
 
       var response;

       matchs.forEach( match => {
          if(totalWeight >= match.weight_from && totalWeight <= match.weight_to ){
            response = {
              "rates" : [
                {
                  "service_name": `${match.weight_from} a  ${match.weight_to}kg`,
                  "service_code": `${match.weight_from} a  ${match.weight_to}kg`,
                  "total_price": `${match.rate}00`,
                  "description": `${match.name_delivery}`,
                  "currency": "USD",
                  "min_delivery_date": "2022-01-08",
                  "max_delivery_date": "2022-01-12",
                  "delivery_date_guaranteed": false
                }
              ]
            }
          }
       })
 
       var divide = 1.873776224;
 
      //  switch (true) {
      //    case (totalWeight >= 5): {
 
      //      response = {
      //        "rates": [
      //          {
      //            "service_name": "Gratarola",
      //            "service_code": "Gratarola",
      //            "total_price": "0.00",
      //            "description": "Expected delivery in 3-5 business days",
      //            "currency": "MXN",
      //            "min_delivery_date": "2022-01-08",
      //            "max_delivery_date": "2022-01-12",
      //            "delivery_date_guaranteed": false
      //          },
      //        ]
      //      }
 
           
      //    }
      //      break;
      //  case ( totalWeight >= 4 && totalWeight < 5): {
 
      //    response = {
      //      "rates": [
      //        {
      //          "service_name": "4 a 5kg",
      //          "service_code": "4 a 5kg",
      //          "total_price": `${matchs[4].rate/divide}`,
      //          "description": `${matchs[4].name_delivery}`,
      //          "currency": "MXN",
      //          "min_delivery_date": "2022-01-08",
      //          "max_delivery_date": "2022-01-12",
      //          "delivery_date_guaranteed": false
      //        },
      //      ]
      //    }
      //  }
      //    break;
      //  case (totalWeight >= 3 && totalWeight < 4): {
 
      //    response = {
      //      "rates": [
      //        {
      //          "service_name": "3 a 4kg",
      //          "service_code": "3 a 4kg",
      //          "total_price": `${matchs[3].rate/divide}`,
      //          "description": `${matchs[3].name_delivery}`,
      //          "currency": "MXN",
      //          "min_delivery_date": "2022-01-08",
      //          "max_delivery_date": "2022-01-12",
      //          "delivery_date_guaranteed": false
      //        },
      //      ]
      //    }
      //  }
      //    break;
      //    case (totalWeight >= 2 && totalWeight < 3): {
 
      //      response = {
      //        "rates": [
      //          {
      //            "service_name": "2 a 3kg",
      //            "service_code": "2 a 3kg",
      //            "total_price": `${matchs[2].rate/divide}`,
      //            "description": `${matchs[2].name_delivery}`,
      //            "currency": "MXN",
      //            "min_delivery_date": "2022-01-08",
      //            "max_delivery_date": "2022-01-12",
      //            "delivery_date_guaranteed": false
      //          },
      //        ]
      //      }
      //    }
      //      break;
      //      case (totalWeight >= 1 && totalWeight < 2): {
 
      //        response = {
      //          "rates": [
      //            {
      //              "service_name": "1 a 2kg",
      //              "service_code": "1 a 2kg",
      //              "total_price": `${matchs[1].rate/divide}`,
      //              "description": `${matchs[1].name_delivery}`,
      //              "currency": "MXN",
      //              "min_delivery_date": "2022-01-08",
      //              "max_delivery_date": "2022-01-12",
      //              "delivery_date_guaranteed": false
      //            },
      //          ]
      //        }
      //      }
      //        break;
 
      //      case (totalWeight >= 0 && totalWeight < 1): {
 
      //        response = {
      //          "rates": [
      //            {
      //              "service_name": "Envio peso 0 a 1",
      //              "service_code": "Envio peso 0 a 1",
      //              "total_price": `${matchs[0].rate/divide}`,
      //              "description": `${matchs[0].name_delivery}`,
      //              "currency": "MXN",
      //              "min_delivery_date": "2022-01-08",
      //              "max_delivery_date": "2022-01-12",
      //              "delivery_date_guaranteed": false
      //            },
      //          ]
      //        }
      //      }
      //        break;
       
      //    default:
      //      break;
      //  }
       res.status(200).send(response)
      }
      res.status(200)
   }
   _next();
 }
,shopify.validateAuthenticatedSession()
);

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/luchoapi", (req, res) => {
  console.log("funciona");
  console.log(res.locals.shopify.session);
  return res.status(200);
})

app.get("/api/shipping/create/:location", async (_req, res) => {

  const urlCallBack = _req.params.location;
  let status = 200;
  let error = null;

  try {

    // const carrier_service = new shopify.api.rest.CarrierService({session: res.locals.shopify.session});
    //   carrier_service.name = "Shipping Rate Provider2";
    //   carrier_service.callback_url = "http://shipping.example2.com";
    //   carrier_service.service_discovery = true;
    //   const response =  await carrier_service.save({
    //     update: true,
    //   });
    //   console.log(response);

    console.log(res.locals.shopify.session);

    const carrier_service = new shopify.api.rest.CarrierService({ session: res.locals.shopify.session });
    carrier_service.id = 69228593457;
    carrier_service.callback_url = `https://${urlCallBack}/api/luchoapi`
    console.log(carrier_service.callback_url);
    // api/luchoapi`;
    carrier_service.name = "Some new namex";
    carrier_service.active = true;
    await carrier_service.save({
      update: true,
    });

    

  } catch (e) {
    console.log("failed creating delivery profile");
    status = 500;
    error = e.message;
  }

  res.status(status).send({ sucess: status === 200, error });

  console.log("Carrier service creado correctamente");

});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
