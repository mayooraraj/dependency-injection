import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  official=[
    {name:'Mayoora',department:'Technical Support',location:"Calicut",salary:"35,000"},
    {name:'Athira',department:'Sotware Developer',location:"Kochi",salary:"45,000"},
    {name:'Arun',department:'Network Administrator',location:"Calicut",salary:"32,000"},
    {name:'Vyshnav',department:'Technical Support',location:"Kannur",salary:"35,000"},
    {name:'Vishnu',department:'Administrator',location:"Trissur",salary:"33,000"},
    {name:'Nancy',department:'Technical Support',location:"Bangalore",salary:"45,000"},
    {name:'Marjana',department:'Technical Support',location:"Calicut",salary:"55,000"},
  ];

  personal =[
    {name:"Mayoora",age:24,place:"calicut"},
    {name:"Athira",age:28,place:"calicut"},
    {name:"Arun",age:25,place:"Bangalore"},
    {name:"Vyshnav",age:28,place:"Kochi"},
    {name:"Vishnu",age:23,place:"Kannur"},
    {name:"Marjana",age:24,place:"Kannur"},
  ];

  officialdetails(){
    return this.official;
  }

  personaldetails(){
    return this.personal;
  }
}
