import { AppBar, Box, Toolbar, Typography, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LogoCovid from '../../assets/img/Logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import {
  usePopupState,
  bindPopover,
  bindHover
} from 'material-ui-popup-state/hooks';
import NavLinkItem from './NavLinkItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import { blue, green, orange } from '@mui/material/colors';
import { UserDataType } from '../../store/userSlice';
import { getDataLocal } from '../../data/getDataLocal';
export default function Headers() {
  const navigation = useNavigate();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover'
  });
  const userState = usePopupState({
    popupId: 'services',
    variant: 'popover'
  });
  const [getUserData, setUserData] = useState<UserDataType | undefined>();
  useEffect(() => {
    const getData = getDataLocal();
    if (getData === undefined) return;
    const { user } = getData;
    setUserData(user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('persist:root');
    navigation('/');
    setUserData(undefined);
  };
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
            <RouterLink
              to={'/'}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}>
              Trang chủ
            </RouterLink>
            <RouterLink
              to={'/portal/vaccine-registration'}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
              }}>
              Đăng ký tiêm
            </RouterLink>
            <Link
              underline="none"
              component="button"
              {...bindHover(userState)}
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
              {...bindPopover(userState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}>
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
            {getUserData ? (
              <>
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: 'white',
                    fontWeight: 500
                  }}
                  {...bindHover(popupState)}>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    {getUserData?.username}
                  </Typography>
                </Button>
                <HoverPopover
                  {...bindPopover(popupState)}
                  disableScrollLock={true}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}>
                  <Box
                    sx={{
                      padding: '16px 0px',
                      borderRadius: '12px'
                    }}>
                    <NavLinkItem
                      title="Tài khoản"
                      desc="Thông tin cá nhân"
                      link="/portal/account"
                      icon={<BadgeIcon />}
                      color={blue[600]}
                    />
                    <NavLinkItem
                      title="Quản trị viên"
                      desc="Quyền với quản trị viên"
                      link="/admin/vaccination-registration"
                      icon={<AdminPanelSettingsIcon />}
                      color={green[600]}
                    />
                    <Stack
                      direction="row"
                      margin="0 24px"
                      padding="16px"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgb(250, 249, 249)',
                          cursor: 'pointer'
                        }
                      }}
                      onClick={handleLogout}>
                      <Box
                        sx={{
                          borderRadius: '6px',
                          backgroundColor: '#EDE7F6',
                          color: orange[600],
                          marginRight: '16px',
                          padding: '6px'
                        }}>
                        <LogoutIcon />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography>Đăng xuất</Typography>
                        <Typography fontSize="small">
                          Đăng xuất khỏi hệ thống
                        </Typography>
                      </Box>
                      <ArrowForwardIcon
                        sx={{
                          color: orange[600]
                        }}
                      />
                    </Stack>
                  </Box>
                </HoverPopover>
              </>
            ) : (
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
                      backgroundColor: '#303F9F'
                    }
                  }}>
                  ĐĂNG NHẬP
                </Button>
              </RouterLink>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
