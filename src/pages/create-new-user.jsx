import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import {toast ,ToastContainer} from 'react-toastify';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useRouter } from 'src/routes/hooks';
import{Button,InputLabel,MenuItem,
    FormControl,    
    
    Select,   
    Container, 
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  Box,
  CircularProgress,
  FormControlLabel,
    TextField} from '@mui/material';
import { Label } from '@mui/icons-material';


// ----------------------------------------------------------------------

export default function CreateNewUserPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contacts: '',
        
       
      });
      const router = useRouter();
     

      const [loading, setLoading] = useState(false);

      const handleSubmit = (event) => {
        
        event.preventDefault();
        setLoading(true);      
        
        const url = 'http://localhost:8080/api/v1/users';      
        
        axios.post(url, formData)
          .then(response => {
            
            setLoading(false);
            
          
            toast.success("User added successfully", {
              position: "top-right", 
              autoClose: 1000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true, 
              draggable: true, 
              progress: undefined, 
              onClose: () => router.push('/user')
            });
                       

            console.log(response.data);
           
          })
          .catch(error => {
            toast.error('Something went wrong');
           
            console.error(error);
            
          });
      };

      
const labelStyle = {
  backgroundColor: '#f8d591', 
  padding: '10px', 
  width: '150px', 
  textAlign: 'right' 
};
      
 const handleChange = (event) => {     
     const { name, value } = event.target;      
     setFormData({
       ...formData, 
       [name]: value 
     });
 };

 const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
 
  return (
    <>
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
     <Container maxWidth="xl">
     <Breadcrumbs sx={{marginBottom:'50px', marginLeft:'100px', width:'100%'}} aria-label="breadcrumb">
        <StyledBreadcrumb
        
          component="a"
          href="/"
          label="Home"
       
        />
        <StyledBreadcrumb component="a" href="/user" label="Users" />
        <StyledBreadcrumb
          label="New User"
         
        />
      </Breadcrumbs>
    <div>
    <form onSubmit={handleSubmit}>
    <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="name">User Name</Label>
                </TableCell>
                <TableCell>
                  <TextField
                    id="name"
                    name="name"  
                    label="name"          
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    
                    />
                </TableCell>
              </TableRow>
             
          <TableRow>
            <TableCell style={labelStyle}>
              <Label htmlFor="contacts">Contacts</Label>
            </TableCell>
              <TableCell>
                <TextField
                  id="contacts"
                  name="contacts"
                  label="contacts"
                  type="text"
                  value={formData.contacts}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </TableCell>
          </TableRow>
      
              <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="email">Email</Label>
                </TableCell>
                <TableCell>
                  <TextField
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    value={formData.specialization}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
               </TableCell>
            </TableRow>
            
            <TableRow>
                <TableCell style={labelStyle}>
                  <Label htmlFor="email">Password</Label>
                </TableCell>
                <TableCell>
                  <TextField
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
               </TableCell>
            </TableRow>
       
                        
            </TableBody>
          </Table>
        </TableContainer>
              <Button
                type="submit"
                variant="contained"
                color="primary"                
                disabled={loading}
                fullWidth
                sx={{ 
                  height: 48,
                  '@media (min-width: 600px)': {
                    width: '50%',
                    marginLeft: '25%',
                    marginRight: '25%'
                  }
                }}
              >
                {loading ? (
              <CircularProgress size={24} color="inherit" /> 
            ) : (
              ' Add User'
            )}
           
          </Button>         
      </form>
      <ToastContainer />
    </div>
  </Container>
</Box>
</>
);
};

