import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Database from 'better-sqlite3';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: Database.Database;

  onModuleInit() {
    this.db = new Database(':memory:');

    this.db.exec(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);

    const insert = this.db.prepare(
      'INSERT INTO users (username, password) VALUES (?, ?)',
    );
    insert.run('admin', 'supersecret');
    insert.run('user', 'password123');
  }

  query(sql: string) {
    console.log('Executing SQL:', sql);
    const stmt = this.db.prepare(sql);
    return stmt.all();
  }
}
