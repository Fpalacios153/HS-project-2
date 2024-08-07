import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn, Public } from '@mui/icons-material';


export default function Footer() {
    return (
        <Box>
            <Typography>
                Pantry 2024


            </Typography>
            <a href="https://github.com/Fpalacios153" target="_blank" rel="noreferrer">
                <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/francisco-palacios-783619253/" target="_blank" rel="noreferrer">
                <LinkedIn />
            </a>
        </Box>
    )
}
