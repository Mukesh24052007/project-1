import { useRef, useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  List,
  ListItem,
  Link,
  IconButton,
  Drawer,
  MenuItem,
  useMediaQuery
} from '@mui/material'
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Menu
} from 'lucide-react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#66BB6A',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.8rem',
      fontWeight: 700,
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.6rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '64px',
          '@media (max-width:600px)': {
            height: '56px',
          },
        },
      },
    },
  },
});

const App = () => {
  const appBarHeight = theme.components?.MuiAppBar?.styleOverrides?.root?.height || '64px';
  const appBarHeightXs = theme.components?.MuiAppBar?.styleOverrides?.root?.['@media (max-width:600px)']?.height || '56px';

  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      const currentAppBarHeight = window.innerWidth <= 600 ? parseFloat(appBarHeightXs) : parseFloat(appBarHeight);
      const offset = currentAppBarHeight + 10;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About Us', ref: aboutUsRef },
    { name: 'Services', ref: servicesRef },
    { name: 'Contact Us', ref: contactUsRef },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KGL Enterprises
      </Typography>
      <List>
        {navItems.map((item) => (
          <MenuItem key={item.name} onClick={() => scrollToSection(item.ref)}>
            {item.name}
          </MenuItem>
        ))}
      </List>
    </Box>
  );

  const longText = "We provide end-to-end support for paddy and groundnut farming—from cultivation and harvesting to baling, threshing, and transport. Looking to buy or sell tractors and equipment? Our park & sell service has you covered. From machinery to market, we’re committed to empowering farmers at every step.";
  const shortText = "Complete support for paddy and groundnut farming—from cultivation to transport. Buy or sell farm equipment easily with our park & sell service. Empowering farmers from machinery to market.";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          backgroundImage: 'url(https://rare-gallery.com/uploads/posts/922893-landscape-farm-field.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <img
              src="/logo.png"
              alt="Your Brand Logo"
              style={{ height: '50px', marginRight: '16px' }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  sx={{ color: 'yellow', fontSize: '1.05rem', '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }, mx: 1 }}
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Box
          ref={homeRef}
          sx={{
            minHeight: { xs: `calc(100vh - ${appBarHeightXs})`, md: `calc(100vh - ${appBarHeight})` },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left',
            color: 'white',
            p: 4,
            pt: { xs: 8, md: 15 },
            pl: { xs: 4, md: 10 },
            pr: { xs: 4, md: 10 },
            maxWidth: { xs: '90%', md: '50%' },
            mx: { xs: 'auto', md: '0' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          }}
        >
          <Typography variant="h2" gutterBottom>
            KGL Enterprises
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, color: '#E0E0E0' }}>
            {isSmallScreen ? shortText : longText}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#4CAF50',
              '&:hover': { backgroundColor: '#388E3C' },
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 30px',
              borderRadius: '8px',
            }}
            onClick={() => scrollToSection(servicesRef)}
          >
            Discover Our Services
          </Button>
        </Box>

        <Box
          ref={aboutUsRef}
          sx={{
            bgcolor: '#222',
            py: { xs: 8, md: 12 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            padding: { xs: 3, md: 6 },
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: { xs: 'center', md: 'left' }, mr: { md: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: 'yellow' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              At our company, we’re all about supporting farmers and making agriculture easier, smarter, and more efficient. From start to finish, we take care of everything—so you can focus on growing.
            </Typography>
          </Container>
          <Box
            sx={{
              mt: { xs: 4, md: 0 },
              maxWidth: { xs: '80%', md: '30%' },
              height: 'auto',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <img
              src="/aboutUs.jpg"
              alt="About Us - Supporting Farmers"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>

        <Box
          ref={servicesRef}
          sx={{
            bgcolor: '#222',
            py: { xs: 8, md: 12 },
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center', color: 'yellow' }}>
              Our Services
            </Typography>

            <Grid container spacing={4} alignItems="center" sx={{ mb: { xs: 8, md: 12 } }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'yellow', mb: 2 }}>
                    Tractor & Equipment Sales
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.3rem', lineHeight: 1.8 }}>
                    Buy or sell tractors and farm equipment with ease—we’ve got everything you need.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    maxWidth: '100%',
                    height: 'auto',
                    mx: 'auto',
                  }}
                >
                  <img
                    src="/products/img1.jpg"
                    alt="Farm Equipment Sales"
                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                <Box
                  sx={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    maxWidth: '100%',
                    height: 'auto',
                    mx: 'auto',
                  }}
                >
                  <img
                    src="/products/img2.jpg"
                    alt="Sell Your Equipment"
                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                <Box sx={{ p: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'yellow', mb: 2 }}>
                    Park & Sell Your Machinery
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.3rem', lineHeight: 1.8 }}>
                    Have equipment to sell? Contact us and reach the right buyers.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

          </Container>
        </Box>

        <Box
          ref={contactUsRef}
          sx={{
            bgcolor: '#1a1a1a',
            py: { xs: 6, md: 8 },
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: 'yellow' }}>
              Contact Us
            </Typography>
            <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'white' }}>
              KGL Enterprises
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
              <ListItem sx={{ justifyContent: 'center', py: 0.5 }}>
                <Phone size={20} style={{ marginRight: '8px' }} />
                <Link href="tel:8072871881" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'yellow' } }}>
                  +91 8072871881
                </Link>
              </ListItem>
              <ListItem sx={{ justifyContent: 'center', py: 0.5 }}>
                <Mail size={20} style={{ marginRight: '8px' }} />
                <Link href="mailto:kglenterprises11@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'yellow' } }}>
                  kglenterprises11@gmail.com
                </Link>
              </ListItem>
              <ListItem sx={{ justifyContent: 'center', py: 0.5 }}>
                <Instagram size={20} style={{ marginRight: '8px' }} />
                <Link
                  href="https://www.instagram.com/_kgl_enterprises_?igsh=MThzNXdqbWlzNTR1OA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'yellow' } }}
                >
                  Follow us on Instagram
                </Link>
              </ListItem>
              <ListItem sx={{ justifyContent: 'center', py: 0.5 }}>
                <Youtube size={20} style={{ marginRight: '8px' }} />
                <Link
                  href="https://youtube.com/@kgl_enterprises?si=oDP7UN_S-jPYkJLH"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'yellow' } }}
                >
                  View us on YouTube
                </Link>
              </ListItem>
            </List>
            <Typography variant="body2" sx={{ mt: 4, color: '#A0A0A0' }}>
              © {new Date().getFullYear()} KGL Enterprises. All rights reserved.
            </Typography>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  )
}

export default App;