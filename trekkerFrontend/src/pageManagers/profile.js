class ProfilePage extends PageManager {
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter) // Set up adapter for itself
        // this.user = null
    }

    async fetchAndRenderPageResources() {
        try {
            const parks = await this.adapter.getParks()
            this.container.innerHTML = parks.map(p => p.name).join(', ')
        } catch(err) {
            this.handleAlert(err, 'danger')
        }
    }

    get is_authenticated() {
        return !!this.adapter.token
    }

    initBindingsAndEvents() {
        this.logoutBtn = this.container.querySelector('#logout-btn')

        this.logoutBtn.addEventListener('click', this.handleLogout.bind(this))
    }

    handleLogout(e) {
        e.preventDefault()
        this.redirect('login')
        this.adapter.token = null
        console.log(this.adapter.token)
    }

    get staticHTML() {
        if (this.is_authenticated) {   
            return (`
                <h2 class="welcome">Welcome, user</h2><br><br><br><br>
                <button type="button" id="logout-btn" class="btn btn-primary btn-block btn-md">Logout</button>
            `)
        }
    }

}