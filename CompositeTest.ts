// The interface used by the client
interface Grocery {
    getCost(): number;
}

// Leaf or individual class for creating leaf object
class Vegetable implements Grocery {
    private name: string;
    private cost: number;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    public getCost(): number {
        return this.cost;
    }
}

// Leaf or individual class for creating leaf object
class Fruit implements Grocery {
    private name: string;
    private cost: number;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    public getCost(): number {
        return this.cost;
    }
}

// Leaf or individual class for creating leaf object
class Grain implements Grocery {
    private name: string;
    private cost: number;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    public getCost(): number {
        return this.cost;
    }
}

// Composite Class for creating composite object
class CompositeGrocery implements Grocery {
    private groceries: Array<Grocery> = [];

    public addGrocery(grocery: Grocery): void {
        this.groceries.push(grocery);
    }

    public removeGrocery(grocery: Grocery): void {
        const index = this.groceries.indexOf(grocery);
        if (index !== -1) {
            this.groceries.splice(index, 1);
        }
    }

    public getCost(): number {
        let totalCost = 0.0;
        for (const grocery of this.groceries) {
            totalCost += grocery.getCost();
        }
        return totalCost;
    }
}
      
// client implementation

const tomato = new Vegetable("Tomato", 1.99);
const carrot = new Vegetable("Carrot", 0.99);

const apple = new Fruit("Apple", 2.99);
const orange = new Fruit("Orange", 1.49);

const rice = new Grain("Rice", 4.99);
const oats = new Grain("Oats", 3.49);

const vegetables = new CompositeGrocery();
vegetables.addGrocery(tomato);
vegetables.addGrocery(carrot);

const fruits = new CompositeGrocery();
fruits.addGrocery(apple);
fruits.addGrocery(orange);

const grains = new CompositeGrocery();
grains.addGrocery(rice);
grains.addGrocery(oats);

const pantry = new CompositeGrocery();
pantry.addGrocery(vegetables);
pantry.addGrocery(fruits);
pantry.addGrocery(grains);

const totalCost = pantry.getCost();
console.log(`Total cost of groceries: ${totalCost}`);
