places = {
    ...places,
    'Lanzarote': {
        name: 'Lanzarote',
        coords: [29.04685, -13.58997],
        link: '/travel/2022/lanzarote',
        zoom: 9
    },
    'Arrecife': {
        name: 'Arrecife',
        coords: [28.96516, -13.55503],
        link: '/travel/2022/lanzarote#Arrecife'
    },
    'Famara': {
        name: 'Famara',
        coords: [29.11555, -13.55634],
        link: '/travel/2022/lanzarote#Famara'
    },
    'Costa-Teguise': {
        name: 'Costa Teguise',
        coords: [28.99811, -13.49296],
        link: '/travel/2022/lanzarote#Costa-Teguise'
    },
    'Puerto-del-Carmen': {
        name: 'Puerto del Carmen',
        coords: [28.9228, -13.6681],
        link: '/travel/2022/lanzarote#Puerto-del-Carmen'
    },
    'Playa-Blanca': {
        name: 'Playa Blanca',
        coords: [28.86699, -13.83901],
        link: '/travel/2022/lanzarote#Playa-Blanca'
    },
    'Fuerteventura': {
        name: 'Fuerteventura',
        coords: [28.35874, -14.05367],
        link: '/travel/2022/fuerteventura',
        zoom: 9
    },
    'Corralejo': {
        name: 'Corralejo',
        coords: [28.72815, -13.86335],
        link: '/travel/2022/fuerteventura#Corralejo'
    },
    'Puerto-del-Rosario': {
        name: 'Puerto del Rosario',
        coords: [28.50082, -13.86283],
        link: '/travel/2022/fuerteventura#Puerto-del-Rosario'
    },
    'Las-Palmas': {
        name: 'Las Palmas',
        coords: [28.1259, -15.4263],
        link: '/travel/2024/las-palmas',
        zoom: 10
    },
    'Maspalomas': {
        name: 'Maspalomas',
        coords: [27.7576, -15.5962],
        link: '/travel/2024/las-palmas#Maspalomas',
        zoom: 10
    },
    'Santa-Cruz-de-Tenerife': {
        name: 'Santa Cruz de Tenerife',
        coords: [28.46362, -16.25184],
        link: '/travel/2024/santa-cruz',
        zoom: 9
    },
    'San-Andres': {
        name: 'San Andrés',
        coords: [28.50503, -16.19343],
        link: '/travel/2024/santa-cruz#San-Andres',
        zoom: 9
    },
    'Benijo': {
        name: 'Benijo',
        coords: [28.57346, -16.18713],
        link: '/travel/2024/anaga',
        zoom: 9
    },
    'La-Orotava': {
        name: 'La Orotava',
        coords: [28.389, -16.52388],
        link: '/travel/2024/la-orotava',
        zoom: 9
    },
    'Puerto-de-la-Cruz': {
        name: 'Puerto de la Cruz',
        coords: [28.41277, -16.54428],
        link: '/travel/2024/la-orotava#Puerto-de-la-Cruz',
        zoom: 9
    },
    'Teide': {
        name: 'Teide',
        coords: [28.27233, -16.6425],
        link: '/travel/2024/teide',
        zoom: 9
    },
    'El-Medano': {
        name: 'El Médano',
        coords: [28.04598, -16.53631],
        link: '/travel/2024/el-medano',
        zoom: 9
    }
};

cities = {
    ...cities,
    'Lanzarote': ['Arrecife', 'Famara', 'Costa-Teguise', 'Puerto-del-Carmen', 'Playa-Blanca'],
    'Fuerteventura': ['Corralejo', 'Puerto-del-Rosario'],
    'Gran-Canaria': ['Las-Palmas', 'Maspalomas'],
    'Around-Santa-Cruz-de-Tenerife': ['Santa-Cruz-de-Tenerife', 'San-Andres'],
    'Around-La-Orotava': ['La-Orotava', 'Puerto-de-la-Cruz']
};

places['Gran-Canaria'] = { ...generateCityMarker('Gran-Canaria'), nested: false, zoom: 9 };
places['Around-Santa-Cruz-de-Tenerife'] = { ...generateCityMarker('Around-Santa-Cruz-de-Tenerife'), nested: false, zoom: 11 };
places['Around-La-Orotava'] = { ...generateCityMarker('Around-La-Orotava'), nested: false, zoom: 11 };
