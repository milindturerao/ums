import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistraionService } from '../registerService/registraion.service';

@Component({
  selector: 'app-unlockac',
  templateUrl: './unlockac.component.html',
  styleUrls: ['./unlockac.component.css']
})
export class UnlockacComponent {
  unlockData =new FormGroup({
    email: new FormControl('',[Validators.required]),
    confirmPwd: new FormControl('',[Validators.required]),
    tempPwd: new FormControl('',[Validators.required]),
    newPwd: new FormControl('',[Validators.required]),

  });

  response:any;
constructor(private regService:RegistraionService){}
  unlockPost(){
    console.log(this.unlockData.value);
    
    this.regService.unlock(this.unlockData.value).subscribe((res:any)=>{
      this.response=res;console.log(res);
      },(error)=>{console.log(error);
      })
  }

  get confirmPwd(){
    return this.unlockData.get('confirmPwd')
  }
  get email(){
    return this.unlockData.get('email')
  }
  get tempPwd(){
    return this.unlockData.get('tempPwd')
  }

  get newPwd(){
    return this.unlockData.get('newPwd')
  }
 
}
