import { Component,OnInit , Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({  //Decorateur
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input() 
  FaceSnap!:FaceSnap;
  
  
    buttonTxet!:string;
  
constructor( private faceSnapsService:FaceSnapsService){}
    ngOnInit(){
      
      this.buttonTxet="oh snap!";
      
    }
    OnSnap(){
     if(this.buttonTxet=="oh snap!"){
      
      
      this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id,'snap');
      this.buttonTxet = 'Oops, unSnap!';
     }
     else{
      this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id,'!snap');
      ;
      this.buttonTxet="oh snap!"

     }
      

}




}
