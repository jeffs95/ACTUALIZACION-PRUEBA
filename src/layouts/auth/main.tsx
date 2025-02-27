import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

type MainProps = BoxProps & {
  layoutQuery: Breakpoint;
};

export function Main({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        backgroundColor: '#e9ecef',
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: theme.spacing(3, 2, 10, 2),
        [theme.breakpoints.up(layoutQuery)]: {
          p: theme.spacing(10, 0, 10, 0),
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        src="/assets/images/logo.png"
        sx={{
          width: 400,
          height: 'auto',
          mb: 2,
        }}
      />

      <Box
        sx={{
          borderTop: '4px solid #0d82ff',
          boxShadow: 10,
          py: 5,
          px: 3,
          width: 1,
          borderRadius: 1.3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: 'background.default',
          maxWidth: 'var(--layout-auth-content-width)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

