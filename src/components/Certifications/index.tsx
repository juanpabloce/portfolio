import { Fragment } from 'react';
import { Container, Grid, Typography, styled, Link } from '@mui/material';
import { certifications } from '../../types/certification';
import { useTheme } from '../../hooks/useTheme';
import { Carousel } from '../Common/Carousel';
import { CardCertification } from '../Common/CardCertification';

const CertificationsGridLeft = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 10, 0, 0),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 4),
    textAlign: 'center',
  },
}));

const CertificationsBold = styled('b')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Certifications = () => {
  const { theme } = useTheme();

  return (
    <Container fixed>
      <Grid container justifyItems="center" alignItems="center" pt={5} mb={10} height={500}>
        <Grid item xs={12} md={6}>
          <CertificationsGridLeft>
            <Typography variant="h3" fontWeight={600}>
              Certificaciones
            </Typography>
            <Typography color={theme.palette.text.secondary} paragraph my={2}>
              Me gusta aprender cosas nuevas, por lo que he tomado cursos en plataformas populates como{' '}
              <Link href="https://platzi.com" target="_blank" rel="noreferrer" underline="none" fontWeight={600}>
                <CertificationsBold>Platzi,</CertificationsBold>
              </Link>{' '}
              <Link href="https://platzi.com" target="_blank" rel="noreferrer" underline="none" fontWeight={600}>
                <CertificationsBold>Udemy</CertificationsBold>
              </Link>{' '}
              entre otras, he realizado certificaciones en diferentes tecnologías, las cuales me han ayudado a mejorar
              mis habilidades y a tener un mejor entendimiento de las necesidades de las empresas o clientes.
            </Typography>
          </CertificationsGridLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <Container fixed>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Carousel>
                  {certifications.map((certification, index) => (
                    <div style={{ margin: '20px 0px' }} key={index}>
                      <CardCertification cardCertification={certification} key={index} />
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Certifications };
