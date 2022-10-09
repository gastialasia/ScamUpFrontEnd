import styles from '../styles/login.module.css';
import { Card, TextField, Button, Paper } from '@mui/material';

function LoginPage() {

    return (
        <div class={styles.main}>
            <div class={styles.outer}>
                <Paper elevation={4} class={styles.container}>
                    <br></br>
                    <h2 class={styles.field}>Log in</h2>
                    <div class={styles.field}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                    <div class={styles.field}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>    
                    <div class={styles.container}>
                        <Button variant="contained">Submit</Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default LoginPage;