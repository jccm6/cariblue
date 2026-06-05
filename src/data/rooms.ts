export interface Room {
	title: string;
	slug: string;
	description: string;
	image: string;
	acreage: string;
	guests: string;
	beds: string;
}

export const rooms: Room[] = [
	{
		title: "Estándar King",
		slug: "estandar-king",
		description: "¡Tu escapada junto al mar te espera aquí! Habitaciones con espléndida vista al jardín y un toque cercano a la playa.",
		image: "https://i.imgur.com/hDdwfD3.png",
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
		description: "Habitación triple económica combina practicidad con todo lo que necesitas para disfrutar de tu estadía en nuestro resort.",
		image: "https://i.imgur.com/roHz8lv.png",
		acreage: "30 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Beach Apartment",
		slug: "beach-apartment",
		description: "Despierta cada mañana en nuestro apartamento vacacional y siente la cercanía del mar Caribe. Ubicado a solo unos pasos de la paradisíaca Playa Cocles.",
		image: "https://i.imgur.com/UDIGFb5.jpeg",
		acreage: "30 m²",
		guests: "5",
		beds: "2",
	},
	{
		title: "Triple Económica",
		slug: "triple-economica",
		description: "Nuestras habitaciones estándar son nuestro alojamiento más popular. Tienen vista al jardín.",
		image: "https://i.imgur.com/mxszw4k.png",
		acreage: "30 m²",
		guests: "3",
		beds: "2",
	},
	{
		title: "Habitación Superior King",
		slug: "superior-king",
		description: "Nuestras habitaciones superior se encuentran en el sector selva del resort, son una excelente opción para parejas.",
		image: "https://i.imgur.com/sLAn159.png",
		acreage: "35 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Bungalow King",
		slug: "bungalow-king",
		description: "Situados en la zona selvática del hotel, rodeados de árboles centenarios y exuberantes flores tropicales.",
		image: "https://i.imgur.com/OHZmNxu.png",
		acreage: "40 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Bungalow con 2 camas Queen",
		slug: "bungalow-queen",
		description: "Nuestras bungalow jungle rooms con 2 camas queen se encuentran en el sector selva del resort, son una excelente opción para parejas.",
		image: "https://i.imgur.com/O2BheRC.png",
		acreage: "35 m²",
		guests: "4",
		beds: "2",
	},
	{
		title: "Junior Suite",
		slug: "junior-suite",
		description: "Ubicada en el sector de la jungla, cerca de la piscina principal, esta habitación especial es – con sus 80 metros cuadrados. – la más espaciosa que ofrecemos.",
		image: "https://i.imgur.com/PQuYFD9.png",
		acreage: "80 m²",
		guests: "5",
		beds: "2",
	},
	{
		title: "Jungle House",
		slug: "jungle-house",
		description:
			"Ubicados en el sector de la selva del hotel, rodeados de arboles centenarios y flores tropicales, nuestros tres bungalows de madera son una excelente opción para familias que quieran descansar rodeados de naturaleza.",
		image: "https://i.imgur.com/7vvtt44.png",
		acreage: "90 m²",
		guests: "7",
		beds: "4",
	},
	{
		title: "Ocean Beach View Suites",
		slug: "ocean-beach-view-suites",
		description: "Ubicado frente al mar, este módulo consta de 3 en la planta alta que tienen una magnifica vista a la playa Cocles.",
		image: "https://i.imgur.com/B3XIXzr.png",
		acreage: "55 m²",
		guests: "6",
		beds: "3",
	},
	{
		title: "Ocean Pool View Suites",
		slug: "ocean-pool-view-suites",
		description: "Ubicado frente al mar, este módulo consta de 3 suites en la planta baja que tienen salida directa a una piscina con cascada.",
		image: "https://i.imgur.com/NIorB4b.png",
		acreage: "55 m²",
		guests: "6",
		beds: "3",
	},
];
