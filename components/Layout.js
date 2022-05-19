import { AppBar, Badge, Button, Container, createTheme, CssBaseline, Fade, Link, Menu, MenuItem, Switch, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useContext, useState } from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../public/images/dhf.png'

export default function Layout({ description, title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const router = useRouter();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },

    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#52d6f4',
      },
      secondary: {
        main: '#408697',
      },
    },

  })
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null)
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);

  }
  const loginMenuCloseHandler = () => {
    setAnchorEl(null)
  }
  const logoutMenuClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    Cookies.remove('shippinhAddress');
    Cookies.remove('paymentMethod');
    router.push('/');
  };

  return (
    <div className={classes.doc}>
      <Head>
        <title>{title ? `${title} - Digital Fashion House` : 'Digital Fashion House'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src={Logo}
                  alt="DFH LOGO"
                  width={50}
                  height={50}
                />
                <Typography className={classes.brand}>

                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow} ></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
              <NextLink href='/cart' passHref>
                <Link>
                  {cart.cartItems.length > 0 ? <Badge color='secondary' badgeContent={cart.cartItems.length}>
                    CART
                  </Badge> : "CART"}
                </Link>
              </NextLink>
              {userInfo ? <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={loginClickHandler}
                  className={classes.navbarButton}
                >
                  USER//{userInfo.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem
                    onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={(e) =>
                      loginMenuCloseHandler(e, '/order-history')
                    }
                  >
                    Order Hisotry
                  </MenuItem>
                  {userInfo.isAdmin && (
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/admin/dashboard')
                      }
                    >
                      Admin Dashboard
                    </MenuItem>
                  )}
                  <MenuItem onClick={logoutMenuClickHandler}>Logout</MenuItem>
                </Menu>
              </> :
                (<NextLink href='/login' passHref>
                  <Link>LOGIN</Link>
                </NextLink>)}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>
          {children}
        </Container>
        <footer className={classes.footer}>
          <Typography>All Rights Reserved | Digital Boutique | 2022</Typography>
        </footer>

      </ThemeProvider>
    </div>
  )
}
