import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'src/routes/hooks';
import { Iconify } from 'src/components/iconify';

export function SignInView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: 'NOMBRE1@DGT.GOB.GT',
    password: 'password',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    router.push('/');
    console.log('[DATA] >>', formData);
  };

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="email"
        label="Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="ic:baseline-email" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        name="password"
        label="Contraseña"
        value={formData.password}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="mdi:password" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        color='success'
        type="submit"
        variant="contained"
        onClick={handleSignIn}
        startIcon={<Iconify icon="mdi:login" />}
      >
        Acceder
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box 
        gap={1.5}
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        sx={{ mb: 5 }}>
        <Typography variant="h4">DGT - ACTUALIZACION</Typography>
      </Box>
      {renderForm}
    </>
  );
}
