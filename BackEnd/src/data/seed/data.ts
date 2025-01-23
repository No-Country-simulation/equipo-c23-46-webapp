interface SeedTeacher {
  name: string;
  lastName: string;
  password: string;
  email: string;
  birthdate?: Date;
  dni: string;
  id_grade?: string;
}

type ValidRoles = 'STUDENT' | 'TEACHER' | 'ADMIN';

// interface SeedUser {
//   email: string;
//   fullName: string;
//   password: string;
//   roles: string[];
// }

// interface SeedData {
//   users: SeedUser[];
//   products: SeedProduct[];
// }

export const initialData =
  //: SeedData
  {
    teachers: [
      {
        name: 'diego',
        lastName: 'gonzalez',
        password: '12345678',
        email: 'diego@gmail.com',
        birthdate: '12-20-1980',
        dni: '12395678',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Sofía',
        lastName: 'Martínez',
        password: '12345678',
        email: 'sofia@example.com',
        birthdate: '12-20-1980',
        dni: '98765932',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Mateo',
        lastName: 'Hernández',
        password: '12345678',
        email: 'mateo@example.com',
        birthdate: '12-20-1980',
        dni: '87659321',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Valentina',
        lastName: 'García',
        password: '12345678',
        email: 'valentina@example.com',
        birthdate: '12-20-1980',
        dni: '76593210',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Juan',
        lastName: 'López',
        password: '12345678',
        email: 'juanbdf@example.com',
        birthdate: '12-20-1980',
        dni: '65932109',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Isabella',
        lastName: 'Gómez',
        password: '12345678',
        email: 'isabellamjhjn@example.com',
        birthdate: '12-20-1980',
        dni: '54321098',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Martín',
        lastName: 'Díaz',
        password: '12345678',
        email: 'martin@example.com',
        birthdate: '12-20-1980',
        dni: '43210987',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Lucía',
        lastName: 'Rodríguez',
        password: '12345678',
        email: 'lucia@example.com',
        birthdate: '12-20-1980',
        dni: '32109876',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Emilio',
        lastName: 'Pérez',
        password: '12345678',
        email: 'emilio@example.com',
        birthdate: '12-20-1980',
        dni: '21098765',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
      {
        name: 'Valeria',
        lastName: 'Muñoz',
        password: '12345678',
        email: 'valeria@example.com',
        birthdate: '12-20-1980',
        dni: '10987654',
        position: 'teacher',
        salary: 2000,
        start_date: '03-03-2020',
        phone: '123456789',
      },
    ],

    courses: [
      {
        name: 'Matematicas',
      },
      {
        name: 'Fisica',
      },
      {
        name: 'Quimica',
      },
      {
        name: 'Historia',
      },
      {
        name: 'Lengua',
      },
      {
        name: 'Ingles',
      },
      {
        name: 'Geografia',
      },
      {
        name: 'Arte',
      },
      {
        name: 'Musica',
      },
    ],

    grades: [
      {
        school_year: 2024,
        grade: 'Primero',
        section: 'A',
      },

      {
        school_year: 2024,
        grade: 'Primero',
        section: 'B',
      },
      {
        school_year: 2024,
        grade: 'Segundo',
        section: 'A',
      },
      {
        school_year: 2024,
        grade: 'Segundo',
        section: 'B',
      },
      {
        school_year: 2024,
        grade: 'Tercero',
        section: 'A',
      },
      {
        school_year: 2024,
        grade: 'Tercero',
        section: 'B',
      },
      {
        school_year: 2024,
        grade: 'Cuarto',
        section: 'A',
      },
      {
        school_year: 2024,
        grade: 'Cuarto',
        section: 'B',
      },
      {
        school_year: 2024,
        grade: 'Quinto',
        section: 'A',
      },
      {
        school_year: 2024,
        grade: 'Quinto',
        section: 'B',
      },
      {
        school_year: 2024,
        grade: 'Sexto',
        section: 'A',
      },
      {
        school_year: 2024,
        grade: 'Sexto',
        section: 'B',
      },
    ],

    students: [
      {
        name: 'Diego',
        lastName: 'Gonzalez',
        password: '12345678',
        email: 'diegoo@gmail.com',
        dni: '12395667',
      },
      {
        name: 'diego',
        lastName: 'gonzalez',
        password: '12345678',
        email: 'diego5@gmail.com',
        dni: '12395567',
      },
      {
        name: 'Lucas',
        lastName: 'Hernández',
        password: '12345678',
        email: 'lucas@example.com',
        dni: '58765932',
      },
      {
        name: 'Valentina',
        lastName: 'Martínez',
        password: '12345678',
        email: 'valentinahj@example.com',
        dni: '87659123',
      },
      {
        name: 'Mateo',
        lastName: 'Gómez',
        password: '12345678',
        email: 'mateodv@example.com',
        dni: '76593012',
      },
      {
        name: 'Martina',
        lastName: 'López',
        password: '12345678',
        email: 'martina@example.com',
        dni: '65932901',
      },
      {
        name: 'Agustina',
        lastName: 'Fernández',
        password: '12345678',
        email: 'agustina@example.com',
        dni: '59321809',
      },
      {
        name: 'Sebastián',
        lastName: 'García',
        password: '12345678',
        email: 'sebastian@example.com',
        dni: '93210098',
      },
      {
        name: 'Camila',
        lastName: 'Díaz',
        password: '12345678',
        email: 'camila@example.com',
        dni: '32109567',
      },
      {
        name: 'Lautaro',
        lastName: 'Pérez',
        password: '12345678',
        email: 'lautaro@example.com',
        dni: '21098179',
      },
      {
        name: 'Isabella',
        lastName: 'Rodríguez',
        password: '12345678',
        email: 'isabella@example.com',
        dni: '10987059',
      },
      {
        name: 'Tomás',
        lastName: 'González',
        password: '12345678',
        email: 'tomas@example.com',
        dni: '12395579',
      },
      {
        name: 'Lucía',
        lastName: 'Herrera',
        password: '12345678',
        email: 'luciahj@example.com',
        dni: '12395670',
      },
      {
        name: 'Juan',
        lastName: 'Sánchez',
        password: '12345678',
        email: 'juan@example.com',
        dni: '12395671',
      },
      {
        name: 'Emma',
        lastName: 'Romero',
        password: '12345678',
        email: 'emma@example.com',
        dni: '12395672',
      },
      {
        name: 'Santiago',
        lastName: 'Alvarez',
        password: '12345678',
        email: 'santiago@example.com',
        dni: '12395673',
      },
      {
        name: 'Mía',
        lastName: 'Torres',
        password: '12345678',
        email: 'mia@example.com',
        dni: '12395679',
      },
      {
        name: 'Thiago',
        lastName: 'Giménez',
        password: '12345678',
        email: 'thiago@example.com',
        dni: '12395675',
      },
      {
        name: 'Emma',
        lastName: 'Pérez',
        password: '12345678',
        email: 'emma2@example.com',
        dni: '12395676',
      },
      {
        name: 'Benjamín',
        lastName: 'Gutierrez',
        password: '12345678',
        email: 'benjamin392@example.com',
        dni: '12395677',
      },
      {
        name: 'Joaquín',
        lastName: 'Moreno',
        password: '12345678',
        email: 'joaquin@example.com',
        dni: '12093579',
      },
      {
        name: 'Catalina',
        lastName: 'Núñez',
        password: '12345678',
        email: 'catalina@example.com',
        dni: '12395680',
      },
      {
        name: 'Agustín',
        lastName: 'Rojas',
        password: '12345678',
        email: 'agustin@example.com',
        dni: '12395681',
      },
      {
        name: 'Juana',
        lastName: 'Molina',
        password: '12345678',
        email: 'juana@example.com',
        dni: '12395682',
      },
      {
        name: 'Delfina',
        lastName: 'Fuentes',
        password: '12345678',
        email: 'delfina@example.com',
        dni: '12395683',
      },
      {
        name: 'Ignacio',
        lastName: 'Aguilar',
        password: '12345678',
        email: 'ignacio239@example.com',
        dni: '12395689',
      },
      {
        name: 'Luna',
        lastName: 'Sosa',
        password: '12345678',
        email: 'luna395@example.com',
        dni: '12395685',
      },
      {
        name: 'Valentín',
        lastName: 'Vargas',
        password: '12345678',
        email: 'valentingdf@example.com',
        dni: '12395686',
      },
      {
        name: 'Martina',
        lastName: 'Pereyra',
        password: '12345678',
        email: 'martina3953@example.com',
        dni: '12395687',
      },
      {
        name: 'Bautista',
        lastName: 'Acosta',
        password: '12345678',
        email: 'bautista5t@example.com',
        dni: '12395688',
      },
      {
        name: 'Renata',
        lastName: 'Benítez',
        password: '12345678',
        email: 'renataaww@example.com',
        dni: '97395689',
      },
      {
        name: 'Benicio',
        lastName: 'Giménez',
        password: '12345678',
        email: 'beniciohrw@example.com',
        dni: '12395690',
      },
      {
        name: 'Dulce',
        lastName: 'Blanco',
        password: '12345678',
        email: 'dulcedjmnj@example.com',
        dni: '12395691',
      },
      {
        name: 'Simón',
        lastName: 'Martínez',
        password: '12345678',
        email: 'simonhbf@example.com',
        dni: '12395692',
      },
      {
        name: 'Alma',
        lastName: 'Mendoza',
        password: '12345678',
        email: 'almadherg@example.com',
        dni: '12395693',
      },
      {
        name: 'Federico',
        lastName: 'Blanco',
        password: '12345678',
        email: 'federicovbg@example.com',
        dni: '12395699',
      },
      {
        name: 'Carolina',
        lastName: 'Gutierrez',
        password: '12345678',
        email: 'carolinarwr@example.com',
        dni: '12395695',
      },
      {
        name: 'Bruno',
        lastName: 'Alonso',
        password: '12345678',
        email: 'brunoffsd@example.com',
        dni: '12395696',
      },
      {
        name: 'Elena',
        lastName: 'Sánchez',
        password: '12345678',
        email: 'elena2239@example.com',
        dni: '12395697',
      },
      {
        name: 'Maximiliano',
        lastName: 'Díaz',
        password: '12345678',
        email: 'maximiliano935639@example.com',
        dni: '12395698',
      },
    ],
  };
