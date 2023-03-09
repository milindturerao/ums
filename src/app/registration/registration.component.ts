import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistraionService } from '../registerService/registraion.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registration =new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    phno: new FormControl('',[Validators.required]),
    countryId: new FormControl('',[Validators.required]),
    stateId: new FormControl('',[Validators.required]),
    cityId: new FormControl('',[Validators.required]),
  });
  countries:any;
  states:any;
  citys:any;
  emailc:any
  constructor(private regService:RegistraionService){}
  ngOnInit(){
    this.getcountryByid()
  }
  getcountryByid(){
    this.regService.getCountries().subscribe((res:any)=>{
      this.countries=res;})
  }
  getStatesByCountryid(value:any){
    this.regService.getStatesById(value).subscribe((res:any)=>{
      this.states=res;},(error)=>{console.log(error);
      })
  }

  getCitysByStateid(value:any){
    this.regService.getCitiesById(value).subscribe((res:any)=>{
      this.citys=res;},(error)=>{console.log(error);
      })
  }
  emailcheck(email:any){
    this.regService.getEmailCheck(email).subscribe((res)=>{this.emailc=res,console.log(this.emailc);
    })
  }
  save(){
    if (this.emailc=="UNIQUE") {
      this.regService.saveUser(this.registration.value).subscribe((res:any)=>{
        this.citys=res;},(error)=>{console.log(error);
        });
    }else{
      alert('Email in use')
    }
    
  }
  get fname(){
    return this.registration.get('fname')
  }
  get lname(){
    return this.registration.get('lname')
  }
  get email(){
    return this.registration.get('email')
  }

  get gender(){
    return this.registration.get('gender')
  }
  get dob(){
    return this.registration.get('dob')
  }
  get phno(){
    return this.registration.get('phno')
  }

  get countryId(){
    return this.registration.get('countryId')
  }
  get stateId(){
    return this.registration.get('stateId')
  }
  get cityId(){
    return this.registration.get('cityId')
  }
}
