class Visit { // extends User
    constructor(visit) {
        // super(username, parks)
        const {id, date, notes, user_id, park_id} = visit
        this.visit_id = id
        this.date = date 
        this.notes = notes
        this.park_id = park_id
        this.user_id = user_id
        this.visitBindingsAndEvents()
    }

    visitBindingsAndEvents() {
        // console.log(this.parks) --> returns undefined
        this.container = document.querySelector('#page-container')
    }

    get visitDetailsHTML() {
        console.log('visit details')
        // return (`
        //     <div id='visit-details'> 
        //         <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
        //         <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p>
        //         <button class='visited-icon' data-id='${this.id}' data-action='visited-icon' alt='Visited'></button>
        //         <button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button>
        //     </div>                  
        // `)
    }

    // Need to get visited parks to display park info in visited cards!
    // get visitCardHTML() {
    //     return (`
    //         <div id='visit-card' class='visit-card'>
    //             <h4 class='center-text'>${this.name}</h4>
    //             <p class='small-text'>${this.location}, est. ${this.est}</p>
    //             <div id='visit-details'> 
    //                 <p class='visit-date' data-id='${this.id}' data-action='toggle-visit'>${this.date}</p>
    //                 <p class='visit-notes' data-id='${this.id}' data-action='toggle-visit'>${this.notes}</p>
    //             <button class='visited-icon' data-id='${this.id}' data-action='visited-icon' alt='Visited'></button>
    //             <button class='remove-btn' data-id='${this.id}' data-action='remove-btn' alt='Remove'></button>
    //         </div>                  
    //         </div>
    //     `)
    // }


}

{/* ADD BACK IN PARK PIC / SUMMARY TOGGLE
<img class='park-pic' data-name='${this.name}' data-action='toggle-summary' src='${this.pic}'>
<p class='visit-summary' data-name='${this.name}' data-action='toggle-summary'>${this.summary}</p> */}