import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Smith } from '../models/Smith';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BsService {
  private baseUrl = 'http://localhost:3050/api/';  // URL to web api
  constructor(private http: Http) { }

  getAllBs() {
    return this.http.get(this.baseUrl + 'getallbs')
               .toPromise()
               .then(response => response.json() as Smith[])
               .catch(this.handleError);
  }

  createBs(smith: Smith){
    return this.http.post(this.baseUrl+'createbs',smith)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getBsById(smithId: number){
    return this.http.post(this.baseUrl + 'getbs',{Id:smithId})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  updateBs(smith: Smith){
    return this.http.post(this.baseUrl+'updatebs',smith)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}
