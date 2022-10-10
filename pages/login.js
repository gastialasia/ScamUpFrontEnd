import styles from '../styles/login.module.css';
import { Paper, IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react';
import { Visibility, VisibilityOff} from '@mui/icons-material';
import bcrypt from 'bcryptjs';

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
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(e.target.password.value,salt);
        console.log(hashedPassword);
        const wasCorrect = bcrypt.compareSync("12345678", hashedPassword);
        console.log(wasCorrect);


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
                        <TextField id="email" label={erroremail?"Error":"Email"} error={erroremail} helperText={erroremail?"Invalid email":""} variant="outlined" sx={{m:1, width:'70%'}} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <TextField id="password" label={errorpass?"Error":"Password"} variant="outlined" sx={{m:1, width:'70%'}} error={errorpass} helperText={errorpass?"password must be 8 characters":""} type={values.showPassword ? 'text' : 'password'} onChange={e=>setPassword(e.target.value)} InputProps={{
                            endAdornment:(
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              )}} />
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