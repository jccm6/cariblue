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
		description:
			"Tu escapada junto al mar te espera aquí. Habitaciones con espléndida vista al jardín y un toque cercano a la playa, decoradas con inspiración marina contemporánea. Exclusivamente para parejas.",
		image: "https://i.imgur.com/hDdwfD3.png",
		acreage: "30 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Beach Loft",
		slug: "beach-loft",
		description:
			"El Beach Loft es un refugio práctico y acogedor, ideal para quienes buscan disfrutar de la cercanía del mar en un ambiente confortable. Este espacio bien distribuido ofrece una estancia agradable a solo unos pasos de la playa.",
		image: "https://i.imgur.com/KTobwyy.png",
		acreage: "30 m²",
		guests: "4",
		beds: "2",
	},
	{
		title: "Beach Studio",
		slug: "beach-studio",
		description:
			"Disfruta de la comodidad y la conveniencia en este estudio encantador, ubicado a pocos pasos de Playa Cocles. Ideal para viajeros y profesionales, el estudio cuenta con una amplia cama King en el segundo piso, aire acondicionado para tu confort, y conexión WiFi de alta velocidad. El primer piso ofrece una cocina completamente equipada para preparar tus platos favoritos. Con un escritorio espacioso, este lugar es perfecto para trabajar en un entorno tranquilo y relajante.",
		image: "https://i.imgur.com/roHz8lv.png",
		acreage: "30 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Beach Apartment",
		slug: "beach-apartment",
		description:
			"Despierta cada mañana en nuestro apartamento vacacional y siente la cercanía del mar Caribe. Ubicado a solo unos pasos de la paradisíaca Playa Cocles, este refugio ofrece la combinación perfecta de lujo y proximidad a la playa.",
		image: "https://i.imgur.com/UDIGFb5.jpeg",
		acreage: "30 m²",
		guests: "5",
		beds: "2",
	},
	{
		title: "Triple Económica",
		slug: "triple-economica",
		description:
			"¡Tu espacio cómodo y funcional te está esperando! Nuestra habitación triple económica combina practicidad con todo lo que necesitas para disfrutar de tu estadía en nuestro resort. Con una habitación principal con cama matrimonial y una cama individual, esta opción es perfecta para grupos pequeños que buscan una experiencia acogedora.",
		image: "https://i.imgur.com/mxszw4k.png",
		acreage: "30 m²",
		guests: "3",
		beds: "2",
	},
	{
		title: "Habitación Superior King",
		slug: "superior-king",
		description:
			"Nuestras exclusivas habitaciones superiores, ubicadas en el sector selvático del resort, representan una opción de alojamiento excepcionalmente adecuada para parejas que buscan una experiencia inmersiva en la naturaleza. Con una impresionante vista a la exuberante selva, cada una de estas habitaciones ofrece una terraza privada equipada con hamacas y un conjunto de sillas de exterior, brindando el entorno perfecto para disfrutar placenteras tardes al son de los sonidos característicos de la selva y su fauna.",
		image: "https://i.imgur.com/sLAn159.png",
		acreage: "35 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Bungalow King",
		slug: "bungalow-king",
		description:
			"Situados en la zona selvática del hotel, rodeados de árboles centenarios y exuberantes flores tropicales, nuestros dos bungalows de madera ofrecen una extraordinaria opción para parejas en busca de un refugio tranquilo y natural.",
		image: "https://i.imgur.com/OHZmNxu.png",
		acreage: "40 m²",
		guests: "3",
		beds: "1",
	},
	{
		title: "Bungalow con 2 camas Queen",
		slug: "bungalow-queen",
		description:
			"Nuestras habitaciones tipo bungalow con dos camas queen, ubicadas en el sector selvático del resort, representan una opción excepcional para parejas en búsqueda de una experiencia tranquila. Con una impresionante vista a la exuberante selva, cada una de estas habitaciones cuenta con una terraza privada equipada con hamacas y un juego de sillas de exterior, creando el entorno perfecto para disfrutar apacibles tardes, escuchando inigualables sonidos de la selva y su variada fauna.",
		image: "https://i.imgur.com/O2BheRC.png",
		acreage: "35 m²",
		guests: "4",
		beds: "2",
	},
	{
		title: "Junior Suite",
		slug: "junior-suite",
		description:
			"Ubicada en el corazón de nuestra exuberante jungla y a pasos de la piscina principal, esta exclusiva habitación especial destaca por su generoso espacio de 80 metros cuadrados, convirtiéndola en la opción más amplia disponible en nuestro establecimiento. Equipada con dos camas queen size y un encantador porche provisto de hamacas y sillas, esta habitación ofrece un ambiente de comodidad y relajación incomparables.",
		image: "https://i.imgur.com/PQuYFD9.png",
		acreage: "80 m²",
		guests: "5",
		beds: "2",
	},
	{
		title: "Jungle House",
		slug: "jungle-house",
		description:
			"Situada dentro de las instalaciones del exclusivo Cariblue Beach and Jungle Resort, esta residencia se presenta como la elección ideal para familias de hasta 7 personas. Consta de dos dormitorios interconectados por un porche que alberga un espacioso salón/comedor y una cocina tipo americana.",
		image: "https://i.imgur.com/7vvtt44.png",
		acreage: "90 m²",
		guests: "7",
		beds: "4",
	},
	{
		title: "Ocean Beach View Suites",
		slug: "ocean-beach-view-suites",
		description:
			"Ubicado frente al mar, este exclusivo módulo se compone de tres suites en la planta alta, todas ellas ofreciendo una magnífica vista panorámica de la playa Cocles.",
		image: "https://i.imgur.com/B3XIXzr.png",
		acreage: "55 m²",
		guests: "6",
		beds: "3",
	},
	{
		title: "Ocean Pool View Suites",
		slug: "ocean-pool-view-suites",
		description:
			"Situado en una ubicación privilegiada frente al mar, este distinguido módulo consta de tres suites en la planta baja, todas ellas con acceso directo a una exquisita piscina con cascada.",
		image: "https://i.imgur.com/NIorB4b.png",
		acreage: "55 m²",
		guests: "6",
		beds: "3",
	},
];
