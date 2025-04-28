import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Database from 'better-sqlite3';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: Database.Database;

  onModuleInit() {
    // Create an in-memory database
    this.db = new Database(':memory:');

    // Create a users table
    this.db.exec(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);

    // Insert some users
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
