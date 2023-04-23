import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.users.create({ data });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.users.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prisma.users.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.users.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.users.delete({ where: { id } });
  }
}
