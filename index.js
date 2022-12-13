class Person {
    constructor(name, confidence, requiredConfidence, charisma ){
        this.name = name,
        this.confidence = confidence,
        this.requiredConfidence = requiredConfidence,
        this.charisma = charisma
    }
    convince(member) {
//random between -2, 2

        let randomVar = Math.floor(Math.random() * 5) - 2
//
        let charismaEffect = this.charisma + randomVar;

member.confidence += charismaEffect;
    }
    discourage(meObject){
        let randomVar = Math.floor(Math.random() * 5) - 2
        //
                let charismaEffect = this.charisma + randomVar;
        
        meObject.confidence -= charismaEffect;

    }
}



let me = new Person("Albruce", 10, 30, 20);
me.trying = true

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

myFriendGroup.addFriend("Jared", 10, 30, 20);
myFriendGroup.addFriend("Sarah", 14, 30, 10);
myFriendGroup.addFriend("Tara", 21, 30, 15);
myFriendGroup.addFriend("Darren", 12, 30, 11);

console.log(myFriendGroup)

//loop here

const conviceGroup = () => {
    let friends = myFriendGroup.friends;
    for (let i = 0; i < friends.length; i++) {
        if(me.confidence < me.requiredConfidence) {
            console.log("GAME OVER", me.confidence)
            break;
        }
        let keepLooping = true;
        while (keepLooping) {
            me.convince(friends[i]);
            if(friends[i].confidence >= friends[i].requiredConfidence){
               console.log(`${me.name} was convinenced!`)
            }
        }
        //we go first - convice()
        me.convince(friends[i])
        //are they convinced enough?
        //go to next person

        //discourage()

        //check if we are too discouraged
      

    }
if (me.trying = false) {
    myFriendGroup.goingOnTrip = false;
} else {
    myFriendGroup.goingOnTrip = false;
}
}
conviceGroup()
//create instance
console.log(myFriendGroup.friends)