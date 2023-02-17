import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { CardCompany } from '../Common/CardCompany';
import { useTheme } from '../../hooks/useTheme';
import { companies } from '../../types/company';

const Companies = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container fixed>
      <Grid container spacing={6} direction="column" justifyContent="center" alignItems="center" pt={5} pb={10}>
        <Grid item xs={12}>
          <Typography fontWeight={600} variant="h3">
            Empresas
          </Typography>
        </Grid>
        <Grid item sx={{ width: isMobile ? '100%' : '70%', textAlign: 'center' }}>
          <Typography color={theme.palette.text.secondary} paragraph>
            He tenido la oportunidad de trabajar en diferentes empresas, en proyectos con baja y alta complejidad, en
            los cuales he tenido retos como liderar equipos de trabajo, trabajar en equipo, crear aplicaciones desde
            cero y mantener aplicaciones ya existentes, siempre con el objetivo de entregar un producto de calidad.
          </Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={10} justifyContent="center">
            {companies.map((company, index) => (
              <Grid item key={company.name + index}>
                <CardCompany cardCompany={company} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Companies };
