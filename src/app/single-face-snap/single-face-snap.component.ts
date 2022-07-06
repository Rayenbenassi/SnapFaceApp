import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

 constructor(private faceSnapsService:FaceSnapsService,
             private route: ActivatedRoute
  ){}
  FaceSnap!:FaceSnap;
  
  
    buttonTxet!:string;

    ngOnInit(){
      
      this.buttonTxet="oh snap!";
      const faceSnapId = +this.route.snapshot.params['id'] //ttpecast "+""
          
            this.FaceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);

      
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
    }}
