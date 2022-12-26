import { Card, EmptyState, Page } from "@shopify/polaris";
import { notFoundImage } from "../assets";

export default function NotFound() {
  return (
    <Page>
      <Card>
        <Card.Section>
          <EmptyState
            heading="There is no page at this address"
            image={notFoundImage}
          >
            <p>
              Pagina de lucho
            </p>
          </EmptyState>
        </Card.Section>
      </Card>
    </Page>
  );
}
