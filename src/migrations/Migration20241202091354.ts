import { Migration } from '@mikro-orm/migrations';

export class Migration20241202091354 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`users\` (\`id\` int unsigned not null auto_increment primary key, \`uuid\` varchar(255) not null, \`created_at\` datetime not null, \`created_by\` int null, \`updated_at\` datetime not null, \`updated_by\` int null, \`deleted_at\` date null, \`deleted_by\` int null, \`username\` varchar(255) not null, \`name\` varchar(255) not null, \`email\` varchar(255) not null, \`email_verified_at\` int null, \`password\` varchar(255) not null, \`role_id\` int unsigned not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`users\` add index \`users_role_id_index\`(\`role_id\`);`);

    this.addSql(`alter table \`users\` add constraint \`users_role_id_foreign\` foreign key (\`role_id\`) references \`role\` (\`id\`) on update cascade;`);

    this.addSql(`drop table if exists \`user\`;`);
  }

  override async down(): Promise<void> {
    this.addSql(`create table \`user\` (\`id\` int unsigned not null auto_increment primary key, \`uuid\` varchar(255) not null, \`created_at\` datetime not null, \`created_by\` int null, \`updated_at\` datetime not null, \`updated_by\` int null, \`deleted_at\` date null, \`deleted_by\` int null, \`username\` varchar(255) not null, \`name\` varchar(255) not null, \`email\` varchar(255) not null, \`email_verified_at\` int null, \`password\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`drop table if exists \`users\`;`);
  }

}
