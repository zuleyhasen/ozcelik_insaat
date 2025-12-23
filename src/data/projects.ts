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
    image: '/images/projects/project1/1.png',
    gallery: ['/images/projects/project1/1.png', '/images/projects/project1/1-1.jpeg', '/images/projects/project1/1-2.jpeg', '/images/projects/project1/1-3.jpeg'],
  },
  {
    id: 2,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3031. Sokak, No:8, Esenyurt, İstanbul',
    image: '/images/projects/project2/2.png',
    gallery: ['/images/projects/project2/2.png', '/images/projects/project2/2-1.jpeg', '/images/projects/project2/2-2.jpeg'],
  },
  {
    id: 3,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3031. Sokak, No:15, Esenyurt, İstanbul',
    image: '/images/projects/project3/3.png',
    gallery: ['/images/projects/project3/3.png', '/images/projects/project3/3-1.jpeg', '/images/projects/project3/3-2.jpeg'],
  },
  {
    id: 4,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Ertuğrul Gazi Caddesi, No:35B, Esenyurt, İstanbul',
    image: '/images/projects/project4/4.png',
    gallery: ['/images/projects/project4/4.png', '/images/projects/project4/4-1.jpeg', '/images/projects/project4/4-2.jpeg'],
  },
  {
    id: 5,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: 'Halil Fahri Orman Caddesi, No:60C, Esenyurt, İstanbul',
    image: '/images/projects/project5/5.png',
    gallery: ['/images/projects/project5/5.png', '/images/projects/project5/5-1.jpeg', '/images/projects/project5/5-2.jpeg'],
  },
  {
    id: 6,
    titleTr: 'Modern Apartman Projesi',
    titleEn: 'Modern Apartment Building',
    status: 'completed',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3002. Sokak, No:53, Esenyurt, İstanbul',
    image: '/images/projects/project6/6.png',
    gallery: ['/images/projects/project6/6.png', '/images/projects/project6/6-1.jpeg', '/images/projects/project6/6-2.jpeg'],
  },
  {
    id: 7,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '3013. Sokak, No:18, Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/1.png',
    gallery: ['/images/uncomplite_projects/1.png', '/images/ongoing-project.jpg'],
  },
  {
    id: 8,
    titleTr: 'Devam Eden Proje - Modern Apartman Projesi',
    titleEn: 'Ongoing Project - Modern Apartment Building',
    status: 'ongoing',
    locationTr: 'Esenyurt, İstanbul',
    locationEn: 'Esenyurt, Istanbul',
    detailedLocation: '868. Sokak, No:10, Esenyurt, İstanbul',
    image: '/images/uncomplite_projects/2.png',
    gallery: ['/images/uncomplite_projects/2.png', '/images/hero-construction.jpg'],
  },
];

export const getProjectsByStatus = (status: 'completed' | 'ongoing') => {
  return projects.filter((p) => p.status === status);
};

export const getProjectById = (id: number) => {
  return projects.find((p) => p.id === id);
};
