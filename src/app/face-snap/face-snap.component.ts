import { Component,OnInit , Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({  //Decorateur
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input() 
  FaceSnap!:FaceSnap;
  
  
    buttonTxet!:string;

    ngOnInit(){
      
      this.buttonTxet="oh snap!";
      
    }
    OnSnap(){
     if(this.buttonTxet=="oh snap!"){
      this.FaceSnap.snaps+=1;
      
      this.buttonTxet="Oops unsnap!"
     }
     else{
      this.FaceSnap.snaps--;
      ;
      this.buttonTxet="oh snap!"

     }
      

}




}
