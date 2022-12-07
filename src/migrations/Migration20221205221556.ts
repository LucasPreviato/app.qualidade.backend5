import { Migration } from '@mikro-orm/migrations';

export class Migration20221205221556 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "department" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) not null, "created_at" timestamptz(0) not null, "email" varchar(255) not null, "initials" varchar(255) not null, "unit_id" int not null);',
    );
    this.addSql(
      'alter table "department" add constraint "department_name_unique" unique ("name");',
    );
    this.addSql(
      'alter table "department" add constraint "department_initials_unique" unique ("initials");',
    );

    this.addSql(
      'alter table "department" add constraint "department_unit_id_foreign" foreign key ("unit_id") references "unit" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "department" cascade;');
  }
}
