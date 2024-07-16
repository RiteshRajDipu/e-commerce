import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: 'mor_2314',
    password: '83r5^_',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };

    if (!formData.username) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your login logic here
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(data && data.token){
        navigate('/home');
        localStorage.setItem('token', data.token);
      }

      console.log('Login successful', data);
    } else {
      console.log('Login failed');
    }
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '350px',
        marginTop: '100px',
        marginLeft: '430px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <TextField
        fullWidth
        label="Email"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={Boolean(errors.username)}
        helperText={errors.username}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        margin="normal"
        sx={{ mt: 2 }}
      />
      <p style={{textAlign:'right'}}>Forgot Password?</p>
      <Button type="submit" style={{ backgroundColor: 'black', color: 'white' }} fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <p style={{textAlign:'center', marginTop:20}}> Don't have an account? Sign Up</p>
    </Box>
  );
};


export default Login;