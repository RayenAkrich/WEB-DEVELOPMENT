export class Repository<T extends { id: number }> {
  private items: T[] = [];


  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    for (const item of this.items) {
        if (item.id === id) {
            return item;
        }
    }
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(id: number): boolean {
    const index = this.items.findIndex(item => id === item.id);
    if (index !== -1) {
        this.items.splice(index, 1);
        return true;
    }
    return false;
  }
}

