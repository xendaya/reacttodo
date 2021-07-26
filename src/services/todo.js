import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Testing ',
            completed: false
        },
        {
            id: 2,
            text: 'Project',
            completed: false
        },
        {
            id: 3,
            text: 'from BeeJee',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of specifics with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}


let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}


export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
