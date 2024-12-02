import { Migration } from '@mikro-orm/migrations';

export class Migration20241202094642 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`jobs\` (\`id\` int unsigned not null auto_increment primary key, \`uuid\` varchar(255) not null, \`created_at\` datetime not null, \`created_by\` int null, \`updated_at\` datetime not null, \`updated_by\` int null, \`deleted_at\` date null, \`deleted_by\` int null, \`type\` varchar(255) not null, \`payload\` text not null, \`status\` varchar(255) not null, \`attempt\` int not null) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`create table \`jobs_failed\` (\`id\` int unsigned not null auto_increment primary key, \`uuid\` varchar(255) not null, \`created_at\` datetime not null, \`created_by\` int null, \`updated_at\` datetime not null, \`updated_by\` int null, \`deleted_at\` date null, \`deleted_by\` int null, \`jobs_id\` int unsigned not null, \`exception\` text not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`jobs_failed\` add index \`jobs_failed_jobs_id_index\`(\`jobs_id\`);`);

    this.addSql(`alter table \`jobs_failed\` add constraint \`jobs_failed_jobs_id_foreign\` foreign key (\`jobs_id\`) references \`jobs\` (\`id\`) on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`jobs_failed\` drop foreign key \`jobs_failed_jobs_id_foreign\`;`);

    this.addSql(`drop table if exists \`jobs\`;`);

    this.addSql(`drop table if exists \`jobs_failed\`;`);
  }

}
