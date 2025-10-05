export class Livres {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public year: number,
    public available: boolean
  ) {}
}