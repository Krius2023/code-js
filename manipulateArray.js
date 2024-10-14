const oldRecords = [
    {
        "myId": "parent-1",
        "parentOwnFields": {},
        "childIds": [{ childId: "child-a-1", childName: "child-a-1" }, { childId: "child-b-1", childName: "child-b-1" }]
    },
    {
        "myId": "child-a-1",
        "childAFields": {}
    },
    {
        "myId": "child-b-1",
        "childBFields": {}
    },
    {
        "myId": "parent-2",
        "parentOwnFields": {},
        "childIds": [{ childId: "child-a-2", childName: "child-a-2" }, { childId: "child-b-2", childName: "child-b-2" }]
    },
    {
        "myId": "child-a-2",
        "childAFields": {}
    },
    {
        "myId": "child-b-2",
        "childBFields": {}
    }
]

let parentItems = []
let childItems = []
let result = []

for (const item of oldRecords) {
    if (!!item?.childIds) {
        parentItems.push(item)
    } else {
        childItems.push(item)
    }
}

for (let parentItem of parentItems) {
    for (const childItem of parentItem.childIds) {
        let foundChildItem = childItems.find(child => child.myId === childItem.childId)
        if (foundChildItem) {
            parentItem = { ...parentItem, ...foundChildItem }
        }
    }
    result.push(parentItem)
}

console.log("RESULT:: ", result.length, JSON.stringify(result))

/*
OUTPUT
======
RESULT::  2 [{"myId":"child-b-1","parentOwnFields":{},"childIds":[{"childId":"child-a-1","childName":"child-a-1"},{"childId":"child-b-1","childName":"child-b-1"}],"childAFields":{},"childBFields":{}},{"myId":"child-b-2","parentOwnFields":{},"childIds":[{"childId":"child-a-2","childName":"child-a-2"},{"childId":"child-b-2","childName":"child-b-2"}],"childAFields":{},"childBFields":{}}]
*/
