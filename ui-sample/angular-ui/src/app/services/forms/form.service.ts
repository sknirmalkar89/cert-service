import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  formData: any;
  constructor(private http: HttpClient) { }


  public getFormConfig(formName): Observable<any> {
    this.formData = "";
    const option = {
      url: "../../../assets/jsons/" + formName + ".json"
    };
    return this.http.get(option.url).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError((err) => {
        return err;
      }));
  }

}
