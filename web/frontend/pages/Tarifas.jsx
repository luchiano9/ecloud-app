import { Card, EmptyState, Heading, Page, Stack, TextContainer } from "@shopify/polaris";
import { notFoundImage } from "../assets";

export default function NotFound() {

  return (
    <Page>
      <Stack>
        <Stack.Item >
          <TextContainer spacing="loose">
            <Heading> Zonas de envío</Heading>
            <p>Las zonas de envío son los lugares a donde se envían<br />
            los productos. Se pueden agrupar países y regiones <br/> 
            dentro de zonas de envío las cuales<br/>
             tengan la misma tarifa.</p>
          </TextContainer>
        </Stack.Item>
        <Stack.Item fill>
          <Card>
            <Card.Section>
              <p>
                Zonas de envío
              </p>
            </Card.Section>
          </Card>
        </Stack.Item>
      </Stack>
    </Page>
  );
}
