import styles from '../styles/login.module.css';
import { Paper, IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material/Visibility';

function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorpass, setErrorPass] = useState(false);
    const [erroremail, setErrorEmail] = useState(false);

    const [values, setValues] = useState({
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        let validEmail=email.length > 6 && isValidEmail(email);
        let validPassword=password.length > 6;
        if(validEmail && validPassword)
            console.log(JSON.stringify({email: email, password: password}));
        setErrorEmail(!validEmail);
        setErrorPass(!validPassword);
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <div className={styles.main}>
            <div className={styles.outer}>
                <form onSubmit={handleSubmit}>
                <Paper elevation={4} className={styles.container}>
                    <br></br>
                    <h2 className={styles.field}>Log in</h2>
                    <div className={styles.field}>
                        {!erroremail?<TextField id="email" label="Email" variant="outlined" onChange={e=>setEmail(e.target.value)} />:<TextField error id="outlined-error" label="Error" helperText="Invalid email" onChange={e=>setEmail(e.target.value)} />}
                    </div>
                    <div className={styles.field}>
                        {!errorpass?
                        <TextField id="password" label="Password" variant="outlined" onChange={e=>setPassword(e.target.value)} />
                        :<TextField error id="outlined-error" label="Error" helperText="Password is too short" onChange={e=>setPassword(e.target.value)} />}
                    </div>    
                    <div className={styles.container}>
                        <button className={styles.button}>Submit</button>
                    </div>
                </Paper>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;