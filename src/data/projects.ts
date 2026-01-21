export interface Project {
  id: number;
  titleTr: string;
  titleEn: string;
  status: 'completed' | 'ongoing';
  locationTr: string;
  locationEn: string;
  detailedLocation: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3033. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project1/1.webp',
    gallery: ['/images/projects/project1/1.webp', '/images/projects/project1/1-1.webp', '/images/projects/project1/1-2.webp', '/images/projects/project1/1-3.webp'],
  },
  {
    id: 2,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3031. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project2/2.webp',
    gallery: ['/images/projects/project2/2.webp'],
  },
  {
    id: 3,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3031. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project3/3.webp',
    gallery: ['/images/projects/project3/3.webp', '/images/projects/project3/3-1.webp'],
  },
  {
    id: 4,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Ertuğrul Gazi Caddesi, Esenyurt, İstanbul',
    image: '/images/projects/project4/4.webp',
    gallery: ['/images/projects/project4/4.webp', '/images/projects/project4/4-1.webp', '/images/projects/project4/4-2.webp'],
  },
  {
    id: 5,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Halil Fahri Orman Caddesi, Esenyurt, İstanbul',
    image: '/images/projects/project5/5.webp',
    gallery: ['/images/projects/project5/5.webp', '/images/projects/project5/5-1.webp', '/images/projects/project5/5-2.webp', '/images/projects/project5/5-3.webp'],
  },
  {
    id: 6,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3002. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project6/6.webp',
    gallery: ['/images/projects/project6/6.webp', '/images/projects/project6/6-1.webp', '/images/projects/project6/6-2.webp', '/images/projects/project6/6-3.webp', '/images/projects/project6/6-4.webp'],
  },
  {
    id: 0,
    titleTr: 'Villa Projesi',
    titleEn: 'Villa Project',
    status: 'completed',
    locationTr: 'Büyükçekmece, İstanbul',
    locationEn: 'Büyükçekmece, Istanbul',
    detailedLocation: 'Kamiloba Mh, Boğaziçi Cd., Büyükçekmece/İstanbul',
    image: '/images/projects/project0/0-1.webp',
    gallery: [
      '/images/projects/project0/0-1.webp',
      '/images/projects/project0/0-2.webp',
      '/images/projects/project0/0-3.webp'
    ],
  },
  {
    id: 7,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3013. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project7/7.webp',
    gallery: ['/images/projects/project7/7.webp', '/images/projects/project7/7-1.webp'],
  },
  {
    id: 8,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '868. Sokak, Esenyurt, İstanbul',
    image: '/images/projects/project8/8.webp',
    gallery: ['/images/projects/project8/8.webp'],
  },
  {
    id: 9,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/projects/project9/9.webp',
    gallery: ['/images/projects/project9/9.webp'],
  },
  {
    id: 10,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/projects/project10/10.webp',
    gallery: ['/images/projects/project10/10.webp'],
  },
  {
    id: 11,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/projects/project11/11.webp',
    gallery: ['/images/projects/project11/11.webp'],
  },
  {
    id: 12,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Üçevler, Bahçe Yolu Cd. Esenyurt / İstanbul',
    image: '/images/projects/project12/12.webp',
    gallery: ['/images/projects/project12/12.webp'],
  },
  {
    id: 13,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Güzelyurt Mah.,Esenyurt, İstanbul',
    image: '/images/projects/project13/13.webp',
    gallery: ['/images/projects/project13/13.webp'],
  },
  {
    id: 14,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/1.webp',
    gallery: ['/images/uncomplite_projects/1.webp'],
  },
  {
    id: 15,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/2.webp',
    gallery: ['/images/uncomplite_projects/2.webp'],
  },
];

export const getProjectsByStatus = (status: 'completed' | 'ongoing') => {
  return projects.filter((p) => p.status === status);
};

export const getProjectById = (id: number) => {
  return projects.find((p) => p.id === id);
};
