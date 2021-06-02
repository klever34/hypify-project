import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { withStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/header/NavHeader";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Container, Grid, Button, Hidden } from "@material-ui/core";
import Footer from "../../components/footer/Footer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { format } from "date-fns";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
import Drawer from "@material-ui/core/Drawer";
import { rows } from "./data";

const StyledTableCell = withStyles((theme: Theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {},
  datePickerWrapper: {
    position: "absolute",
  },
  drawer: {
    width: "70vw",
  },
});

export default function ActivityHistory() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({});
  const toggle = () => setOpen(!open);
  const classes = useStyles();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log("changepage", newPage);
    setPage(newPage);
  };

  const checkDatePickerValue = () => {
    if (dateRange.startDate && dateRange.endDate) return true;
    return false;
  };

  const handleDatePicker = () => {
    return `${format(
      new Date(dateRange.startDate || ""),
      "dd-MMM-yy"
    )} to  ${format(new Date(dateRange.endDate || ""), "dd-MMM-yy")}`;
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Container style={{ margin: "60px auto" }}>
          <Grid
            container
            spacing={5}
            direction="row"
            justify="space-between"
            style={{ marginBottom: "10px" }}
          >
            <Grid item container alignItems="flex-end" xs={6} md={3}>
              <Hidden smUp={true}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  color="secondary"
                  onClick={() => setOpenDrawer(true)}
                >
                  Filter
                </Button>
              </Hidden>

              <Hidden xsDown={true}>
                <Box width={1}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => toggle()}
                    value={
                      checkDatePickerValue()
                        ? handleDatePicker()
                        : "Select  Date Range"
                    }
                  />
                  <DateRangePicker
                    open={open}
                    toggle={toggle}
                    wrapperClassName={classes.datePickerWrapper}
                    onChange={(range) => setDateRange(range)}
                  />
                </Box>
              </Hidden>
            </Grid>
            <Grid item container alignItems="flex-end" xs={6} md={3}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="primary"
              >
                Export CSV
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Days</StyledTableCell>
                  <StyledTableCell align="center">Date</StyledTableCell>
                  <StyledTableCell align="right">Clock In</StyledTableCell>
                  <StyledTableCell align="right">Clock Out</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {format(row.date, "EEEE")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {format(row.date, "dd-MMM-yyyy")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {format(row.clockin, "hh:mm aa")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {format(row.clockout, "hh:mm aa")}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
      </main>
      <Footer />
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <h2>hello world</h2>
      </Drawer>
    </React.Fragment>
  );
}