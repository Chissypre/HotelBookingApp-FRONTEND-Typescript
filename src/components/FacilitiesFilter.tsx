import { hotelFacilities } from "../config/hotel-options-config";


type Props = {
  selectedHotelFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedHotelFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Facilities</h4>
      {hotelFacilities.map((HotelFacility) => (
        <label key={HotelFacility} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={HotelFacility}
            checked={selectedHotelFacilities.includes(HotelFacility)}
            onChange={onChange}
          />
          <span>{HotelFacility}</span>
        </label>
      ))}
    </div>
  );
};

export default FacilitiesFilter;
