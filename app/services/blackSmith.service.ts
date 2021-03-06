import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Smith } from '../models/Smith';
import { Map,MapCell } from '../models/map';
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

  syncMapData(map: Map){
    var mapModel = {
        id: null,
        name: map.name,
        layout: JSON.stringify(this.compressedLayout(map.layout)),
      }
      

    if(map.id){
      mapModel.id = map.id;
      return this.http.post(this.baseUrl+'updatemap',mapModel)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }else{
      return this.http.post(this.baseUrl+'createmap',mapModel)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }
  }
  getAllMap(){
      return this.http.get(this.baseUrl + 'getallmap')
             .toPromise()
             .then(response => response.json() as Map[])
             .catch(this.handleError);
  }

  getMapById(mapId: number){
    return this.http.post(this.baseUrl + 'getmap',{id:mapId})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private compressedLayout(layout:MapCell[][]){
    var result = []
    for(var i = 0;i < layout.length;i++){
      result[i] = []
      for(var j = 0;j < layout[i].length;j++){
        console.log(layout[i][j].terrain + "," + (layout[i][j].special==null ? '-':layout[i][j].special));
        result[i].push(layout[i][j].terrain + "," + (layout[i][j].special==null ? '-':layout[i][j].special))
      }
    }
    console.log(result);
    return result;
  }

    deCompressedLayout(layout:string[][]){
    var result = []
    for(var i = 0;i < layout.length;i++){
      result[i] = []
      for(var j = 0;j < layout[i].length;j++){
        let mapCell = layout[i][j].split(',');
        let item = new MapCell();

        item.terrain = Number.parseInt(mapCell[0]);
        item.special = mapCell[1] == '-'? null : Number.parseInt(mapCell[1]);
        
        result[i].push(item);
      }
    }
    console.log(result);
    return result;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}
