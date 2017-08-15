import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SocketIoConfig} from 'ng-socket-io/socketIoConfig';
import {SocketIoModule} from 'ng-socket-io/socket-io.module';
import {SocketService} from './services/socket.service';
import {ChartComponent} from './components/chart/chart.component';
import {InputComponent} from './components/input/input.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {D3Service} from 'd3-ng2-service';
import { PanelComponent } from './components/panel/panel.component';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    InputComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpModule
  ],
  providers: [SocketService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
