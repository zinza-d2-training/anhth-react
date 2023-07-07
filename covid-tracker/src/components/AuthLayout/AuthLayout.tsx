import { Grid } from '@mui/material';
import imageLogin from '../../assets/img/login_img.png';

export default function AuthLayout() {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={6}
      sx={{
        backgroundImage: `url(${imageLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
}
