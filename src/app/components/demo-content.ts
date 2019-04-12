export interface StacheDemoContent {
  name: string;
  summary: string;
  icon: string;
  route: string;
  getCodeFiles?: () => any[];
}
