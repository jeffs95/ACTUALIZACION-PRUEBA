import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function ModalForm({ open, handleClose }: ModalFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('User data:', formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>Nuevo Usuario</Typography>
        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} color="secondary">Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ ml: 2 }}>Guardar</Button>
        </Box>
      </Box>
    </Modal>
  );
}
