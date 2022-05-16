
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IUniversity } from '../interfaces/IUniversity';


export default function University(props : IUniversity) {
  return (
    <Card sx={{ minWidth: 275, height: 120 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.domains[0]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
