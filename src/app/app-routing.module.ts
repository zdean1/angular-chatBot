import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ChatModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
