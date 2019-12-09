class SignupAdapter {
    // Get at time of instantiation
    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL 
    }

    // Get at time of call (bc token and headers might change)    
    get token() {
        return this.baseAdapter.token
    }

    get headers() {
        return this.baseAdapter.headers
    }

    // Perform signup correctly
    async signup(params){
        const resp = await fetch(`${this.baseURL}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        this.baseAdapter.checkStatus(resp) // Either get error
        this.baseAdapter.token = resp.headers.get('authorization').split(' ')[1] // Or set base's token
        console.log(this.baseAdapter.token)
    }

}