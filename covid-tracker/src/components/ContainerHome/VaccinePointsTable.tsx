import React, { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { WardType } from '../../types/provinceType';
import TablePaginationActions from './TablePaginationActions';

const useStyles = makeStyles({
  tableCell: {
    fontSize: '16px',
    fontWeight: '700'
  }
});
type DataRowVaccinePoint = {
  id: number | string;
  name: string;
  street: string;
  ward: WardType;
  district: string;
  province: string;
  headOfVaccinationCenter: string;
  numberVaccinationDesks: number;
};
interface VaccinePointTableProps {
  rows: DataRowVaccinePoint[];
  page: number;
  setPages: (newPage: number) => void;
}

enum TableHeaderTitle {
  STT = 'STT',
  Name = 'Tên điểm tiêm',
  Street = 'Số nhà, tên đường',
  Ward = 'Xã/Phường',
  District = 'Quận/Huyện',
  Province = 'Tỉnh/Thành phố',
  HeadOfVac = 'Người đứng đầu cơ sở tiêm chủng',
  NumberVacc = 'Số bàn tiêm'
}

const VaccinePointsTable: FC<VaccinePointTableProps> = ({
  rows,
  page,
  setPages
}: VaccinePointTableProps) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPages(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPages(0);
  };
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.values(TableHeaderTitle).map((value) => {
              return (
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  key={value}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              {Object.entries(row).map(([key, value]) =>
                key === 'ward' ? (
                  Object.entries(value).map(([ward, value]) =>
                    ward === 'name' ? (
                      <TableCell align="center" key={ward}>
                        {value}
                      </TableCell>
                    ) : null
                  )
                ) : (
                  <TableCell align="center" key={key}>
                    {value as string | number}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow
              style={{ height: 53 * emptyRows, alignItems: 'flex-end' }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={12}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={!rows.length || rows.length / rowsPerPage <= 0 ? 0 : page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page'
                },
                native: true
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default VaccinePointsTable;
