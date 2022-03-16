export class DatabaseConnectionError extends Error {
    reason= 'Error while connection to the database'
    constructor(){
        super()
 
        //only because we extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}