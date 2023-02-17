import { Fragment } from 'react';
import { Typography, CssBaseline, Grid, styled, useMediaQuery, Link, Container } from '@mui/material';
import { technologies } from '../../types/about';
import { useTheme } from '../../hooks/useTheme';
import waveAboutMeDesktop from '../../assets/images/waves/about-me-desktop.svg';
import waveAboutMeMobile from '../../assets/images/waves/about-me-mobile.svg';
import imageAboutMe from '../../assets/images/about-me.jpeg';

const AboutMeBox = styled('div')(({ theme }) => ({
  margin: theme.spacing(12, 0),
  backgroundImage: `url(${waveAboutMeMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'contain',

  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${waveAboutMeDesktop})`,
    backgroundPosition: 'left',
  },
}));

const AboutMeGridLeft = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const AboutMeGridRight = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 10, 0, 0),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 4),
    textAlign: 'center',
  },
}));

const AboutMeImg = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: '80%',

  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
}));

const AboutMeBold = styled('b')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const AboutMe = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const direction = isMobile ? 'column' : 'row';

  return (
    <Fragment>
      <CssBaseline />
      <AboutMeBox>
        <Container fixed sx={{ maxWidth: '100% !important', padding: '0px !important' }}>
          <Grid container spacing={12} direction={direction} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <AboutMeGridLeft>
                <AboutMeImg src={imageAboutMe} alt={imageAboutMe} srcSet={imageAboutMe} />
              </AboutMeGridLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutMeGridRight>
                <Typography fontWeight={600} variant="h3">
                  Acerca de mí
                </Typography>

                <Typography color={theme.palette.text.secondary} paragraph my={3}>
                  Actualmente trabajo como Frontend Developer en la empresa{' '}
                  <Link href="https://masiv.com" target="_blank" rel="noreferrer" underline="none" fontWeight={600}>
                    <AboutMeBold>Masiv A Route Mobile Company</AboutMeBold>
                  </Link>{' '}
                  en la ciudad de Manizales, Colombia. Me gustan los retos y aprender cosas nuevas, por eso me gusta
                  estar en constante actualización de mis conocimientos. He trabajado con tecnologías como{' '}
                  <AboutMeBold>{technologies.join(', ')}</AboutMeBold> , entre otras.
                </Typography>
              </AboutMeGridRight>
            </Grid>
          </Grid>
        </Container>
      </AboutMeBox>
    </Fragment>
  );
};

export { AboutMe };
