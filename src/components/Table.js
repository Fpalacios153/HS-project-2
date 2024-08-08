import { useState } from "react"

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'quantity',
        label: 'Quantity',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'population',
    //     label: 'Population',
    //     minWidth: 170,
    //     align: 'left',
    //     format: (value) => value.toLocaleString('en-US'),
    // },

]
export default function StickyTable({ rows, removeItem, addItem, setupdatedName, handleEditOpen, setItemName }) {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [count, setCount] = useState(0)

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(0)
    }


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" display='flex' justify-content="center">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell key={'1'}>
                                Add/Remove/Edit
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {

                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <>
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}

                                                    </TableCell>
                                                </>
                                            );

                                        })}
                                        <TableCell key={row.id}>
                                            <IconButton variant="contained" sx={{ color: 'highlight.main', ":hover": { bgcolor: '#a7dbd8' } }} onClick={() => { removeItem(row.id) }}>
                                                <RemoveCircleOutlineRoundedIcon color="orange" />
                                            </IconButton>
                                            <IconButton variant="contained" sx={{ color: 'secondary.main', ":hover": { bgcolor: '#f38630' } }} onClick={() => { addItem(row.id) }}>
                                                <AddCircleIcon />
                                            </IconButton>
                                            <IconButton variant='contained' onClick={() => {
                                                setupdatedName(row.name)
                                                setItemName(row.id)
                                                handleEditOpen()
                                            }}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    )
}
