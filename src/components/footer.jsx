import React from 'react';
import { Stack, Typography } from '@mui/material';
import FooterLogo from '../assets/images/Logo-1.png';
const Footer = () => {
  return (
    <Stack gap="20px" justifyContent="center" alignItems="center">
      <img src={FooterLogo} width="150px" alt="footer-logo" />
      <Typography fontWeight="bold" fontSize="14px">
        Made by <span style={{ color: '#FF2625' }}>Amr Hussein</span>
      </Typography>
    </Stack>
  );
};

export default Footer;
