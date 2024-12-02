export class FilterDto {
  page: number = 1;
  limit: number = 10;
  sort: string = 'ASC';
  filter: any;
  companyId: any;
  userId: any;
  companyBranchId: any;
}
