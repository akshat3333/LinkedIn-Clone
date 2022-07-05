import { iconClasses } from '@mui/material';
import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon/>
      </div>

      <div class="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Agra resident Kapeesh Upadhyay got selected in google!", "2d ago - 2,060 readers")}
        {newsArticle("Gagan Chittoria of Ajmer got arrested for child abuse", "1d ago - 5,069 readers")}
        {newsArticle("Kumar Sambhav, a hacker from Patna got arrested for hacking Amazon", "4d ago - 3,090 readers")}
        {newsArticle("A IIIT student - Satvik joined Apple!", "4d ago - 4,530 readers")}
        {newsArticle("A resident from Jaipur has disappeared without a trace", "4d ago - 5,530 readers")}

    </div>
    
  );
}

export default Widgets