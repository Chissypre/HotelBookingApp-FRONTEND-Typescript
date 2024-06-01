import { useParams } from "react-router-dom"
import { httpGetMyHotelById, httpUpdateMyHotelById } from "../api/addMyHotel"
import { useMutation, useQuery } from "react-query"
import ManageHotelForm from "../forms/ManageHotelForms/ManageHotelForm"
import { toast } from "react-toastify"


const EditHotel = () => {
  const {hotelId} = useParams()
  const {data:hotel} = useQuery("fetchMyHotelById", () => httpGetMyHotelById(hotelId || ''),
{
enabled:!!hotelId
}
)
const {mutate, isLoading} = useMutation(httpUpdateMyHotelById,{
  onSuccess:() => {
    toast.success("Hotel Updated");
  },
  onError: (error: Error) => {
    toast.error(error.message);
  },
})
const handleSave = (hotelFormData: FormData) => {

  mutate(hotelFormData)
  }
  return <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading}/>
}

export default EditHotel