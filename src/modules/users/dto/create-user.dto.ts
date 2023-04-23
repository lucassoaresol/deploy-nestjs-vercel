import { users_role } from '@prisma/client';

export class CreateUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role?: users_role;
  created_at?: string | Date;
}
