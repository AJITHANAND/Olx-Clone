import CarIcon from "../assets/icons/CarIcon";
import BikeIcon from "../assets/icons/BikeIcon";
import MobileIcon from "../assets/icons/MobileIcon";
import ElectronicIcon from "../assets/icons/ElectronicIcon";
import FurnitureIcon from "../assets/icons/FurnitureIcon";
import FashionIcon from "../assets/icons/FashionIcon";
import PetsIcon from "../assets/icons/PetsIcon";
import ServicesIcon from "../assets/icons/ServicesIcon";
import HouseIcon from "../assets/icons/HouseIcon";

export const categoriesContent = [
  {
    name: "Cars",
    icon: <CarIcon />,
    brand: ["Toyota", "Honda", "Ford", "BMW", "Audi", "Tata", "Maruti-Suzuki"],
    mobileIcon :"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/cars.png"
  },
  {
    name:'Properties',
    icon: <HouseIcon />,
    type:["For Sale: Houses & Apartments","For Rent: Houses & Apartments","Land","PG","Guest House"],
    mobileIcon :"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/properties.png"
  },
  {
    name: "Mobiles",
    icon: <MobileIcon />,
    brand: ["Samsung", "Apple", "OnePlus", "Oppo", "Vivo", "Realme", "Mi"],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/mobile.png"
  },
  {
    name: "Bikes",
    icon: <BikeIcon />,
    brand: ["Bajaj", "Yamaha", "KTM",'Royal Enfield','Honda', 'Hero','TVS', 'Suzuki', 'BMW','Ather'],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/bike.png"
  },
  {
    name: "Electronics & Appliances",
    icon: <ElectronicIcon />,
    mobileIcon: "https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/electronics.png"
  },
  {
    name: "Furniture",
    icon: <FurnitureIcon />,
    type:['Tables', 'Chairs', 'Couches', 'Beds' ],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/furniture.png"
  },
  {
    name: "Fashion",
    icon: <FashionIcon />,
    type: ["Men", "Women", "Kids"],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/fashion.png"

  },
  {
    name: "Pets",
    icon: <PetsIcon />,
    type: ["Dog", "Cat", "Bird","Other"],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/pets.png"
  },
  {
    name: "Services",
    icon: <ServicesIcon />,
    type: ["Car Wash", "Car Repair", "Car Insurance", "Car Rental", "Car Cleaning"],
    mobileIcon:"https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/icons/service.png"
  }
  ,
];
