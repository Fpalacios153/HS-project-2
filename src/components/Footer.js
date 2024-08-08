import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn, Public } from '@mui/icons-material';


export default function Footer() {
    return (
        <Box sx={{
            position: 'absolute',
            bottom: 0,
            width: "100%",
            height: "4rem",
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px'
        }}>
            <Typography>
                Pantry Sidekick 2024
                {/* &copy; */}
            </Typography>
            <Box display={"flex"} gap={2} >
                <a href="https://github.com/Fpalacios153" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/francisco-palacios-783619253/" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
                <a href="https://github.com/Fpalacios153/HS-project-2" target="_blank" rel="noreferrer">
                    <p>Repo</p>
                </a>
            </Box>
        </Box>
    )
}
// #footer {
//     position: absolute;
//     bottom: 0;
//     width: 100 %;
//     height: 2.5rem;            /* Footer height */
// }
