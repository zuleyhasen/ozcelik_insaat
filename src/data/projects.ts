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
    detailedLocation: '3033. Sokak, No:9, Esenyurt, İstanbul',
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
    detailedLocation: '3031. Sokak, No:8, Esenyurt, İstanbul',
    image: '/images/projects/project2/2.webp',
    gallery: ['/images/projects/project2/2.webp', '/images/projects/project2/2-1.webp', '/images/projects/project2/2-2.webp'],
  },
  {
    id: 3,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3031. Sokak, No:15, Esenyurt, İstanbul',
    image: '/images/projects/project3/3.webp',
    gallery: ['/images/projects/project3/3.webp', '/images/projects/project3/3-1.webp', '/images/projects/project3/3-2.webp'],
  },
  {
    id: 4,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Ertuğrul Gazi Caddesi, No:35B, Esenyurt, İstanbul',
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
    detailedLocation: 'Halil Fahri Orman Caddesi, No:60C, Esenyurt, İstanbul',
    image: '/images/projects/project5/5.webp',
    gallery: ['/images/projects/project5/5.webp', '/images/projects/project5/5-1.webp', '/images/projects/project5/5-2.webp'],
  },
  {
    id: 6,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3002. Sokak, No:53, Esenyurt, İstanbul',
    image: '/images/projects/project6/6.webp',
    gallery: ['/images/projects/project6/6.webp', '/images/projects/project6/6-1.webp', '/images/projects/project6/6-2.webp'],
  },
  {
    id: 0,
    titleTr: 'Proje 0',
    titleEn: 'Project 0',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Esenyurt, İstanbul',
    image: '/images/projects/project0/WhatsApp Image 2025-12-30 at 17.57.40.jpeg',
    gallery: [
      '/images/projects/project0/WhatsApp Image 2025-12-30 at 17.57.40.jpeg',
      '/images/projects/project0/WhatsApp Image 2025-12-30 at 17.57.40 (1).jpeg',
      '/images/projects/project0/WhatsApp Image 2026-01-04 at 13.29.33.jpeg'
    ],
  },
  {
    id: 7,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3013. Sokak, No:18, Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/1.webp',
    gallery: ['/images/uncomplite_projects/1.webp'],
  },
  {
    id: 8,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '868. Sokak, No:10, Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/2.webp',
    gallery: ['/images/uncomplite_projects/2.webp', '/images/hero-construction.webp'],
  },
];

export const getProjectsByStatus = (status: 'completed' | 'ongoing') => {
  return projects.filter((p) => p.status === status);
};

export const getProjectById = (id: number) => {
  return projects.find((p) => p.id === id);
};
