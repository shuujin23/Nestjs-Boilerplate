import { Migration } from '@mikro-orm/migrations';

export class Migration20241202080315 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`role\` (\`id\` int unsigned not null auto_increment primary key, \`uuid\` varchar(255) not null, \`created_at\` datetime not null, \`created_by\` int null, \`updated_at\` datetime not null, \`updated_by\` int null, \`deleted_at\` date null, \`deleted_by\` int null, \`name\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`role\`;`);
  }

}
