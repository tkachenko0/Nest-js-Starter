/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/db/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  login(username: string, password: string) {
    // BAD: building SQL unsafely (for CTF purpose)
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    const users = this.db.query(query);

    if (users.length > 0) {
      return { message: 'Login successful', flag: 'FLAG-REAL-SQL-INJECTION' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
