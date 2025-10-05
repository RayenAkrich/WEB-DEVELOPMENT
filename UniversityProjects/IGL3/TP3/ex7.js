var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// fonction générique identity
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity('hello'));
// fonction générique getFirst retournant le premier élément d'un tableau
function getFirst(arr) {
    return arr[0];
}
console.log('--- getFirst Test ---');
console.log(getFirst([1, 2, 3]));
console.log(getFirst(['a', 'b', 'c']));
console.log(getFirst([]));
// classe générique Repository
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    // methode d'ajout
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    // methode de suppression
    Repository.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    // methode pour obtenir tous les éléments
    Repository.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    return Repository;
}());
var repo = new Repository();
repo.add(10);
repo.add(20);
console.log(repo.getAll());
repo.remove(10);
console.log(repo.getAll());
var response = {
    data: ['item1', 'item2'],
};
console.log(response);
var errorResponse = {
    data: null,
    error: 'Something went wrong',
};
console.log(errorResponse);
