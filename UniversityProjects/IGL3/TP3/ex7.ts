// fonction générique identity
function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(42));
console.log(identity<string>('hello'));

// fonction générique getFirst retournant le premier élément d'un tableau
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log('--- getFirst Test ---');
console.log(getFirst([1, 2, 3]));
console.log(getFirst(['a', 'b', 'c']));
console.log(getFirst([]));

// classe générique Repository
class Repository<T> {
    private items: T[] = [];
    // methode d'ajout
    add(item: T): void {
        this.items.push(item);
    }
    // methode de suppression
    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    // methode pour obtenir tous les éléments
    getAll(): T[] {
        return [...this.items];
    }
}
const repo = new Repository<number>();
repo.add(10);
repo.add(20);
console.log(repo.getAll());
repo.remove(10);
console.log(repo.getAll());

// interface générique ApiResponse
interface ApiResponse<T> {
    data: T;
    error?: string;
}
const response: ApiResponse<string[]> = {
    data: ['item1', 'item2'],
};
console.log(response);
const errorResponse: ApiResponse<null> = {
    data: null,
    error: 'Something went wrong',
};
console.log(errorResponse);
