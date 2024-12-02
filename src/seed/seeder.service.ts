import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Users } from 'src/users/users.entity';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { Role } from 'src/role/role.entity';

@Injectable()
export class SeederService {
  constructor(private readonly em: EntityManager) {}

  async seed() {
    dotenv.config();

    const em = this.em.fork();

    const roles = [
      {
        name: 'SUPERADMIN',
      },
      {
        name: 'ADMIN',
      },
      {
        name: 'KARYAWAN',
      },
    ];

    for (const roleData of roles) {
      const existingRole = await em.findOne(Role, { name: roleData.name }); // Periksa apakah peran sudah ada
      if (!existingRole) {
        const role = em.create(Role, roleData);
        await em.persistAndFlush(role);
      }
    }

    const existingUser = await em.findOne(Users, { username: 'superadmin' });
    if (!existingUser) {
      const password = await bcrypt.hash('Tes123@tes', 10);
      const userData = {
        name: 'superadmin',
        username: 'superadmin',
        email: 'superadmin@mail.com',
        role: 1,
        password: password,
      };

      const user = em.create(Users, userData);
      await em.persistAndFlush(user);
    }
  }
}
