class User {
    constructor(user) {
        const {id, username, email, visits, parks} = user
        this.id = id
        this.username = username
        this.email = email 
        this.visits = visits.map(v => new Visit(v))
        this.parks = parks.map(p => new Park(p))
    }

    
}