import { Card, Heading, Page, Stack, TextContainer, FormLayout, TextField, Image, ResourceList, Filters, Button, Avatar } from "@shopify/polaris";

import { destinations } from "../assets";

export default function AdministrarTarifa() {

    const divStyle = {
        padding: "0 180px",
        fontSize: 20,
    };

    return (
        <Page>
            <Stack>
                <Stack.Item >
                    <Card title="Zona de envío" sectioned>
                        <p>ANTONIO DOVALÍ JAIME NO. 70</p>
                        <p>Antonio Dovalí Jaime no. 70</p>
                        <p>2</p>
                        <p>Santa Fe, DF, MX</p>
                    </Card>
                </Stack.Item>
                <Stack.Item fill>
                    <Card
                        title="Zonas de envío"
                        sectioned
                        primaryFooterAction={{
                            content: "Agregar destinos",
                            onAction: () => navigate('/Tarifas'),
                        }}
                    >
                        <Card.Section>
                            <FormLayout>
                                <TextField label="Nombre" onChange={() => { }} autoComplete="off" />
                            </FormLayout>
                        </Card.Section>
                        <Card.Section title='productos restringidos' actions={[{ content: 'Agregar productos restringidos' }]}>
                            <p>Productos que no se pueden enviar a esta zona.</p>
                        </Card.Section>
                        <Card.Section title='destinos' actions={[{ content: 'Editar destinos' }]}>
                            <p>Destinos disponibles dentro de Mexico.</p>
                        </Card.Section>
                    </Card>
                    <Card title="Tarifas"
                        actions={[{ content: "Nueva Tarifa" }]}
                        primaryFooterAction={{ content: "Nueva Tarifa" }}>

                    </Card>
                </Stack.Item>
            </Stack>
            <div style={{ height: '568px' }}>
                <Card>
                 
                </Card>
            </div>
        </Page>
    );
}
