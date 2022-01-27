// Dependency Inversion Principle

class Fetch {
    request(url) {
        //return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLS = 'data from local storage'
        return dataFromLS
    }
}

// Class with an interface for interaction between all entities 
class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('google.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client
    }
    getData(key) {
        return this.client.clientGet(key)
    }
}

//const db = new Database(new FetchClient())
const db = new Database(new LocalStorageClient())

console.log(db.getData('random'))