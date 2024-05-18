import { useMutation } from "react-query"
import ManageHotelForm from "../forms/ManageHotelForms/ManageHotelForm"
import { toast } from "react-toastify";
import { httpAddMyHotel } from "../api/addMyHotel";

const AddHotels = () => {
  const {mutate, isLoading} = useMutation(httpAddMyHotel, {
    onSuccess:() => {
      toast.success("Hotel Saved");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  const handleSave = (hotelFormData: FormData) => {

    mutate(hotelFormData)
    }
  return (
    <ManageHotelForm onSave={handleSave} isLoading={isLoading}/>
  )
}

export default AddHotels