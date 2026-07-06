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
      "USB Charging",
      "Sunroof"
    ],
    images: [
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783348932/IMG_2627_cmbsmi.jpg",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783348933/IMG_2625_zfrbra.jpg",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783348932/IMG_2626_j56pkc.jpg"
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
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349180/IMG_1621_padjs8.jpg",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349180/IMG_1627_d9pl8x.jpg"
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
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349363/IMG_2630_w6zti1.jpg",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349364/IMG_2628_hxcyhr.jpg",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349363/IMG_2629_irmurj.jpg"
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
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783330746/IMG_2632_duw1qo.png",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349407/IMG_2633_b9zwzk.png",
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1783349407/IMG_2634_ignh6f.png"
    ]
  }
];
