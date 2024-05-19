
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data2 } from './data2';


export default function Question() {
  return (
    <div className='max-w-xl'>
        <p className='text-3xl ml-4 mt-16 font-extrabold uppercase   '>Faq</p>
        {data2.map((data) =>{
            const {title,info} = data
            return(
                <div>
                     <Accordion sx={{boxShadow:'none', margin:"16px", }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{border: '1px solid #082299',  borderRadius:'16px'}}
        >
         {title}
        </AccordionSummary>
        <AccordionDetails>
          {info}
        </AccordionDetails>
      </Accordion>
                </div>
            )
        })}
     
     
    </div>
  );
}
