import { Fragment } from 'react';
import { Typography, CssBaseline, Grid, createTheme, styled, useMediaQuery, Button, Container } from '@mui/material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import imageWelcomeHome from '../../assets/images/welcome-home.png';
import waveWelcomeHomeDesktop from '../../assets/images/waves/welcome-home-desktop.svg';
import waveWelcomeHomeMobile from '../../assets/images/waves/welcome-home-mobile.svg';
import { useTheme } from '../../hooks/useTheme';

const WelcomeBox = styled('div')(({ theme }) => ({
  margin: theme.spacing(10, 0),
  backgroundImage: `url(${waveWelcomeHomeMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'auto',

  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(10, 0, 0, 0),
    backgroundImage: `url(${waveWelcomeHomeDesktop})`,
    backgroundPosition: 'right',
    backgroundSize: 'contain',
  },
}));

const WelcomeGridLeft = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 10),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 4),
    textAlign: 'center',
  },
}));

const WelcomeGridRight = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
}));

const WelcomeImg = styled('img')(({ theme }) => ({
  width: 'auto',

  [theme.breakpoints.down('md')]: {
    width: '82%',
  },
}));

const WelcomeHome = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const direction = isMobile ? 'column-reverse' : 'row';

  const handleDownloadCV = () => {
    window.open('/CV_Juan_Pablo_CE.pdf', '_blank');
  };

  return (
    <Fragment>
      <CssBaseline />
      <WelcomeBox>
        <Container fixed sx={{ maxWidth: '100% !important', padding: '0px !important' }}>
          <Grid
            container
            rowSpacing={12}
            spacing={12}
            direction={direction}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <WelcomeGridLeft>
                <Typography fontWeight={600} variant="h2">
                  !Hola! Soy Juan Pablo
                </Typography>

                <Typography color={theme.palette.primary.main} fontWeight={600} my={2} variant="h6">
                  Frontend Developer | JavaScript | TypeScript | Vue.js | React.js
                </Typography>

                <Typography color={theme.palette.text.secondary} paragraph mb={5}>
                  Desarrollador Frontend con más de 3 años de experiencia en el desarrollo de aplicaciones web y
                  móviles. Me apasiona la tecnología y la programación, siempre estoy aprendiendo nuevas tecnologías y
                  herramientas para mejorar mis habilidades y así poder ofrecer un mejor servicio a mis clientes o en su
                  defecto a mi equipo de trabajo.
                </Typography>

                <Button variant="outlined" size="large" endIcon={<BrowserUpdatedIcon />} onClick={handleDownloadCV}>
                  Descargar CV
                </Button>
              </WelcomeGridLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <WelcomeGridRight>
                <WelcomeImg src={imageWelcomeHome} alt={imageWelcomeHome} srcSet={imageWelcomeHome} />
              </WelcomeGridRight>
            </Grid>
          </Grid>
        </Container>
      </WelcomeBox>
    </Fragment>
  );
};

export { WelcomeHome };
