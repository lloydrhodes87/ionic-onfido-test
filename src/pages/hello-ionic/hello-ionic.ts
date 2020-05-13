import { Component } from '@angular/core';
// import { OnfidoService } from '../../services/onfido-service/onfido.service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {



  options: any;
  constructor(
    // private onfido: OnfidoService
  ) {
    var initobject = {
      token:  '',
      applicant_id: '',
      flow_steps: [ 'welcome', 'document', 'face', 'final'],
  }
  }

  handleOnfido() {
  
    try {
      console.log(1)
      window['cordova'].plugins.Onfido.init((res) => {
        console.log(res)
        this.onComplete(res)
      }, this.options)
      console.log(2)

    } catch (error) {
      console.log('ERROR', error)
    }
     
   

  
}
onComplete(completeResponse) {
  console.log('in on complete', completeResponse)
  }
}

