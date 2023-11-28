import React from 'react';
import { Button, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Download } from '@mui/icons-material';

// Custom styles for the form elements
const PurpleButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const PurpleRadio = styled(Radio)(({ theme }) => ({
  color: purple[400],
  '&.Mui-checked': {
    color: purple[600],
  },
}));

const PurpleDownload = styled(Download)(({ theme }) => ({
  color: purple[500],
}));

// The main component for the feedback form
const FeedbackForm = () => {
  // State variables for the form inputs
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstTime, setFirstTime] = React.useState('Yes');
  const [reason, setReason] = React.useState('');
  const [found, setFound] = React.useState('');
  const [userFriendly, setUserFriendly] = React.useState('');

  // Handlers for the form inputs
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstTimeChange = (event) => {
    setFirstTime(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleFoundChange = (event) => {
    setFound(event.target.value);
  };

  const handleUserFriendlyChange = (event) => {
    setUserFriendly(event.target.value);
  };

  // Handler for the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the feedback data to your server or API
    console.log('Feedback data:', { name, email, firstTime, reason, found, userFriendly });
    // You can also reset the form inputs after submission
    setName('');
    setEmail('');
    setFirstTime('Yes');
    setReason('');
    setFound('');
    setUserFriendly('');
  };

  // The JSX for the form elements
  return (
    <form onSubmit={handleSubmit} style={{ width: '500px', margin: 'auto', backgroundColor: '#F0F0F0', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" style={{ color: purple[500] }}>
          Website Feedback Form
        </Typography>
        <PurpleButton variant="contained" startIcon={<PurpleDownload />}>
          Download
        </PurpleButton>
      </div>
      <TextField
        required
        label="Enter your Full Name"
        value={name}
        onChange={handleNameChange}
        style={{ width: '100%', marginTop: '20px' }}
      />
      <TextField
        required
        label="Your Email address"
        value={email}
        onChange={handleEmailChange}
        style={{ width: '100%', marginTop: '20px' }}
      />
      <FormControl component="fieldset" style={{ marginTop: '20px' }}>
        <FormLabel component="legend">Is this the first time you have visited the website?</FormLabel>
        <RadioGroup row value={firstTime} onChange={handleFirstTimeChange}>
          <FormControlLabel value="Yes" control={<PurpleRadio />} label="Yes" />
          <FormControlLabel value="No" control={<PurpleRadio />} label="No" />
        </RadioGroup>
      </FormControl>
      <TextField
        required
        label="What is the PRIMARY reason you came to the site?"
        multiline
        rows={4}
        value={reason}
        onChange={handleReasonChange}
        style={{ width: '100%', marginTop: '20px' }}
      />
      <TextField
        required
        label="Did you find what you needed?"
        multiline
        rows={2}
        value={found}
        onChange={handleFoundChange}
        style={{ width: '100%', marginTop: '20px' }}
      />
      <TextField
        required
        label="User Friendliness"
        multiline
        rows={2}
        value={userFriendly}
        onChange={handleUserFriendlyChange}
        style={{ width: '100%', marginTop: '20px' }}
      />
      <PurpleButton type="submit" variant="contained" style={{ width: '100%', marginTop: '20px' }}>
        Send your Feedback
      </PurpleButton>
    </form>
  );
};

export default FeedbackForm;
