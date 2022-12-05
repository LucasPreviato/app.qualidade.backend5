import { Migration } from '@mikro-orm/migrations';

export class Migration20221204194104 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "unit" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) null, "phone" varchar(255) not null);',
    );
    this.addSql(
      'alter table "unit" add constraint "unit_name_unique" unique ("name");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "unit" cascade;');
  }
}
