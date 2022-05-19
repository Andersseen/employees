export interface Employe {
  id: number;
  name: string;
  email: string;
  date: string;
}

export const EMPLOYEES: Employe[] = [
  {
    id: 1,
    name: 'Dr. Nice',
    email: 'email@getMaxListeners.com',
    date: '10.12.2020',
  },
  { id: 2, name: 'John Doe', email: 'email@gmail.com', date: '01.02.2020' },
];
