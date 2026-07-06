export interface Vehicle {
  id: string;
  name: string;
  modelYear: string;
  pricePerDay: number;
  transmission: string;
  fuelType: string;
  seatingCapacity: number;
  features: string[];
  images: string[];
}

export const fleet: Vehicle[] = [
  {
    id: "i20-knight",
    name: "Hyundai i20 Knight Edition",
    modelYear: "2026",
    pricePerDay: 2799,
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 5,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Reverse Camera",
      "Music System",
      "Power Steering",
      "ABS",
      "Airbags",
      "USB Charging"
    ],
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "i20-asta",
    name: "Hyundai i20 Asta Optional",
    modelYear: "2019",
    pricePerDay: 2499,
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 5,
    features: [
      "Premium Interior",
      "Alloy Wheels",
      "Touchscreen",
      "Air Conditioning",
      "Music System",
      "Power Steering",
      "ABS",
      "Airbags"
    ],
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "brezza",
    name: "Maruti Brezza",
    modelYear: "2024",
    pricePerDay: 3499,
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 5,
    features: [
      "SUV Stance",
      "Rear Camera",
      "Spacious Boot",
      "Touchscreen",
      "Air Conditioning",
      "Power Steering",
      "ABS",
      "Airbags"
    ],
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "thar",
    name: "Mahindra Thar 4WD",
    modelYear: "2023",
    pricePerDay: 4500,
    transmission: "Manual",
    fuelType: "Diesel",
    seatingCapacity: 4,
    features: [
      "4x4 Drivetrain",
      "Hard Top",
      "Adventure Ready",
      "Touchscreen",
      "Premium Interior",
      "Air Conditioning",
      "GPS Navigation",
      "Bluetooth"
    ],
    images: [
      "https://images.unsplash.com/photo-1620005574345-0d297a7a372d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596700030588-e215442ed3b9?auto=format&fit=crop&q=80"
    ]
  }
];
