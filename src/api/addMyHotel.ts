import { API_BASE_URL } from "../utilities/constants";
import { HotelType } from "../utilities/Types";

export const httpAddMyHotel = async (hotelFormData:FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body:hotelFormData,
  });
  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

return response.json()
};
export const httpGetMyHotel = async ():Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

return response.json()
};
