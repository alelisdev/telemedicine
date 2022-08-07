import React, { useState, useEffect, useCallback } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@material-ui/icons/Add'
// import AlertDialog from './DeleteConfirmModal';
import baseUrl from '../../../utils/baseUrl';
import EditIcon from "@material-ui/icons/EditOutlined";
import { useRouter } from 'next/router';
import CustomTableHead from '../../Common/CustomTableHead';
import stableSort from '../../../utils/stableSort';
import getComparator from '../../../utils/getComparator';
import parseISOString from '../../../utils/parseISOString';
import headCells from './headCells';

export default function UsersTable(props) {
    const router = useRouter();
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState(props.data || []);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'desc';
        setOrder(isAsc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = users.map((blog) => blog._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, _id) => {
        const selectedIndex = selected.indexOf(_id);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, _id);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (_id) => selected.indexOf(_id) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

   

    const viewUser = (_id) => {
        router.push(`/admin/users/view/${_id}`)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                        ...(selected.length > 0 && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                        }),
                    }}
                    >
                    {selected.length > 0 ? (
                        <Typography
                        sx={{ flex: '1 1 100%' }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                        >
                        {selected.length} selected
                        </Typography>
                    ) : (
                        <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        >
                        users
                        </Typography>
                    )}

                    {selected.length > 0 ? (
                        <Tooltip title="Delete">
                        <IconButton onClick={handleOpen}>
                            <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Add New">
                        <IconButton onClick={() => {
                            router.push('/admin/users/new')
                        }}>
                            <AddIcon />
                        </IconButton>
                        </Tooltip>
                    )}
                </Toolbar>
                <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size='medium'
                >
                    <CustomTableHead
                        numSelected={selected.length}
                        order={order}
                        headCells={headCells}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={users?.length}
                    />
                    <TableBody>
                    {stableSort(users, getComparator(order, orderBy))
                        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ?.map((user, index) => {
                        const isItemSelected = isSelected(user._id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={user._id}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            onChange={(e) => handleClick(e, user._id)}
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="left"><a href={`/blog-details/${user._id}`} rel="noreferrer" target='_blank'>{user.fname + ' ' + user.lname}</a></TableCell>
                                    <TableCell align="left">{ user.role }</TableCell>
                                    {/* <TableCell align="left">{blog.category}</TableCell>
                                    <TableCell align="left">{parseISOString(blog.date)}</TableCell>
                                    <TableCell align="left">
                                        <picture>
                                            <img src={blog.imagePath ? `${baseUrl}/${blog.imagePath}` : '../images/default-image.png'} height={50} alt='blogImage' />
                                        </picture>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => editBlog(blog._id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell> */}
                                </TableRow>
                            );
                        })}
                    {emptyRows > 0 && (
                        <TableRow
                        style={{
                            height: 53 * emptyRows,
                        }}
                        >
                        <TableCell colSpan={7} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users?.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {/* <AlertDialog open={open} handleClose={handleClose} selected={selected} setBlogs={setBlogs} setSelected={setSelected} /> */}
        </Box>
    );
}


