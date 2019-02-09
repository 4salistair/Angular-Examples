
import { Component,OnInit,Input,EventEmitter,Output, ViewEncapsulation } from '@angular/core'; // imports angular core class... need to find out more about this.
    

@Component({ 
    selector: 'app-success', // declares the selector to be used in call the componet in the app.componet
    templateUrl: './success.Component.html', // links this typescript file to the html document
    styleUrls: ['./success.component.css'], // links this typscript file to the css stylesheet.
    encapsulation: ViewEncapsulation.Emulated // can be Native or Emulated
                                          // Emulated - ensure style is picked from component CSS
                                          // Native - means that CSS will packed entire project   
})

    
export class SuccessComponent {   // declares the 'class'... need to find out more about this.

    serverid: number = 10;
    serverStatus: string = 'offline';               // **************   
    serverColor: string = 'green';                  //  This section declres variables, using types.
    userName: string = 'Example User Name';         // **************
    enableButton: boolean = true;
    paragraphBoolean: boolean= false;
    clickLog: string; 
    paragraphArray= [];        // declares an Array
    newServerName = '';
    newServerContent = '';
    
    /// **** CREATE A PROPERTY FOR THIS COMPONENT **** ///
    
    @Input('srvElement') element: {type: string, name: string, content: string};

    // ** defines the property 'element' and defines its data and types
    // ** @Input enables other components to access this property. 
    // ** and defines the external name 'svrElement'.


    // ** This means any other component that calls this <app-success> component can
    // ** bind to this this property like this...
    
    // ** <app-success [srvElement]="serverElement"> 
    // ** where "serverElement is object with the same properties. 



    // ** Binding to custom event ** ///
    
    @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string }>();
   
    // ** Creates and Emits an object serverCreated with the proprties {serverName:string, serverContent:string }>();

    onAddServer(){
  
        this.serverCreated.emit({
      
          serverName: this.newServerName,
          serverContent: this.newServerContent  //
      
         });
      
      }

      // ** Enables the properties created in HTML object to be bound to the serverCreated
      // ** so they are emit to be imported by other components 


    getserverColor() {                  // declares a function this called back in the 

        return this.serverColor  
        
    }

    constructor(){                     // contructor function called when HTML elements are built.

        this.enableButton = true;      // sets boolean to true. 
    }


    ngOnInIt(){


    

    }
    
        onclearuserName(userNameField){ // EVENT BOUND to the clear user button on click // (click) = " onclearuserName()
                                        // also passes local reference #userNameField 

            this.userName = '';             // clears the userName Variable 
            this.enableButton = false;       // sets boolean to true. 
            console.log(userNameField.value); // userName element value writen to the console. 
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
