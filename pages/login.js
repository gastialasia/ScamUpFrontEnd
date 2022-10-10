import styles from '../styles/login.module.css';
import { Card, TextField, Button, Paper } from '@mui/material';

function LoginPage() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const first=e.target.email.value;
        const last=e.target.password.value;
        console.log(JSON.stringify({username: first, password: last}));
    }

    // function handleSubmit() {
    //     console.log(this.email);
    //     console.log(this.password);
    // }

    return (
        <div className={styles.main}>
            <div className={styles.outer}>
                <form onSubmit={handleSubmit}>
                <Paper elevation={4} className={styles.container}>
                    <br></br>
                    <h2 className={styles.field}>Log in</h2>
                    <div className={styles.field}>
                        <TextField id="email" label="Username" variant="outlined" />
                    </div>
                    <div className={styles.field}>
                        <TextField id="password" label="Password" variant="outlined" />
                    </div>    
                    <div className={styles.container}>
                        {/* <Button variant="contained" >Submit</Button> */}
                        <button className={styles.button}>Submit</button>
                    </div>
                </Paper>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

// import { Button, Card } from "@mui/material";
// import { TextField } from "@mui/material";

// export default function LoginPage() {  
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const first=e.target.username.value;
//         const last=e.target.password.value;
//         console.log(JSON.stringify({username: first, password: last}));
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <Card>
//                     <div>
//                     <TextField id="username" label="Username" variant="outlined" margin="normal"/>
//                     </div>
//                     <div>
//                     <TextField id="password" label="Password" variant="outlined" margin="normal"/>
//                     </div>
//                     {/* <Button variant="outlined">Submit</Button> */}
//                     <div>
//                     <button>Submit</button>
//                     </div>
//                 </Card>
//             </form>
//         </div>
//     )
// }