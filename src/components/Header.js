import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'

export default function Header() {


    return (
        <Box sx={{ display: 'flex', bgcolor: '#707266', justifyContent: 'space-between' }}>
            <Box display='flex' sx={{ p: 2 }}>
                <Typography variant='h2' sx={{ textAlign: 'center', color: 'secondary.main', textShadow: "2px 2px 2px black" }}>
                    Pantry
                </Typography>
                <Typography variant='h2' sx={{ px: 1, textAlign: 'center', color: 'highlight.main', textShadow: "2px 2px 2px black" }} >
                    Sidekick
                </Typography>
            </Box>
            {/* <Typography>
                Sign In
            </Typography> */}
        </Box >
    )
}
