import {
  Button,
  Chip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Tooltip,
} from '@mui/material';
import { CardCompanyProps } from '../../../types/company';
import { useCallback } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const CardCompany = ({ cardCompany: { name, logo, link, rol, technologies } }: CardCompanyProps) => {
  const { theme } = useTheme();
  const handleVisitClick = useCallback(() => {
    window.open(link, '_blank');
  }, [link]);

  return (
    <Card elevation={3} sx={{ width: '300px', height: '550px', borderRadius: theme.shape.borderRadius }}>
      <CardMedia component="img" alt={logo} height="140" image={logo} sx={{ objectFit: 'contain' }} />
      <CardContent sx={{ height: '300px' }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight={600} textAlign="center" my={2}>
          {name}
        </Typography>
        <Container fixed>
          <Grid container justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }} mb={2}>
            <Grid item xs={12}>
              <Chip variant="outlined" label={rol} color="primary" icon={<RadioButtonCheckedOutlinedIcon />} />
            </Grid>
          </Grid>
          <Grid container spacing={1} justifyContent="" alignItems="center">
            <Grid item xs={12}>
              <Typography gutterBottom variant="caption" component="b" fontWeight={600} textAlign="center" my={2}>
                Tecnologías utilizadas
              </Typography>
            </Grid>
            {technologies.map((technology, index) => (
              <Grid item key={technology + index}>
                <Chip variant="outlined" label={technology} color="secondary" size="small" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </CardContent>
      <CardActions>
        <Container fixed>
          <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '80px' }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                onClick={handleVisitClick}
                disabled={!link}
                sx={{ borderRadius: theme.shape.borderRadius }}
                fullWidth={true}
              >
                Visitar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Tooltip title="Proximamente" followCursor>
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  sx={{ borderRadius: theme.shape.borderRadius }}
                  fullWidth={true}
                >
                  Detalles
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
      </CardActions>
    </Card>
  );
};

export { CardCompany };
