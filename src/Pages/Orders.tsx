import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Orders = () => {

    const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);

  const removeProduct = async (id: any) => {
    try {
      await axios.delete(
        `https://backend-clothing-store-q0jh.onrender.com/api/delivery/${id}`
      );
      window.location.reload();
    } catch (error: any) {
      console.error(error.data.response);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-clothing-store-q0jh.onrender.com/api/delivery"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div>
      <p className="mb-2">Orders</p>
      <div className="flex flex-col gap-2">

        {/* =======Order List====== */}
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">updatedAt</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {viewResult.map((item: any) => (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {item.firstName}
              </TableCell>
              <TableCell align="right">{item.lastName}</TableCell>
              <TableCell align="right">{item.phoneNumber}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.address}</TableCell>
              <TableCell align="right">{item.updatedAt}</TableCell>
              <TableCell align="right" onClick={() => removeProduct(item._id)}>X</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>
    </div>
  )
}

export default Orders