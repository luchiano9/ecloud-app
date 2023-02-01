import { useState } from "react";
import {
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  Image,
} from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useNavigate } from '@shopify/app-bridge-react';
import { billetes } from "../assets";


export function LocationsCard() {
  const emptyToastProps = { content: null };
  const [isLoading, setIsLoading] = useState(true);
  const [toastProps, setToastProps] = useState(emptyToastProps);
  const fetch = useAuthenticatedFetch();

  const navigate = useNavigate();

  const {
    data,
    refetch: refetchProductCount,
    isLoading: isLoadingCount,
    isRefetching: isRefetchingCount,
  } = useAppQuery({
    url: "/api/products/count",
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });

  // const response = useAppQuery({
  //   url: "  /admin/api/2023-01/carrier_services.json",
  //   fetchInit: {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   }
  // })

  // console.log(response);

  const toastMarkup = toastProps.content && !isRefetchingCount && (
    <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />
  );

  const createDeliveryProfile = async () => {


    await fetch(`/api/shipping/create/${window.location.host}`);
    // setIsLoading(true);
    // const data = {
    //   "carrier_service":
    //   {
    //     "name":"Shipping Rate Provider",
    //     "callback_url":"http://shipping.example.com",
    //     "service_discovery":true
    //   }
    // }

    // const response = await fetch("/api/2023-01/carrier_services.json", {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //       headers:{
    //         'Content-Type': 'application/json',
    //       }
    // });

    // Session is built by the OAuth process


    // const response = useAppQuery({
    //   url: "/api/2023-01/carrier_services.json",
    //   fetchInit: {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // })


    // const carrier_service = new shopify.rest.CarrierService({session: session});
    // carrier_service.name = "Shipping Rate Provider";
    // carrier_service.callback_url = "http://shipping.example.com";
    // carrier_service.service_discovery = true;
    // const response =  await carrier_service.save({
    //   update: true,
    // });
    // console.log(response);

    // if (response.ok) {
    //   await refetchProductCount();
    //   setToastProps({ content: "5 products created!" });
    // } else {
    //   setIsLoading(false);
    //   setToastProps({
    //     content: "There was an error creating products",
    //     error: true,
    //   });
    // }
  };

  return (
    <>
      {toastMarkup}
      <Card
        title="Carrier Service"
        sectioned
        primaryFooterAction={{
          content: "Crear carrier service",
          onAction: createDeliveryProfile,
          loading: isLoading,
        }}
      >

        <TextContainer spacing="loose">
          <p>
            El carrier service es un servicio que calcula en tiempo real las tarifas que se muestran en el checkout, con el botón de abajo se puede crear uno y asociarlo a la tienda. Esto sólo es necesario hacerlo una vez, por lo cual no será necesario utilizarlo en la mayoría de los casos.
          </p>
          <Heading element="h4">
            UBICACIONES
            <DisplayText size="small">
              <TextStyle>
                Antonio Dovalí Jaime no. 70
                Antonio Dovalí Jaime no. 70, 2, Santa Fe, Ciudad de México, Mexico, 01376
              </TextStyle>
            </DisplayText>
          </Heading>
        </TextContainer>
      </Card>
      <Card
        title="Tarifas"
        sectioned
        primaryFooterAction={{
          content: "Importar archivo XLSX",
          onAction: () => navigate('/Tarifas'),
          loading: isLoading,
        }}
      >
        <TextContainer spacing="loose">
          <p>
            Para actualizar las tarifas de envío es necesario importar un archivo con formato XLSX, el cual contenga los rates y zipcodes para cada destino.
          </p>
        </TextContainer>
        <div style={{ padding: "0 20px" }}>
          <Image
            source={billetes}
            alt="Nice work on building a Shopify app"
            width={120}
          />
        </div>
      </Card>
    </>
  );
}
