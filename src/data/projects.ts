export interface Project {
  id: number;
  titleTr: string;
  titleEn: string;
  category: 'residential' | 'commercial' | 'renovation';
  status: 'completed' | 'ongoing';
  locationTr: string;
  locationEn: string;
  descriptionTr: string;
  descriptionEn: string;
  image: string;
  gallery: string[];
  apartmentImages?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    titleTr: 'Merkez Konut Projesi',
    titleEn: 'Central Residential Project',
    category: 'residential',
    status: 'completed',
    locationTr: 'Merkez, Şehir',
    locationEn: 'Central District, City',
    descriptionTr:
      'Modern mimariye sahip, 4 katlı konut binası. Kaliteli malzeme ve profesyonel işçilikle tamamlanmıştır. Her dairede geniş balkonlar ve doğal ışık maksimum seviyede tutulmuştur.',
    descriptionEn:
      'A 4-story residential building with modern architecture. Completed with quality materials and professional craftsmanship. Each unit features spacious balconies and maximum natural light.',
    image: '/images/projects/1.png',
    gallery: ['/images/projects/1.png', '/images/project-residential.jpg'],
    apartmentImages: ['/images/ornek_daire/1.jpeg', '/images/ornek_daire/2.jpeg', '/images/ornek_daire/3.jpeg'],
  },
  {
    id: 2,
    titleTr: 'İş Merkezi - Ticari Bina',
    titleEn: 'Business Center - Commercial Building',
    category: 'commercial',
    status: 'completed',
    locationTr: 'İş Merkezi, Şehir',
    locationEn: 'Business District, City',
    descriptionTr:
      'Çok katlı ticari bina projesi. Modern tasarım ve yapısal mükemmellik ile uygulanmıştır. Ofis alanları geniş pencereler ve verimli tasarımla donatılmıştır.',
    descriptionEn:
      'A multi-story commercial building project. Implemented with modern design and structural excellence. Office spaces are equipped with large windows and efficient layout.',
    image: '/images/projects/2.png',
    gallery: ['/images/projects/2.png', '/images/project-commercial.jpg'],
  },
  {
    id: 3,
    titleTr: 'Konut Kompleksi - Batı Mahallesi',
    titleEn: 'Residential Complex - West District',
    category: 'residential',
    status: 'completed',
    locationTr: 'Batı Mahallesi, Şehir',
    locationEn: 'West District, City',
    descriptionTr:
      'Geniş alanı kapsayan konut kompleksi projesi. Peyzaj tasarımı ve altyapı çalışmaları dahildir. Yaşanabilir ve güvenli bir topluluk oluşturulmuştur.',
    descriptionEn:
      'A large-scale residential complex project. Includes landscaping and infrastructure work. A livable and secure community has been created.',
    image: '/images/projects/3.png',
    gallery: ['/images/projects/3.png', '/images/project-residential.jpg'],
    apartmentImages: ['/images/ornek_daire/4.jpeg', '/images/ornek_daire/5.jpeg'],
  },
  {
    id: 4,
    titleTr: 'Modern Apartman Binası',
    titleEn: 'Modern Apartment Building',
    category: 'residential',
    status: 'completed',
    locationTr: 'Kuzey Bölgesi, Şehir',
    locationEn: 'North Region, City',
    descriptionTr:
      'Çağdaş tasarımı ve kaliteli yapısı ile dikkat çeken apartman binası. Her daire modern konfor ve geniş yaşam alanlarıyla donatılmıştır.',
    descriptionEn:
      'An apartment building that stands out with its contemporary design and quality construction. Each unit is equipped with modern comfort and spacious living areas.',
    image: '/images/projects/4.png',
    gallery: ['/images/projects/4.png', '/images/apartment-exterior.jpg'],
    apartmentImages: ['/images/ornek_daire/6.jpeg', '/images/ornek_daire/7.jpeg', '/images/ornek_daire/8.jpeg'],
  },
  {
    id: 5,
    titleTr: 'Devam Eden Proje - Yeni Konut Alanı',
    titleEn: 'Ongoing Project - New Residential Area',
    category: 'residential',
    status: 'ongoing',
    locationTr: 'Doğu Mahallesi, Şehir',
    locationEn: 'East District, City',
    descriptionTr:
      'Yeni konut alanı projesi inşaat aşamasındadır. Yapısal çalışmalar devam etmekte olup, kalite kontrol standartlarına uygun şekilde ilerlenmektedir.',
    descriptionEn:
      'The new residential area project is under construction. Structural work is ongoing and progressing according to quality control standards.',
    image: '/images/uncomplite_projects/1.png',
    gallery: ['/images/uncomplite_projects/1.png', '/images/ongoing-project.jpg'],
  },
  {
    id: 6,
    titleTr: 'Devam Eden Proje - Ticari Merkez',
    titleEn: 'Ongoing Project - Commercial Center',
    category: 'commercial',
    status: 'ongoing',
    locationTr: 'Merkez Bölgesi, Şehir',
    locationEn: 'Central Region, City',
    descriptionTr:
      'Ticari merkez projesi inşaat aşamasında devam etmektedir. Yapı iskelesi ve temel çalışmaları tamamlanmış, üst yapı inşaatı başlamıştır.',
    descriptionEn:
      'The commercial center project is ongoing in the construction phase. Foundation work has been completed, and superstructure construction has begun.',
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
