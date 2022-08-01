import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import AlertDialog from './DeleteConfirmModal';
import headCells from './headCells';
import baseUrl from '../../../utils/baseUrl';
import parseISOString from '../../../utils/parseISOString';
import axios from 'axios';
import EditIcon from "@material-ui/icons/EditOutlined";
import { useRouter } from 'next/router';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function BlogContents() {

    const router = useRouter();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [blogs, setBlogs] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelecteds = blogs.map((blog) => blog._id);
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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - blogs.length) : 0;

    useEffect(async () => {
        axios.get(`${baseUrl}/api/blogs`).then((res) => {
            setBlogs(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const editBlog = (_id) => {
        router.push(`/admin/blogs/edit/${_id}`)
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
                        Blogs
                        </Typography>
                    )}

                    {selected.length > 0 ? (
                        <Tooltip title="Delete">
                        <IconButton onClick={handleOpen}>
                            <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Filter list">
                        <IconButton onClick={() => {
                            router.push('/admin/blogs/new')
                        }}>
                            <Add />
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
                    <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={blogs.length}
                    />
                    <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                    {stableSort(blogs, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((blog, index) => {
                        const isItemSelected = isSelected(blog._id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={blog._id}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            onChange={(e) => handleClick(e, blog._id)}
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="left"><a href={`/blog/details/${blog._id}`} target='_blank'>{blog.title}</a></TableCell>
                                    <TableCell align="left">{ blog.content.length > 60 ? blog.content.slice(0, 60) + '...' : blog.content }</TableCell>
                                    <TableCell align="left">{parseISOString(blog.date)}</TableCell>
                                    <TableCell align="left">
                                        <img src={`${baseUrl}/${blog.imagePath}`} height={50} />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => editBlog(blog._id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    {emptyRows > 0 && (
                        <TableRow
                        style={{
                            height: 53 * emptyRows,
                        }}
                        >
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={blogs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <AlertDialog open={open} handleClose={handleClose} selected={selected} setBlogs={setBlogs} setSelected={setSelected} />
        </Box>
    );
}
