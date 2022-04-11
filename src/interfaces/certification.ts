export interface ICertificationInitialState {
  certificationList: ICertification[];
}

export interface ICertification {
  type: string;
}

export type ICertificationMenuType =
  | 'registration'
  | 'key-certifications'
  | 'patent'
  | 'test-report';
