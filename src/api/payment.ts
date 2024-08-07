import { BookingFormData } from "../forms/ManageHotelForms/BookingForm/BookingForm";
import { API_BASE_URL } from "../utilities/constants";

export type PaymentIntentResponse = {
  paymentIntentId: string;
  clientSecret: string;
  totalCost: number;
};





export const httpCreatePaymentIntent = async (hotelId:string, numberOfNights:string):Promise<PaymentIntentResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelId}/bookings/payment-intent`, {
    credentials: "include",
    method: "POST",
    body:JSON.stringify({
      numberOfNights
    }),
    headers: {
      "Content-Type": "application/json",
    },

  })
  if (!response.ok) {
    throw new Error("Error fetching payment intent");
  }
  return response.json()
}

export const httpCreateRoomBooking = async (formData:BookingFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/hotels/${formData.hotelId}/bookings`, {
    credentials: "include",
    method: "POST",
    body:JSON.stringify({
      formData
    }),
    headers: {
      "Content-Type": "application/json",
    },

  })
  if (!response.ok) {
    throw new Error("Error Booking Room");
  }
  
  }