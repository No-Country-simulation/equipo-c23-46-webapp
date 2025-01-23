import { Student } from '@prisma/client';
import { prisma } from '../../data/prisma/prisma-db';
import { CustomError, GetByIdDto } from '../../domain';

export class GradeService {
  async findGradeById(getByIdDto: GetByIdDto) {
    const { id } = getByIdDto;

    const grade = await prisma.grade.findUnique({
      where: {
        id,
      },
      include: {
        tutor: {
          include: {
            user: true,
          },
        },
        GradeCourse: {
          include: {
            course: true,
          },
        },
        Student: {
          include: {
            user: true,
          }
        }
      },
    });

    if (!grade) {
      throw CustomError.notFound('Grade not found');
    }

    return {
      id: grade.id,
      grade: grade.grade,
      section: grade.section,
      school_year: grade.school_year,
      tutor: {
        id: grade.tutor?.user.id,
        name: grade.tutor?.user.name,
        lastName: grade.tutor?.user.lastName,
        email: grade.tutor?.user.email,
      },
      courses: grade.GradeCourse.map((course) => ({
        id: course.course.id,
        name: course.course.name,
      })),
      students: grade.Student.map(student =>(
        {
          id: student.user.id,
          name: student.user.name,
          lastName: student.user.lastName,
          email: student.user.email,
        }
      ))

    };
  }
}
