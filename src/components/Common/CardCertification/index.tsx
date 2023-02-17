import { Typography, Button, Card, CardMedia, CardContent, CardActions, Container, Grid, Chip } from '@mui/material';
import { CardCertificationProps } from '../../../types/certification';
import { useTheme } from '../../../hooks/useTheme';

const CardCertification = ({ cardCertification: { name, logo, link } }: CardCertificationProps) => {
  const { theme } = useTheme();

  const handleDownloadCertificationClick = () => {
    if (!link) return;
    window.open(link, '_blank');
  };

  return (
    <Card
      elevation={3}
      sx={{ width: '200px', height: '280px', borderRadius: theme.shape.borderRadius, margin: '10px auto' }}
    >
      <CardMedia component="img" alt={logo} height="140" image={logo} sx={{ objectFit: 'fill' }} />
      <CardContent sx={{ height: '50px' }}>
        <Typography gutterBottom variant="caption" component="div" fontWeight={600} textAlign="center">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Container fixed>
          <Grid container direction="row" justifyContent="center" alignItems="center" height={10}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                sx={{ borderRadius: theme.shape.borderRadius }}
                fullWidth={true}
                onClick={handleDownloadCertificationClick}
              >
                Descargar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </CardActions>
    </Card>
  );
};

export { CardCertification };
