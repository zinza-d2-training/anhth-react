import { AppBar, Box, Toolbar, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import LogoCovid from '../../assets/img/Logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import {
  usePopupState,
  bindPopover,
  bindHover
} from 'material-ui-popup-state/hooks';
import NavLinkItem from './NavLinkItem';
export default function Headers() {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover'
  });
  return (
    <>
      <AppBar
        sx={{
          background: 'linear-gradient(to right,#ED1B23,#2E3091,#253494)',
          padding: '0 36px'
        }}>
        <Toolbar sx={{ padding: '0 !important' }}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 40,
              margin: '0 16px 0 0'
            }}
            alt="not work"
            src={LogoCovid}
          />
          <Typography>CỔNG THÔNG TIN TIÊM CHỦNG COVID-19</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              marginLeft: 'auto'
            }}
            spacing={2}>
            <Link
              style={{
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}
              underline="none">
              Trang chủ
            </Link>
            <Link
              sx={{
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}
              underline="none">
              Đăng ký tiêm
            </Link>
            <Link
              underline="none"
              component="button"
              {...bindHover(popupState)}
              sx={{
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '16px'
                }}>
                <Typography
                  sx={{
                    color: 'white !important'
                  }}>
                  Tra cứu
                </Typography>
                <ExpandMoreIcon />
              </Box>
            </Link>
            <HoverPopover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              sx={{ padding: '16px 0' }}>
              <NavLinkItem
                link="/portal/search"
                title="Tra cứu chứng nhận tiêm"
                desc="Cập nhật nhanh và chính xác nhất"
                color="#5E35B1"
                icon={
                  <PeopleIcon sx={{ padding: '6px' }} fontSize="medium" />
                }></NavLinkItem>
              <NavLinkItem
                link="/portal/lookup-injection-registration"
                title="Tra cứu kết quả đăng ký"
                desc="Cập nhật nhanh và chính xác nhất"
                color="#1E88E5"
                icon={
                  <PeopleIcon sx={{ padding: '6px' }} fontSize="medium" />
                }></NavLinkItem>
            </HoverPopover>
            <Link
              sx={{
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}
              underline="none">
              Tài liệu
            </Link>
            <RouterLink to={'/portal/login-organ'}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  fontWeight: '600',
                  minWidth: '90px',
                  color: '#303F9F',
                  border: '1px solid #303F9F',
                  backgroundColor: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#303F9F',
                  }
                }}>
                ĐĂNG NHẬP
              </Button>
            </RouterLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
