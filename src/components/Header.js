import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'

export default function Header() {


    return (
        <Box display='flex' bgcolor='#707266' justifyContent={'space-between'} >
            <Box display='flex'>
                <Typography color={"#69d2e7"}>
                    Pantry
                </Typography>
                <Typography color={"#fa6900"}>
                    Sidekick
                </Typography>
            </Box>
            <Typography>
                Sign In
            </Typography>
        </Box >
    )
}
