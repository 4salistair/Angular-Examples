
import { Component } from '@angular/core'; // imports angular core class... need to find out more about this.
    

@Component({ 
    selector: 'app-success', // declares the selector to be used in call the componet in the app.componet
    templateUrl: './success.Component.html', // links this typescript file to the html document
    styleUrls: ['./success.component.css'] // links this typscript file to the css stylesheet.

})

    
export class SuccessComponent {   // declares the 'class'... need to find out more about this.

    serverid: number = 10;
    serverStatus: string = 'offline';               // **************   
    serverColor: string = 'green';                  //  This section declres variables, using types.
    userName: string = 'Example User Name';         // **************
    enableButton: boolean = true;
    paragraphBoolean: boolean= false;
    clickLog: string; 
    paragraphArray= ['clickLog'];        // declares an Array


    getserverColor() {                  // declares a function this called back in the 

        return this.serverColor  
        
    }

    constructor(){                     // contructor function called when HTML elements are built.

        this.enableButton = true;      // sets boolean to true. 
    }


    ngOnInIt(){
                                        // invoked after the databound objects are built... I think.

    }
    
        onclearuserName(){                  // EVENT BOUND to the clear user button on click // (click) = " onclearuserName()

            this.userName = '';             // clears the userName Variable 
            this.enableButton = false;       // sets boolean to true. 

        }

        onUpdateUserName(event: any){    // EVENT BOUND to the input in the text box.
        
            console.log(event);          // Writes the event to the console!
            this.enableButton = true;    // PROPERTY BOUND to enable add user button.
        }
    

        setparagraphBoolean(){                                // class called in DIRECTIVE

            this.paragraphBoolean = !this.paragraphBoolean;   // toggle boolean to enable toggle of display of text in html
            this.clickLog = Date();                           // set var clicklog to be date and time  
            this.paragraphArray.push(this.clickLog);          // push date stamp (clicklog) in to array (Date()) 

        }
}
