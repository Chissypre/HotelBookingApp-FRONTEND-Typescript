import { API_BASE_URL } from "../utilities/constants";
import { HotelType } from "../utilities/Types";

export const httpFetchHotels = async ():Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/hotels`)
  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }
  return response.json();
  }