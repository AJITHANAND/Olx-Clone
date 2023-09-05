import CarIcon from "../assets/icons/CarIcon";
import BikeIcon from "../assets/icons/BikeIcon";
import MobileIcon from "../assets/icons/MobileIcon";
import ElectronicIcon from "../assets/icons/ElectronicIcon";
import FurnitureIcon from "../assets/icons/FurnitureIcon";
import FashionIcon from "../assets/icons/FashionIcon";
import PetsIcon from "../assets/icons/PetsIcon";
import ServicesIcon from "../assets/icons/ServicesIcon";

export const categoriesContent = [
  {
    name: "Cars",
    icon: <CarIcon />,
    brand: ["Toyota", "Honda", "Ford", "BMW", "Audi", "Tata", "Maruti-Suzuki"],
  },
  {
    name: "Mobiles",
    icon: <MobileIcon />,
    brand: ["Samsung", "Apple", "OnePlus", "Oppo", "Vivo", "Realme", "Mi"],
  },
  {
    name: "Bikes",
    icon: <BikeIcon />,
    brand: ["Bajaj", "Yamaha", "KTM",'Royal Enfield','Honda', 'Hero','TVS', 'Suzuki', 'BMW','Ather'],
  },
  {
    name: "Electronics & Appliances",
    icon: <ElectronicIcon />,
  },
  {
    name: "Furniture",
    icon: <FurnitureIcon />,
  },
  {
    name: "Fashion",
    icon: <FashionIcon />,
    type: ["Men", "Women", "Kids"],

  },
  {
    name: "Pets",
    icon: <PetsIcon />,
    type: ["Dog", "Cat", "Bird","Other"],
  },
  {
    name: "Services",
    icon: <ServicesIcon />,
    type: ["Car Wash", "Car Repair", "Car Insurance", "Car Rental", "Car Cleaning"],
  }
  ,
];
