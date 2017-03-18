import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { UserService } from '../../../_core/user.service';


@Injectable()
export class DetailService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/device.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {
  }


  //获取装置基本信息
  getDeviceModelInfo():Observable<ResponseEntity>{
     let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().deviceModel as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

  //装置的检查点
  getDeviceKeyPoint():Observable<ResponseEntity>{
     let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().deviceKeyPoint as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

  //装置的运行记录
  getDeviceRunRecord():Observable<ResponseEntity>{
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().deviceRunRecord as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
