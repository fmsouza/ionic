import { Application } from './app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { EntryComponents, CommonComponents } from '../components';
import { Providers } from '../providers';

const PROVIDERS: any = [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...Providers
];

@NgModule({
    declarations: [ Application, ...EntryComponents, ...CommonComponents ],
    entryComponents: [ Application, ...EntryComponents ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(Application)
    ],
    bootstrap: [IonicApp],
    providers: PROVIDERS
})
export class AppModule {}
