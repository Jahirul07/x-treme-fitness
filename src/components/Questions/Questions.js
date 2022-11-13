import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import './Questions.css'

export default function Questions() {
  return (
    <div className='qsn-container'>
        <h1 className='qsn-header'>Questions And Answer</h1>
        <Container maxWidth="md">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How does React work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>props vs state in react</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is the purpose of useeffect hook?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Effect hook lets us to perform side effects in functional components. It helps us to avoid redundant code in different lifecycle methods of a class component
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  );
}