export type Role = 'User' | 'Admin';

export abstract class Personne {
  constructor(
    public id: number,
    public name: string,
    public role: Role
  ) {}
}

export class User extends Personne {
  constructor(id: number, name: string) {
    super(id, name, 'User');
  }
}

export class Admin extends Personne {
  constructor(id: number, name: string) {
    super(id, name, 'Admin');
  }
}

