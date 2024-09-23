import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%' , margin: "5% 10%", position:"absolute", top:"2px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inicio" {...a11yProps(0)} />
          <Tab label="Actividad 1" {...a11yProps(1)} />
          <Tab label="Actividad 2" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        <h3>OBJETIVO	DE	APRENDIZAJE	(DESEMPEÑOS):	</h3>
        
	<p>Plantear	 y	 resolver	Situaciones	 Problema	 de	las	matemáticas	 y	 otras	 ciencias	
  aplicando	modelos	de	Funciones	Lineales	o	Cuadráticos.</p>

<h3>TEMAS	ESPECÍFICOS	A	DESARROLLAR:	</h3>
	
<h4>FUNCIONES:	</h4>
	
<ul>
  <li>Función	cuadrática,	ecuaciones	de	segundo	grado	con	una	incógnita.</li>
  <li>Función	exponencial</li>
  <li>Función	logarítmica</li>
</ul>

<h3>PRESABERES	REQUERIDOS:	</h3>
	
<ul>
  <li>Operaciones	con	números	reales.</li>
  <li>Resolución	de	ecuaciones.</li>
  <li>Simplificación	de	expresiones	algebraicas.</li>
  <li>Factorización.</li>
</ul>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h3>

      Actividad	1:	Modelando	el	crecimiento	de	una	bacteria	
        </h3>
<p>En	cierta	población	del	Pacífico	Colombiano	un	grupo	de	científicos	acaba	de	descubrir	
una	nueva	especie	de	bacteria que	se	estaría reproduciendo	muy	rápido	y	podría	causar	
muchas	enfermedades	en	la	población.	Estudios	recientes	revelaron	que	esta	especie	se	
reproduce	cada	hora	partiéndose en	dos	(bipartición)	y	que	inicialmente	todo	habría
comenzado	con	una	bacteria.	</p>
<ol>
  <li>Completa la siguiente tabla con el propósito de comprender y predecir cuánto crecerá
  la población de bacterias a medida que pasen las horas: </li>
  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>

<h5 style={{marginBottom:"-3px"}}> Comportamiento	preliminar	del	crecimiento	de	la	bacterias</h5>
    <table>
      <thead>
      <tr><td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td></tr>
      </thead>
      <tbody>
        <tr><td style={{width: "200px", textAlign:"center", border:"1px grey solid"}} >Tiempo
        (Horas)</td>
        <td style={{width: "15px", textAlign:"center", border:"1px grey solid"}} >0</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >1</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >2</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >3</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >4</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >5</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >6</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >7</td>
        <td style={{width: "15px" , textAlign:"center" , border:"1px grey solid"}} >8</td></tr>
        <tr><td style={{width: "200px", textAlign:"center", border:"1px grey solid"}} >Número	de	
        bacterias</td>
        <td style={{width: "15px" , textAlign:"center", border:"1px grey solid"}} >1</td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        <td><input type="text" style={{width: "15px" , textAlign:"center"}} /></td>
        </tr>
      </tbody>
    </table>
  </div>

</ol>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}