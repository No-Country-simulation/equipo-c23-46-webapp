import { Course } from './../../../node_modules/.prisma/client/index.d';
import { Role } from '@prisma/client';
import { prisma } from '../../data/prisma/prisma-db';
import {
  CustomError,
  GetByIdDto,
  PaginationDto,
  WorkerEntity,
} from '../../domain';

export class TeacherService {
  async findAllTeachers(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          role: Role.WORKER,
          Worker: {
            position: 'teacher',
          },
        },
        include: {
          Worker: true,
        },
        skip,
        take: limit,
      }),
      prisma.worker.count({
        where: {
          position: 'teacher',
        },
      }),
    ]);

    return {
      page,
      limit,
      total,
      next:
        total - page * limit > 0
          ? `/api/teachers?page=${page + 1}&limit=${limit}`
          : null,
      prev:
        page - 1 > 0 ? `/api/teachers?page=${page - 1}&limit=${limit}` : null,
      teachers: users.map((teacher) => WorkerEntity.fromJson(teacher)),
    };
  }

  async getTeacherById(getByIdDto: GetByIdDto) {
    const { id } = getByIdDto;

    const user = await prisma.user.findUnique({
      where: {
        id,
        role: Role.WORKER,
        Worker: {
          position: 'teacher',
        },
      },
      include: {
        Worker: {
          include: {
            Grade: {
              include: {
                GradeCourse: {
                  include: {
                    course: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw CustomError.notFound('Teacher not found');
    }

    return {
      teacher: {
        ...WorkerEntity.fromJson(user),
      },
      tutorships: user.Worker?.Grade.map((grade) => ({
        id: grade.grade,
        section: grade.section,
        school_year: grade.school_year,
      })),
      courses: user.Worker?.Grade.map((grade) =>
        grade.GradeCourse.map((gradeCourse) => ({
          id: gradeCourse.course.id,
          course: gradeCourse.course.name,
          gradeId: grade.id,
          grade: grade.grade,
          section: grade.section,
          school_year: grade.school_year,
        }))
      ),
    };
  }
}
