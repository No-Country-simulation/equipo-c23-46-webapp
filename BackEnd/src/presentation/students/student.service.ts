import { Grade, notas } from './../../../node_modules/.prisma/client/index.d';
import { Role, User } from '@prisma/client';
import { prisma } from '../../data/prisma/prisma-db';
import { CustomError, GetByIdDto, PaginationDto, StudentEntity } from '../../domain';

export class StudentServie {
  async findAllStudents(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          role: Role.STUDENT,
        },
        include: {
          Student: true,
        },
        skip,
        take: limit,
      }),
      prisma.user.count({
        where: {
          role: Role.STUDENT,
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      total,
      page,
      totalPages,
      next:
        total - page * limit > 0
          ? `/api/students?page=${page + 1}&limit=${limit}`
          : null,
      prev:
        page - 1 > 0 ? `/api/students?page=${page - 1}&limit=${limit}` : null,
      students: users.map((student) => StudentEntity.fromJson(student)),
    };
  }

  async getStudentById(getByIdDto: GetByIdDto) {
      const { id } = getByIdDto;

      const user = await prisma.user.findUnique({
        where: {
          id,
          role: Role.STUDENT,
        },
        include: {
          Student: {
            include: {
              notas: {
                include: {
                  gradeCourse: {
                    include: {
                      course:true,
                    }
                  }
                }
              },
              grade: {
                include: {
                  tutor: {
                    include: {
                      user: true,
                    }
                  }
                }
              }
            }
          }

        },
      });

      if (!user) {
        throw CustomError.notFound('Student not found');
      }



      return {
        student: {
          ...StudentEntity.fromJson(user),
        },
        grade: {
          tutor: `${user.Student?.grade?.tutor?.user.name} ${user.Student?.grade?.tutor?.user.lastName}`,
          grade: user.Student?.grade?.grade,
          section: user.Student?.grade?.section,
          school_year: user.Student?.grade?.school_year,
        },
        notas: user.Student?.notas.map((nota) => ({
          course: nota.gradeCourse.course.name,
          capacity: nota.capacity,
          competence: nota.competence,
          note: nota.note,
        })),

      };
    }
}
