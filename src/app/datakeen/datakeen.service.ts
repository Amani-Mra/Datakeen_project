import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"

})


export class DatakeenService{
    constructor(private http : HttpClient){

    }
    getData(body):Observable<any>{
        const url = "http://localhost:4000/store"
        return this.http.post(url,body)
    }
    
}
