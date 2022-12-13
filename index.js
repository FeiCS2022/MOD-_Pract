class Person {
    constructor(name, confidence, requiredConfidence, charisma ){
        this.name = name,
        this.confidence = confidence,
        this.requiredConfidence = requiredConfidence,
        this.charisma = charisma
    }
    discourage(){

    }
}



let me = new Person("Albruce", 100, 30, 20);


class FriendGroup {
    constructor() {
this.goingOnTrip = false;
this.friends = [];
    }
    addFriend(name, confidence, requiredConfidence, charisma) {
        this.friends.push(new Person (name, confidence, requiredConfidence, charisma))

    }
}

let myFriendGroup = new FriendGroup();

let brandonFriendGroup = new FriendGroup()

myFriendGroup.addFriend("Jared", 10, 60, 20);
myFriendGroup.addFriend("Sarah", 14, 98, 10);
myFriendGroup.addFriend("Tara", 21, 81, 15);
myFriendGroup.addFriend("Darren", 34, 23, 11);

console.log(myFriendGroup)