import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/common-module/db/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  login(username: string, password: string) {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    const users = this.db.query(query);

    if (users.length > 0) {
      return { message: 'Login successful', flag: 'FLAG-REAL-SQL-INJECTION' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
