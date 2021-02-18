import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DatakeenModel } from './datakeen.model';
import {  ChangeDetectorRef } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import {HttpClient} from "@angular/common/http"
import { DatakeenService } from "./datakeen.service";
//import axios from "axios";

 @Component({
   selector:"app-datakeen",
   templateUrl:"datakeen.component.html",  
   styleUrls:["datakeen.component.scss"]
 })
 export class DatakeenComponent implements OnInit{
 public textValue =""
 public showTable = false
 public showFinalList = false
public ELEMENT_DATA:  DatakeenModel[] =[] 
public displayedColumns: string[] = ['mot', 'checked'];
public listImportantWord : DatakeenModel[] = []
public dataSource :MatTableDataSource<DatakeenModel>
public listIsempty = true

@ViewChild('scheduledOrdersPaginator') set paginator(pager:MatPaginator) {
  if (pager) this.dataSource.paginator = pager;
}
 
constructor(private cdr: ChangeDetectorRef, private datakeenService : DatakeenService){

}

ngOnInit(){
  this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  this.cdr.detectChanges(); 
  }

getWordsList(){
  let splitted = this.textValue.trim().split(/\W+/, this.textValue.length);
  let indexWord = 0
  splitted.forEach(element =>{
    if (element.length>0)
    { 
      const startPositionIndex = this.textValue.indexOf(element, (indexWord));
      const word : DatakeenModel ={
      mot : element,
      startPosition: startPositionIndex,
      endPosition : startPositionIndex + element.length,
      important : false
    }
  this.ELEMENT_DATA.push(word)
  indexWord = startPositionIndex + element.length +1}
})
  console.log(this.dataSource);
  this.showTable = true
}

updateCheckedList(element){
  element.important? element.important = false : element.important = true
  console.log(element);
}

validateWordsList(){
  this.listImportantWord =[]
  this.ELEMENT_DATA.forEach(word => {
    if (word.important) this.listImportantWord.push(word)
  })
  this.showFinalList =true
  this.listImportantWord.length >0 ? this.listIsempty = false : this.listIsempty = true
  this.datakeenService.getData(this.listImportantWord).subscribe(result=>{})
  //axios.post("http://localhost:3000/store",this.listImportantWord).then(function (response) {
    //console.log(response);
  //})
  //.catch(function (error) {
    //console.log(error);
  //})
  }

  goToText(){
    this.showTable=false
  } 
}
