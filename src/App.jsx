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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ReactSketchCanvas } from "react-sketch-canvas";
import { useRef } from "react";

import Imgofia from "/sofia.jpg";

import ImgSofiaPintando from "/sofiaPintando.jpg";

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

  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);
  const canvas = canvasRef.current;
  const canvas2 = canvas2Ref.current;

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
          <Tab label="La granja de Sofía" {...a11yProps(1)} />
          <Tab label="Actividad 1" {...a11yProps(2)} />
          <Tab label="Actividad 2" {...a11yProps(3)} />
          <Tab label="Actividad 3" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* <Typography level="h2" sx={{ color: "#4379F2" }}>
      OBJETIVO DE APRENDIZAJE (DESEMPEÑOS):{" "}
     </Typography>

     <Typography sx={{ mt: "1rem" }}>
      Plantear y resolver Situaciones Problema de las matemáticas y otras
      ciencias aplicando modelos de Funciones Lineales o Cuadráticos.
     </Typography>*/}
        <Grid container spacing={5} sx={{ mt: "1.5rem" }}>
          {/*
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
      </Grid> */}
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
                  <Button variant="soft">Enviar</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          <b>La granja de Sofía</b>
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <img
            src={Imgofia}
            alt="Imagen de Sofía"
            style={{
              height: "300px",
            }}
          />

          <Typography sx={{ mt: "0rem" }}>
            Sofía está pensando en cultivar hortalizas en Chocontá porque dicen
            que el terreno es muy bueno, pero que hay que tener cuidado porque
            lo frecuentan animales que se las comen, deterioran el terreno y
            hacen hendiduras en las platabandas. Ella solo dispone de 140 metros
            de malla para encerrar el terreno que va a usar para el cultivo, que
            debe tener forma rectangular. Así que ella necesita determinar las
            dimensiones del cultivo que se puede cercar con esa cantidad de
            malla. ​{" "}
          </Typography>
        </Box>

        <Box sx={{ background: "#FFF1DB", padding: "15px", mt: "2rem" }}>
          <Typography>
            <span style={{ marginRight: "10px" }}>💡</span> Recuerda cómo se
            calcula el perímetro y el área de un rectángulo.
          </Typography>
        </Box>

        {/* <ol>
          <li>
            <Typography>
            🟢 Completa la siguiente tabla con el propósito de comprender y
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
          </div>

          <li style={{ marginTop: "50px" }}>
            <Typography>¿Cuántas bacterias habrá a las doce horas?</Typography>
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
            <Typography></Typography>
          </li>
          <Input color="primary" size="sd" variant="outlined" />
        </ol> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          Sofía requiere que le ayudes a resolver el siguiente problema:
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${ImgSofiaPintando})`,
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "50vh",
            my: "1rem",
          }}
        ></Box>
        <Typography>
          🟢 Dibuja cuatro opciones diferentes del cultivo rectangular que puede
          cercar Sofía, considerando que en cada una se deben usar los 140
          metros de malla. Asígnenle las longitudes asociadas al ancho y al
          largo, con su respectiva unidad de medida, para cada una de las cuatro
          opciones.
        </Typography>
        <Box sx={{ background: "#FFF1DB", padding: "15px", my: "2rem" }}>
          <Typography>
            <span style={{ marginRight: "10px" }}>💡</span> Puedes usar el
            recuadro de abajo para dibujar usando el mouse, debes pulsar el
            click izquierdo y mover el mouse para dibujar. Si cometes un error y
            requieres volver a empezar puedes usar el boton azúl de la parte
            inferior para limpiar el canvas.
          </Typography>
        </Box>

        <ReactSketchCanvas
          style={{
            border: "0.0625rem solid #9c9c9c",
            borderRadius: "0.25rem",
            height: "400px",
            width: "100%",
          }}
          ref={canvasRef}
          strokeWidth={2}
          strokeColor="red"
        />
        <Box
          sx={{
            background: "#37AFE1",
            padding: "5px",
            mt: "2rem",
            width: "100px",
            textAlign: "center",
            color: "#FFFECB",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log(canvas);
            canvas.clearCanvas();
          }}
        >
          {" "}
          Limpiar
        </Box>

        <Box
          sx={{
            mt: "2rem",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography>
              🟢 ¿Cuáles cantidades varían entre las cuatro opciones?
            </Typography>

            <Input
              color="primary"
              sx={{ height: "50px", mt: "1rem" }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography>🟢 ¿Cuáles cantidades no varían?</Typography>

            <Input
              color="primary"
              sx={{ height: "50px", mt: "1rem" }}
              variant="outlined"
            />
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          Modelando los posibles cultivos rectangulares
        </Typography>
        <Box
          sx={{
            mt: "2rem",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography>
              🟢 ¿Cuántas opciones distintas del cultivo rectangular se pueden
              cercar con los 140 metros de malla? ¿Por qué?
            </Typography>

            <Input color="primary" sx={{ height: "50px" }} variant="outlined" />
          </Box>
        </Box>
        <Typography sx={{ mt: "2rem" }}>
          🟢 Dibuja un terreno rectangular cuyas dimensiones no le permitan a
          Sofía cercarlo con la malla que tiene disponible.
        </Typography>
        <Box sx={{ background: "#FFF1DB", padding: "15px", my: "1rem" }}>
          <Typography>
            <span style={{ marginRight: "10px" }}>💡</span> Puedes usar el
            recuadro de abajo para dibujar usando el mouse, debes pulsar el
            click izquierdo y mover el mouse para dibujar. Si cometes un error y
            requieres volver a empezar puedes usar el boton azúl de la parte
            inferior para limpiar el canvas.
          </Typography>
        </Box>
        <ReactSketchCanvas
          style={{
            border: "0.0625rem solid #9c9c9c",
            borderRadius: "0.25rem",
            height: "400px",
            width: "100%",
          }}
          ref={canvas2Ref}
          strokeWidth={2}
          strokeColor="red"
        />
        <Box
          sx={{
            background: "#37AFE1",
            padding: "5px",
            mt: "2rem",
            width: "100px",
            textAlign: "center",
            color: "#FFFECB",
            cursor: "pointer",
          }}
          onClick={() => {
            canvas2.clearCanvas();
          }}
        >
          {" "}
          Limpiar
        </Box>
        <Typography sx={{ mt: "2rem" }}>
          🟢 Completa la información presentada en la siguiente tabla:
        </Typography>
        <TableContainer
          sx={{ mt: "2rem", width: "700px", overflow: "hidden" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Ancho (mt)</TableCell>
                <TableCell>Largo (mt)</TableCell>
                <TableCell>Perímetro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      width: "250px",
                      color: "#257180",
                      textAlign: "center",
                    }}
                  >
                    1
                  </Typography>{" "}
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      width: "250px",
                      color: "#257180",
                      textAlign: "center",
                    }}
                  >
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      width: "250px",
                      color: "#257180",
                      textAlign: "center",
                    }}
                  >
                    14,5
                  </Typography>
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      width: "250px",
                      color: "#257180",
                      textAlign: "center",
                    }}
                  >
                    93/4
                  </Typography>
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      width: "250px",
                      color: "#257180",
                      textAlign: "center",
                    }}
                  >
                    70
                  </Typography>
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    color="primary"
                    sx={{ width: "20%" }}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Typography level="h3" sx={{ color: "#507687" }}>
          {" "}
          Modelando los posibles cultivos rectangulares​
        </Typography>
        <Box
          sx={{
            mt: "2rem",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography>
              🟢 Escribe un mensaje de WhatsApp a otro estudiante de su grado,
              en el cual expliquen con claridad y con todos los detalles
              posibles cómo proceden para determinar el largo del cultivo
              rectangular de hortalizas para cualquier ancho del cultivo
              asignado.
            </Typography>

            <Input color="primary" sx={{ height: "50px" }} variant="outlined" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography>
              🟢 Describe rigurosamente el procedimiento utilizado para
              determinar el largo del cultivo por cada ancho establecido.
            </Typography>

            <Input
              color="primary"
              sx={{ height: "500px" }}
              variant="outlined"
            />
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
