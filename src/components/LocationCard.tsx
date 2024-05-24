interface DayPassDiscount {
  value: number;
  message: string;
}

type PropertyProps = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  google_maps_url: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: DayPassDiscount;
  };
  manager_id: string | null;
  can_edit: boolean;
  imageUrl: string;
};

const LocationCard = ({ property }: { property: PropertyProps }) => (
  <div className="relative w-full md:w-[350px] cursor-pointer bg-white shadow-sm border rounded-md">
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between w-full py-3 px-2.5">
        <span className="text-sm font-semibold w-[240px] truncate">
          {property?.address}
        </span>
        <a href={property?.google_maps_url} target="_blank" rel="noreferrer">
          <div className="bg-[#f9f9f9] rounded-md border w-12 h-12 cursor-pointer flex flex-col items-center gap-1 py-1.5">
            <img
              src="../assets/assistant_direction.png"
              alt="direction_logo"
              className="h-4 w-4"
            />
            <span className="text-[10px]">6km</span>
          </div>
        </a>
      </div>
      <div className="px-2.5 py-1 flex-grow relative">
        <span className="text-[10px] text-yellow-400 px-2 py-1 font-bold bg-[#2F4B59] absolute top-3 left-4 rounded-sm">
          {property?.name}
        </span>
        <img
          src={property?.imageUrl}
          alt="prop_img"
          className="h-[270px] w-full object-cover rounded-md"
        />
      </div>
      <div className="px-2.5 py-6 flex gap-3 items-center justify-center">
        <button className="bg-[#f9f9f9] rounded-md border w-1/2 h-16 flex flex-col gap-1 py-1.5 px-2">
          <span className="font-medium text-[#514D2D] text-sm mt-1">
            Day Pass
          </span>
          <p className="font-semibold text-[16px]">
            ₹ {property?.day_pass_price}
            <span className="font-normal text-sm">/ Day</span>
          </p>
        </button>
        <button className="bg-[#ffcf4b] rounded-md border-[#ffcf4b] w-1/2 h-16 flex flex-col gap-1 py-1.5 px-2 relative">
          <span className="text-[10px] bg-[#003653] text-white font-medium text-center py-0.5 w-20 rounded-sm absolute right-10 -top-2">
            20% discount
          </span>
          <span className="font-medium text-[#514D2D] text-sm mt-1">
            Bulk Pass
          </span>
          <p className="font-semibold text-[16px]">
            ₹ 2400
            <span className="font-normal text-sm">/ 10 Days</span>
          </p>
        </button>
      </div>
    </div>
  </div>
);

export default LocationCard;
