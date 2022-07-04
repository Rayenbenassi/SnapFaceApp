import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    faceSnaps:FaceSnap[]=[
        new FaceSnap(1,'Rayen','Ce ci est moi',new Date(),999,'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/256123927_1127892831083176_5868521204591735323_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pF2LiniWhXsAX_SjZ7q&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-tRILMD1hwWjJ39E7mT_ScnHRvi5UknFPv_kQci7egkw&oe=62C78CD1','Gafsa'),
        new FaceSnap(2,'olfa','this is olfa',new Date(),10000000,'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/244203468_1551626955185446_7943379445875962108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9FJXKjuVZRsAX9sMFIn&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-pxqKaOvJdsEcPNiSu0CLAD0nd-G6yCSLnDtFwGdD3ow&oe=62C5F5C2','Paris'),
        new FaceSnap(3,'foulen','this is foulen',new Date(),0,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_4tFgC3QdBGQhTPwXj90jJ_2V3KBxDrqFg&usqp=CAU')
      ];
      getAllFaceSnaps():FaceSnap[]{
        return this.faceSnaps;
      }
      snapFaceSnapById(id:number):void{
               const faceSnap = this.faceSnaps.find(faceSnap=>faceSnap.id===id);
      }

}