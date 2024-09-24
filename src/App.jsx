import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Grid from "@mui/joy/Grid";
import perfil from "../public/usuario.png";
import Button from "@mui/joy/Button";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "55%",
        marginInline: "20%",
        position: "absolute",
        top: "30px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Inicio" {...a11yProps(0)} />
          <Tab label="Actividad 1" {...a11yProps(1)} />
          <Tab label="Actividad 2" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography level="h2" sx={{ color: "#4379F2" }}>
          OBJETIVO DE APRENDIZAJE (DESEMPEÑOS):{" "}
        </Typography>

        <Typography sx={{ mt: "1rem" }}>
          Plantear y resolver Situaciones Problema de las matemáticas y otras
          ciencias aplicando modelos de Funciones Lineales o Cuadráticos.
        </Typography>
        <Grid container spacing={5} sx={{ mt: "1.5rem" }}>
          <Grid size={6}>
            <Typography level="h3" sx={{ color: "#507687" }}>
              TEMAS ESPECÍFICOS A DESARROLLAR:{" "}
            </Typography>

            <Typography level="title-lg" sx={{ mt: "1.5rem" }}>
              FUNCIONES:
            </Typography>

            <List sx={{ paddingBlock: "0.5rem" }}>
              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>
                  Función cuadrática, ecuaciones de segundo grado con una
                  incógnita.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>Función exponencial</Typography>
              </ListItem>

              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>Función logarítmica</Typography>
              </ListItem>
            </List>

            <Typography level="title-lg" sx={{ mt: "1.5rem" }}>
              PRESABERES REQUERIDOS:
            </Typography>

            <List sx={{ paddingBlock: "0.5rem" }}>
              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>Operaciones con números reales.</Typography>
              </ListItem>
              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>Resolución de ecuaciones.</Typography>
              </ListItem>

              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>
                  Simplificación de expresiones algebraicas.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemDecorator>🔵</ListItemDecorator>
                <Typography>Factorización.</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            size={6}
            sx={{
              background: "#507687",
              p: "25px",
              borderRadius: "15px",
              mt: "2.5rem",
              height: "100%",
            }}
          >
            <Typography level="h3" sx={{ color: "white", mb: "1rem" }}>
              Dejanos conocerte:
            </Typography>
            <Grid container spacing={2}>
              <Grid size={6}>
                <img
                  style={{ width: "150px", marginTop: "1.5rem" }}
                  src={perfil}
                  alt="Imagen genérico de perfil"
                />
              </Grid>
              <Grid size={6}>
                <Typography style={{ color: "white" }}>Nombre:</Typography>
                <Input color="primary" size="sd" variant="outlined" />
                <Typography style={{ color: "white", marginTop: "1rem" }}>
                  Código:
                </Typography>
                <Input color="primary" size="sd" variant="outlined" />
                <Typography style={{ color: "white", marginTop: "1rem" }}>
                  Programa:
                </Typography>
                <Input color="primary" size="sd" variant="outlined" />
                <Box
                  sx={{ mt: "2rem", display: "flex", justifyContent: "end" }}
                >
                  <Button variant="soft">Siguiente</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          <b>Actividad 1:</b> Modelando el crecimiento de una bacteria
        </Typography>

        <Typography sx={{ mt: "1rem" }}>
          En cierta población del Pacífico Colombiano un grupo de científicos
          acaba de descubrir una nueva especie de bacteria que se estaría
          reproduciendo muy rápido y podría causar muchas enfermedades en la
          población. Estudios recientes revelaron que esta especie se reproduce
          cada hora partiéndose en dos (bipartición) y que inicialmente todo
          habría comenzado con una bacteria.{" "}
        </Typography>

        <ol>
          <li>
            <Typography>
              Completa la siguiente tabla con el propósito de comprender y
              predecir cuánto crecerá la población de bacterias a medida que
              pasen las horas:{" "}
            </Typography>
          </li>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5 style={{ marginBottom: "-3px" }}>
              {" "}
              Comportamiento preliminar del crecimiento de la bacterias
            </h5>
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "200px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    <Typography>Tiempo (Horas)</Typography>
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    0
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    1
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    2
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    3
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    4
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    5
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    6
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    7
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    8
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "200px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    Número de bacterias
                  </td>
                  <td
                    style={{
                      width: "15px",
                      textAlign: "center",
                      border: "1px grey solid",
                    }}
                  >
                    1
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{ width: "15px", textAlign: "center" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <li style={{ marginTop: "50px" }}>
            <Typography>¿Cuántas bacterias habrá a las doce horas?</Typography>
          </li>
          <Input color="primary" size="sd" variant="outlined" />

          <li style={{ marginTop: "15px" }}>
            <Typography>¿Cuántas bacterias habrá a los dos días?</Typography>
          </li>
          <Input color="primary" size="sd" variant="outlined" />
          <li style={{ marginTop: "15px" }}>
            <Typography>
              Los biólogos calculan que, si la población de bacterias crece
              hasta alcanzar los 4.096 ejemplares, los habitantes correrían un
              grave peligro de contaminación. ¿Cuántas horas deberían pasar para
              que ocurra este desastre?
            </Typography>
          </li>
          <Input color="primary" size="sd" variant="outlined" />
          <li style={{ marginTop: "15px" }}>
            <Typography>
              Escribe una expresión algebraica o fórmula matemática que le
              permita hallar la cantidad de bacterias en función del tiempo (en
              horas), es decir, la cantidad de bacterias para cualquier hora.
              Con los datos obtenidos, bosqueja un gráfico que represente esta
              situación.
            </Typography>
          </li>
          <Input color="primary" size="sd" variant="outlined" />
        </ol>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          Actividad 2: Hallando la ecuación de un fenómeno variacional
        </Typography>
        <Typography>
          Una empresa desarrolla un juego para computador. La gráPica muestra la
          proyección que hizo la empresa acerca de la cantidad de usuarios que
          tendrá el juego luego de su lanzamiento.
        </Typography>
        <iframe
          src="https://www.geogebra.org/m/bunrcxbe"
          frameborder="0"
          width={"100%"}
          height={"500px"}
        ></iframe>
      </CustomTabPanel>
    </Box>
  );
}
