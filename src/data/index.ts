
// Define the interface for a single property
export interface PropertyProps {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_maps_url?: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    description: string | null;
    rules: string | null;
    amenities: string[] | null;
    images: string[];
    working_hours_start: string;
    working_hours_end: string;
    facilities: string | null;
    is_active: boolean;
    is_day_pass_enabled: boolean;
    day_pass_price: number;
    day_pass_discounts_percentage: {
      [key: string]: {
        value: number;
        message: string;
      };
    };
    manager_id: string | null;
    can_edit?: boolean;
    imageUrl: string; // Assuming imageUrl will be added dynamically
  }
  