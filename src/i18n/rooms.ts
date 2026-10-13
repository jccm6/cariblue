import type { Locale } from "./config";

export interface Room {
	title: string;
	slug: string;
	description: string;
	image: string;
	acreage: string;
	guests: string;
	beds: string;
}

export interface RoomPageExtra {
	title: string;
	heroImage: string;
	gallery: string[];
	paragraphs: string[];
	amenities: string[];
	otherRooms: string[];
}

const rooms = {
	es: [
		{
			title: "Estándar King",
			slug: "estandar-king",
			description: "¡Tu escapada junto al mar te espera aquí! Habitaciones con espléndida vista al jardín y un toque cercano a la playa.",
			image: "https://i.imgur.com/dBaSELi.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Beach Loft",
			slug: "beach-loft",
			description: "El Beach Loft es un refugio práctico y acogedor, ideal para quienes buscan disfrutar de la cercanía del mar en un ambiente confortable.",
			image: "https://i.imgur.com/KTobwyy.png",
			acreage: "30 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Beach Studio",
			slug: "beach-studio",
			description:
				"Disfruta de este cómodo estudio a pocos pasos de Playa Cocles. Cuenta con cama King, aire acondicionado, WiFi de alta velocidad, cocina equipada y escritorio, ideal para descansar o trabajar en un ambiente tranquilo.",
			image: "https://i.imgur.com/OTApYwZ.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Beach Apartment",
			slug: "beach-apartment",
			description:
				"A pocos pasos de Playa Cocles, este apartamento ofrece comodidad y una ubicación privilegiada en el Caribe. Cuenta con habitación principal con cama king, segunda habitación con dos camas individuales, aire acondicionado, living con TV de 55” y cocina americana completamente equipada.",
			image: "https://i.imgur.com/lu0oGrw.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Triple Económica",
			slug: "triple-economica",
			description: "Nuestras habitaciones estándar son nuestro alojamiento más popular. Tienen vista al jardín.",
			image: "https://i.imgur.com/uBybFVw.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "2",
		},
		{
			title: "Habitación Estándar Triple",
			slug: "habitacion-estandar-triple",
			description:
				"Una opción cómoda y funcional, ideal para quienes buscan disfrutar de una estancia relajante con todas las comodidades esenciales. Su ambiente acogedor la convierte en el espacio perfecto para descansar y disfrutar de la experiencia Cariblue.",
			image: "https://i.imgur.com/s9xy7bM.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "2",
		},
		{
			title: "Habitación Familiar Económica",
			slug: "habitacion-familiar-economica",
			description:
				"Habitación amplia y cómoda, ideal para familias que buscan relajarse. Cuenta con todas las comodidades esenciales para disfrutar una estancia placentera y memorable en el Caribe costarricense.",
			image: "https://i.imgur.com/uedMjFe.jpeg",
			acreage: "30 m²",
			guests: "4",
			beds: "3",
		},
		{
			title: "Habitación Superior 2 Queen",
			slug: "habitacion-superior-2-queen",
			description: "Espaciosa y confortable, ideal para disfrutar de una estancia relajante con mayor comodidad y todas las facilidades para una experiencia placentera.",
			image: "https://i.imgur.com/XDSxFEb.jpeg",
			acreage: "30 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Habitación Superior King",
			slug: "superior-king",
			description: "Nuestras habitaciones superior se encuentran en el sector selva del resort, son una excelente opción para parejas.",
			image: "https://i.imgur.com/SY9DVqo.jpeg",
			acreage: "35 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Bungalow King",
			slug: "bungalow-king",
			description: "Situados en la zona selvática del hotel, rodeados de árboles centenarios y exuberantes flores tropicales.",
			image: "https://i.imgur.com/Lw7lCAa.jpeg",
			acreage: "40 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Bungalow con 2 camas Queen",
			slug: "bungalow-queen",
			description: "Nuestras bungalow jungle rooms con 2 camas queen se encuentran en el sector selva del resort, son una excelente opción para parejas.",
			image: "https://i.imgur.com/1JMkpUm.jpeg",
			acreage: "35 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Junior Suite",
			slug: "junior-suite",
			description: "Ubicada en el sector de la jungla, cerca de la piscina principal, esta habitación especial es – con sus 80 metros cuadrados. – la más espaciosa que ofrecemos.",
			image: "https://i.imgur.com/IjSQ9PU.jpeg",
			acreage: "80 m²",
			guests: "5",
			beds: "2",
		},
		{
			title: "Jungle House",
			slug: "jungle-house",
			description:
				"Ubicados en el sector de la selva del hotel, rodeados de arboles centenarios y flores tropicales, nuestros tres bungalows de madera son una excelente opción para familias que quieran descansar rodeados de naturaleza.",
			image: "https://i.imgur.com/opsbdb4.jpeg",
			acreage: "90 m²",
			guests: "7",
			beds: "4",
		},
		{
			title: "Ocean Beach View Suites",
			slug: "ocean-beach-view-suites",
			description: "Ubicado frente al mar, este módulo consta de 3 en la planta alta que tienen una magnifica vista a la playa Cocles.",
			image: "https://i.imgur.com/WPi0pz8.jpeg",
			acreage: "55 m²",
			guests: "6",
			beds: "3",
		},
		{
			title: "Ocean Pool View Suites",
			slug: "ocean-pool-view-suites",
			description: "Ubicado frente al mar, este módulo consta de 3 suites en la planta baja que tienen salida directa a una piscina con cascada.",
			image: "https://i.imgur.com/3mZJ51W.jpeg",
			acreage: "55 m²",
			guests: "6",
			beds: "3",
		},
	],
	en: [
		{
			title: "Standard King",
			slug: "estandar-king",
			description: "Your seaside escape awaits here. Rooms with a splendid garden view and a close connection to the beach.",
			image: "https://i.imgur.com/dBaSELi.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Beach Loft",
			slug: "beach-loft",
			description: "Beach Loft is a practical and welcoming retreat, ideal for guests who want to enjoy the sea nearby in a comfortable setting.",
			image: "https://i.imgur.com/KTobwyy.png",
			acreage: "30 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Beach Studio",
			slug: "beach-studio",
			description:
				"Enjoy this comfortable studio just steps from Cocles Beach. It features a king-size bed, air conditioning, high-speed Wi-Fi, a fully equipped kitchen, and a desk—ideal for relaxing or working in a peaceful setting.",
			image: "https://i.imgur.com/OTApYwZ.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Beach Apartment",
			slug: "beach-apartment",
			description:
				"Located just steps from Cocles Beach, this apartment offers comfort and a prime Caribbean location. It features a master bedroom with a king-size bed, a second bedroom with two single beds, air conditioning, a living area with a 55-inch TV, and a fully equipped open-plan kitchen.",
			image: "https://i.imgur.com/lu0oGrw.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Economy Triple",
			slug: "triple-economica",
			description: "Our standard rooms are our most popular accommodation and offer a garden view.",
			image: "https://i.imgur.com/uBybFVw.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "2",
		},
		{
			title: "Standard Triple Room",
			slug: "habitacion-estandar-triple",
			description:
				"A comfortable and functional option, ideal for guests looking to enjoy a relaxing stay with all the essential comforts. Its welcoming atmosphere makes it the perfect space to rest and enjoy the Cariblue experience.",
			image: "https://i.imgur.com/s9xy7bM.jpeg",
			acreage: "30 m²",
			guests: "3",
			beds: "2",
		},
		{
			title: "Economy Family Room",
			slug: "habitacion-familiar-economica",
			description: "A welcoming and functional room for families looking to rest surrounded by nature without compromising comfort.",
			image: "https://i.imgur.com/uedMjFe.jpeg",
			acreage: "30 m²",
			guests: "4",
			beds: "3",
		},
		{
			title: "Superior 2 Queen Room",
			slug: "habitacion-superior-2-queen",
			description: "Spacious and comfortable, ideal for enjoying a relaxing stay with extra comfort and all the facilities for a pleasant experience.",
			image: "https://i.imgur.com/XDSxFEb.jpeg",
			acreage: "30 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Superior King Room",
			slug: "superior-king",
			description: "Our superior rooms are located in the jungle area of the resort and are an excellent option for couples.",
			image: "https://i.imgur.com/SY9DVqo.jpeg",
			acreage: "35 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Bungalow King",
			slug: "bungalow-king",
			description: "Located in the hotel's jungle area, surrounded by ancient trees and lush tropical flowers.",
			image: "https://i.imgur.com/Lw7lCAa.jpeg",
			acreage: "40 m²",
			guests: "3",
			beds: "1",
		},
		{
			title: "Bungalow with 2 Queen Beds",
			slug: "bungalow-queen",
			description: "Our jungle bungalows with two queen beds are located in the resort's jungle area and are a great option for couples or families.",
			image: "https://i.imgur.com/1JMkpUm.jpeg",
			acreage: "35 m²",
			guests: "4",
			beds: "2",
		},
		{
			title: "Junior Suite",
			slug: "junior-suite",
			description: "Located in the jungle area near the main pool, this special room is our most spacious option at 80 square meters.",
			image: "https://i.imgur.com/IjSQ9PU.jpeg",
			acreage: "80 m²",
			guests: "5",
			beds: "2",
		},
		{
			title: "Jungle House",
			slug: "jungle-house",
			description:
				"Located in the hotel's jungle area, surrounded by ancient trees and tropical flowers, our wooden bungalows are an excellent option for families looking to rest in nature.",
			image: "https://i.imgur.com/opsbdb4.jpeg",
			acreage: "90 m²",
			guests: "7",
			beds: "4",
		},
		{
			title: "Ocean Beach View Suites",
			slug: "ocean-beach-view-suites",
			description: "Located in front of the sea, this upper-floor module features suites with a magnificent view of Playa Cocles.",
			image: "https://i.imgur.com/WPi0pz8.jpeg",
			acreage: "55 m²",
			guests: "6",
			beds: "3",
		},
		{
			title: "Ocean Pool View Suites",
			slug: "ocean-pool-view-suites",
			description: "Located in front of the sea, these ground-floor suites have direct access to a pool with a waterfall.",
			image: "https://i.imgur.com/3mZJ51W.jpeg",
			acreage: "55 m²",
			guests: "6",
			beds: "3",
		},
	],
} satisfies Record<Locale, Room[]>;

export function getRooms(locale: Locale): Room[] {
	return rooms[locale];
}
