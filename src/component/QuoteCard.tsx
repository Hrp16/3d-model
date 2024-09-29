import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from './Card';
import QuoteText from './QuoteText';

// For card
interface CardItem {
  id: string;
  icon: string;
  upperText: string;
  bottomText: string;
}

// For QuoteText
interface QuoteText {
  id: string;
  text: string;
}

const QuoteCard: React.FC = () => {
  // For QuoteText
  const [quoteTexts, SetQuoteTexts] = useState<QuoteText[]>([
    {
      id: '1',
      text: 'UPLOAD TEXT',
    },
    {
      id: '2',
      text: 'CUSTOMIZE',
    },
    {
      id: '3',
      text: 'DELIVERY PLAN',
    },
    {
      id: '4',
      text: 'CHECKOUT',
    },
  ]);

  // Cards details
  const [cardItems, setCardItems] = useState<CardItem[]>([
    {
      id: '1.',
      icon: 'icon',
      upperText: 'UPLOAD STL',
      bottomText: 'upload one or more STL files and start customizing',
    },
    {
      id: '2.',
      icon: 'icon',
      upperText: 'CUSTOMIZE',
      bottomText: 'upload one or more STL files and start customizing',
    },
    {
      id: '3.',
      icon: 'icon',
      upperText: 'DELIVERY',
      bottomText: 'upload one or more STL files and start customizing',
    },
  ]);
  return (
    <Box
      sx={{
        width: '79rem',
        height: '40.3rem',
        bgcolor: '#FFFFFF',
        borderRadius: '30px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '80%',
          padding: '1.7rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {quoteTexts.map((item) => (
            <QuoteText key={item.id} id={item.id} text={item.text} />
          ))}
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Michroma',
              fontWeight: 400,
              fontSize: '1.25rem',
              color: '#0047FF',
            }}
          >
            GET INSTANT QUOTE START 3D PRINTING
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {cardItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              icon={item.icon}
              upperText={item.upperText}
              bottomText={item.bottomText}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default QuoteCard;
