import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { currency } from "../App";


const ListProducts = ({token}:any) => {

  const [list, setList] = useState<any>([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/products/list")
      if(response.data.success){
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  const removeProduct = async (id:any) => {
    try {
      const response = await axios.post(`http://localhost:7000/api/products/remove`,{id}, 
        {
          headers:{
            token
          }
        }
      );
      if(response.data.success){
        toast.success(response.data.message)
        fetchList();
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])


  return (
    <div>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* ====List Table Title==== */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* =======Product List====== */}
        {
          list.map((item: any, index: number) => (
            <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-2 border gap-2 text-sm" key={index}>
              <img className="w-15" src={item.images[0]} alt="" />
              <p>{item.productName}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">X</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ListProducts