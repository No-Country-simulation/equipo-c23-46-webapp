import { PrismaClient, Role } from '@prisma/client';
import { BcryptAdapter, envs } from '../../config';
import { initialData } from './data';

const prisma = new PrismaClient();

async function main() {
  await deleteTables(),
    await insertTeachers(),
    await insertCourses(),
    await insertGrades(),
    await insertStudents();
  await insertGradesCourses();
  await insertNotes();
}

async function deleteTables() {
  await prisma.notas.deleteMany();
  await prisma.student.deleteMany();
  await prisma.gradeCourse.deleteMany();
  await prisma.course.deleteMany();
  await prisma.grade.deleteMany();
  await prisma.worker.deleteMany(), await prisma.user.deleteMany();
}

async function insertTeachers() {
  const seedTeachers = initialData.teachers;
  const insertPromises = seedTeachers.map(async (teacher) => {
    const {
      name,
      lastName,
      password,
      email,
      birthdate,
      dni,
      position,
      salary,
      start_date,
      phone,
    } = teacher;
    return prisma.user.create({
      data: {
        role: Role.WORKER,
        birthdate: new Date(birthdate).toISOString(),
        dni,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
        email,
        lastName,
        name,
        password: BcryptAdapter.hash(password),
        Worker: {
          create: {
            position,
            salary,
            start_date: new Date(start_date).toISOString(),
            phone,
          },
        },
      },
    });
  });

  await Promise.all(insertPromises);
}

async function insertCourses() {
  const seedCourses = initialData.courses;

  const insertPromises = seedCourses.map(async (course) => {
    const { name } = course;
    return prisma.course.create({
      data: {
        name,
      },
    });
  });

  await Promise.all(insertPromises);
}

async function insertGrades() {
  const seedGrades = initialData.grades;
  const insertPromises = seedGrades.map(async (grade) => {
    const { grade: anio_school, school_year, section } = grade;
    const teachers = await prisma.worker.findMany({
      where: { position: 'teacher' },
    });

    return prisma.grade.create({
      data: {
        grade: anio_school,
        school_year,
        section,
        tutorId: teachers[randomNumber(teachers.length)].id!,
      },
    });
  });

  await Promise.all(insertPromises);
}

const randomNumber = (limit: number): number => {
  const random = Math.random();
  const randomNumber = Math.floor(random * (limit - 1));
  return randomNumber;
};

async function insertStudents() {
  const seedStudents = initialData.students;
  const grades = await prisma.grade.findMany();

  const insertPromises = seedStudents.map(async (student) => {
    const {
      name,
      lastName,
      password,
      email,
      birthdate,
      dni,
      dni_proxy,
      phone_proxy,
      proxy,
    } = student;
    return prisma.user.create({
      data: {
        role: Role.STUDENT,
        birthdate: new Date(birthdate).toISOString(),
        dni,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
        email,
        lastName,
        name,
        password: BcryptAdapter.hash(password),
        Student: {
          create: {
            dni_proxy,
            phone_proxy,
            proxy,
            gradeId: grades[randomNumber(grades.length)].id,
          },
        },
      },
    });
  });

  await Promise.all(insertPromises);
}

async function insertGradesCourses() {
  const courses = await prisma.course.findMany();
  const grades = await prisma.grade.findMany();
  const teachers = await prisma.worker.findMany({
    where: { position: 'teacher' },
  });

  const insertPromises = courses.map(async (course) => {
    grades.forEach(async (grade) => {
      await prisma.gradeCourse.create({
        data: {
          courseId: course.id,
          gradeId: grade.id,
          teacherId: teachers[randomNumber(teachers.length)].id!,
        },
      });
    });
  });

  await Promise.all(insertPromises);
}

async function insertNotes(){
  const students = await prisma.student.findMany({
    include: {
      grade:{
        include:{
          GradeCourse: true
        }
      },
     },
  });


  const insertPromises = students.map(async (student) => {
    student.grade!.GradeCourse.forEach(async (gradeCourse) => {
      await prisma.notas.create({
        data: {
          studentId: student.id,
          gradeCourseId: gradeCourse.id,
          note: randomNumber(20),
          competence: 'evaluacion 1',
          capacity: 'capacidad 1',
        },
      });
    });
  });

  await Promise.all(insertPromises);
}

(async () => {
  try {
    await prisma.$connect();
    await main();
    console.log('Seed ok');
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
})();
