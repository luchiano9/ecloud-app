import { useState } from "react";
import {
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
} from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useNavigate } from '@shopify/app-bridge-react';

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

  const toastMarkup = toastProps.content && !isRefetchingCount && (
    <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />
  );

  const handlePopulate = async () => {
    setIsLoading(true);
    const response = await fetch("/api/products/create");

    if (response.ok) {
      await refetchProductCount();
      setToastProps({ content: "5 products created!" });
    } else {
      setIsLoading(false);
      setToastProps({
        content: "There was an error creating products",
        error: true,
      });
    }
  };

  return (
    <>
      {toastMarkup}
      <Card
        title="Ubicaciones"
        sectioned
        primaryFooterAction={{
          content: "Agregar ubicacion",
          onAction: handlePopulate,
          loading: isLoading,
        }}
      >

        <TextContainer spacing="loose">
          <p>
            Desde donde envias tus productos. Por cada ubicación podes customizar las zonas de envío y las tarifas segun las preferencias.
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
          content: "Administrar tarifas",
          onAction: () => navigate('/Tarifas'),
          loading: isLoading,
        }}
      >
      </Card>
    </>
  );
}
