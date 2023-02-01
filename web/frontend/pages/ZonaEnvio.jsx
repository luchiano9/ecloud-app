import { Card, Heading, Page, Stack, TextContainer, FormLayout, TextField, Image } from "@shopify/polaris";

import { destinations } from "../assets";

export default function ZonaEnvio() {

    const divStyle = {
        padding: "0 180px",
        fontSize: 20 ,
    };

    return (
        <Page>
            <Stack>
                <Stack.Item >
                    <Card title="Nueva Zona de envío" sectioned>
                        <p>Ubicación</p>
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
                        <Card.Section title='productos restringidos' actions={[{content: 'Agregar productos restringidos'}]}>
                            <p>Productos que no se pueden enviar a esta zona.</p>
                        </Card.Section>
                        <Card.Section title='Destinos'>
                            <div style={{ padding: "0 160px" }}>
                                <Image
                                    source={destinations}
                                    alt="Nice work on building a Shopify app"
                                />
                            </div>
                            <p style={divStyle}>Agregar paises y regiones</p>
                        </Card.Section>
                    </Card>
                </Stack.Item>
            </Stack>
        </Page>
    );
}
