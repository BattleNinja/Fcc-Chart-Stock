import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Socket} from 'ng-socket-io';
import {Http, Headers} from '@angular/http';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SocketService {
  stocks = [];
  dataUpdate = new Subject();


  constructor(private socket: Socket, private http: Http) {
  }

// add a new stock - - -- - - ------ - - - -- - - - - - - --- - -
  getAdd() {
    this.socket
      .fromEvent<any>('add')
      .map(data => data)
      .subscribe(data => {
        this.stocks.push({stock: data.stock, msg: data.msg});
        console.log(this.stocks);
        this.dataUpdate.next(this.stocks);
      });
  }

  sendAdd(msg: string) {
    this.socket
      .emit('add', msg);
  }

// delete a stock - - -- - - ------ - - - -- - - - - - - --- - -
  sendRemove(msg: string) {
    this.socket
      .emit('remove', msg);
  }

  getRemove() {
    this.socket
      .fromEvent<any>('remove')
      .map(data => data.msg)
      .subscribe(
        stock => {
          console.log(stock, 'has been removed');
          this.stocks = this.stocks.filter(item => {
            return item.stock !== stock;
          });
          this.dataUpdate.next(this.stocks);
        }
      );
  }


// initialize data - - -- - - ------ - - - -- - - - - - - --- - -
  initialData() {
    const url = '/api/initialize';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(url, {headers: headers})
      .map(res => res.json())
      .subscribe((data) => {
        console.log(data);
        this.stocks = data;
        console.log(this.stocks);
        this.dataUpdate.next(this.stocks);
      });
  }


}



