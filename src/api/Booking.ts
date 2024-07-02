import { API_BASE_URL } from "../utilities/constants";
import { HotelType } from "../utilities/Types";

export const httpFetchMyBookings = async ():Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-bookings`, {
    credentials: "include",
    })
    
  if (!response.ok) {
    throw new Error("Unable to fetch bookings");
  }
  return response.json();
  }