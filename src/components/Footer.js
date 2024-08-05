import { Box, Typography } from "@mui/material";
import Link from 'next/link';

export default function Footer() {
    return (
        <Box>
            <Typography>
                Pantry 2024
                <Link href='apples'>LinkedIn</Link>
                <Link href='appless'>GitHub</Link>
            </Typography>
        </Box>
    )
}
