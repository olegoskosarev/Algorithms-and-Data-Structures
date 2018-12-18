class MySet {
    constructor() {
        this.collection = []; 
    }
    
    has(element) {
        return (this.collection.indexOf(element) !== -1);
    }
    
    values() {
        return this.collection;
    }
    
    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }
    
    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }
    
    size() {
        return this.collection.length;
    }
    
    union(otherSet) {
        const unionSet = new MySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }
    
    intersection(otherSet) {
        const intersectionSet = new MySet();
        const firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    
    difference(otherSet) {
        const differenceSet = new MySet();
        const firstSet = this.values();
        firstSet.forEach(function(e){
            if (!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    
    subset(otherSet) {
        const firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    }
}

const setA = new MySet();  
const setB = new MySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

const setC = new Set();  
const setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));