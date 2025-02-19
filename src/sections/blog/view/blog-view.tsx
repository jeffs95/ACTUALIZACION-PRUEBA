import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

export function BlogView() {

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Seccion 3
        </Typography>
      </Box>
      <Card sx={{
        boxShadow: 20
      }}>
          <div>
            Hola
          </div>
      </Card>
    </DashboardContent>
  );
}
