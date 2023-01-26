export interface Travel {
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  price: number;
  seats: number;
  description: string;
  imageLink: string;
}

export const travels :Travel[] = [
  {
    name: 'Przygoda w amazonii',
    country: 'Boliwia',
    startDate: '2023-1-1',
    endDate: '2023-2-2',
    price: 2000,
    seats: 10,
    description: 'Niesmawite doświadczenie w jednym z najbardziej magicznych miesjc na świecie',
    imageLink: "/assets/images/amazonia.jpg"
  },
  {
    name: 'Kowbojskie Życie',
    country: 'USA',
    startDate: '2023-2-13',
    endDate: '2023-2-20',
    price: 1200,
    seats: 5,
    description: 'Spędź czas jak prawidziwy kowboj na farmie w usa',
    imageLink: "/assets/images/western.jpg"
  },
  {
    name: 'Królewskim szlakiem',
    country: 'Polska',
    startDate: '2024-7-7',
    endDate: '2024-7-20',
    price: 500,
    seats: 32,
    description: 'Zwiedź polskę szklakiem wspaniałych średniowiecznych warowni',
    imageLink: "/assets/images/castle.jpg"
  }, {
    name: 'Wycieczka na Giewont',
    country: 'Polska',
    startDate: '2024-5-1',
    endDate: '2024-5-15',
    price: 500,
    seats: 20,
    description: 'Świetna wycieczka dla pasjonatów chodzenia po górach',
    imageLink: "/assets/images/mountains.jpg"
  },{
    name: 'Kosmiczna podróż',
    country: 'Księżyc',
    startDate: '2025-2-2',
    endDate: '2025-2-4',
    price: 10000,
    seats: 5,
    description: 'zdąbądź księżyc z tą wycieczką przygotowaną w współpracy z NASA',
    imageLink: "/assets/images/moon.jpg"
  },{
    name: 'Tania wycieczka!',
    country: 'Polska',
    startDate: '2023-1-1',
    endDate: '2023-2-2',
    price: 10,
    seats: 10,
    description: 'Nie jest najlepiej ale jest tanio :)',
    imageLink: "/assets/images/prison.jpg"
  },{
    name: 'Wycieczka do miasta zakochanych',
    country: 'Francja',
    startDate: '2023-6-6',
    endDate: '2023-6-12',
    price: 1111,
    seats: 2,
    description: 'Zwiedź stolice z partnerką i spraw jej świetny prezent',
    imageLink: "/assets/images/paris.jpg"
  },{
    name: 'Dla pawdziwych glgitorów',
    country: 'Włochy',
    startDate: '2023-7-7',
    endDate: '2023-7-9',
    price: 500,
    seats: 20,
    description: 'Spędź weekend zwiedzając koloseum',
    imageLink: "/assets/images/rome.jpg"
  },{
    name: 'Faraońska wycieczka',
    country: 'Egipt',
    startDate: '2023-1-1',
    endDate: '2023-2-2',
    price: 1324,
    seats: 10,
    description: 'Zwiedź jeden z osmiu cudów świata',
    imageLink: "/assets/images/egypt.jpg"
  },{
    name: 'Pobyt w raju',
    country: 'Bali',
    startDate: '2023-8-1',
    endDate: '2023-8-14',
    price: 3000,
    seats: 50,
    description: 'Poczuj się jak w raju na tej pięknej wypie',
    imageLink: "/assets/images/bali.png"
  },
];
