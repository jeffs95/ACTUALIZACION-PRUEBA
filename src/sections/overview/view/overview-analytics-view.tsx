import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { Card } from '@mui/material';

export function OverviewAnalyticsView() {

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Seccion 1
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

