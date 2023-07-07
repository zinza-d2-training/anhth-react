import { Box, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactNode } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
type NavLinkItemProps = {
  link: string;
  title: string;
  desc: string;
  icon: ReactNode;
  color: string;
};
export default function NavLinkItem({link, title, desc, icon, color} : NavLinkItemProps) {
  return (
    <RouterLink
      to={link}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}>
      <Stack
        direction="row"
        margin="0 24px"
        padding="16px"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          '&:hover': {
            backgroundColor: 'rgb(250, 249, 249)',
            cursor: 'pointer'
          }
        }}>
        <Box
          sx={{
            borderRadius: '6px',
            backgroundColor: '#EDE7F6',
            color: {color},
            marginRight: '16px',
          }}>
          {icon}
        </Box>
        <Box>
          <Typography>{title}</Typography>
          <Typography fontSize="small">
            {desc}
          </Typography>
        </Box>
        <ArrowForwardIcon
          sx={{
            color: {color}
          }}
        />
      </Stack>
    </RouterLink>
  );
}
