import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { SearchComponent } from './search/search.component';
import { DormitoryComponent } from './dormitory/dormitory.component';
import { AdddormitoryforuserComponent } from './adddormitoryforuser/adddormitoryforuser.component';
import { SubmitdocumentsComponent } from './submitdocuments/submitdocuments.component';
import { DocumenttrackingComponent } from './documenttracking/documenttracking.component';
import { SettingComponent } from './setting/setting.component';
import { DetaildormitoryComponent } from './detaildormitory/detaildormitory.component';

const routes: Routes = [{ path: '', component: Home1Component },
                        { path: 'home', component: Home1Component },
                        { path: 'search', component: SearchComponent },
                        { path: 'dormitory', component: DormitoryComponent },
                        { path: 'adddormitory', component: AdddormitoryforuserComponent },
                        { path: 'submitdocuments/:id', component: SubmitdocumentsComponent},
                        { path: 'documenttracking', component: DocumenttrackingComponent},
                        { path: 'setting', component: SettingComponent},
                        { path: 'detail/:id', component: DetaildormitoryComponent},

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
