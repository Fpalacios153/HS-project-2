import { Box, Typography } from '@mui/material'
import { GitHub, LinkedIn, Public } from '@mui/icons-material';


export default function Header() {


    return (
        <Box sx={{ display: 'flex', bgcolor: '#707266', justifyContent: 'space-between', alignItems: "center" }}>
            <Box display='flex' sx={{ p: 2 }}>
                <Typography variant='h2' sx={{ textAlign: 'center', color: 'secondary.main', textShadow: "2px 2px 2px black" }}>
                    Pantry
                </Typography>
                <Typography variant='h2' sx={{ px: 1, textAlign: 'center', color: 'highlight.main', textShadow: "2px 2px 2px black" }} >
                    Sidekick
                </Typography>
            </Box>
            <Box display={"flex"} gap={2} paddingRight={3} justifyContent={"center"} alignContent={'center'} >
                <a href="https://github.com/Fpalacios153" target="_blank" rel="noreferrer" title="GitHub Profile">
                    <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/francisco-palacios-783619253/" target="_blank" rel="noreferrer" title='LinkeIn Profile'>
                    <LinkedIn />
                </a>
                <a href="https://github.com/Fpalacios153/HS-project-2" target="_blank" rel="noreferrer" title="GitHub Repository">
                    <p>Repo</p>
                </a>
            </Box>
        </Box >
    )
}
