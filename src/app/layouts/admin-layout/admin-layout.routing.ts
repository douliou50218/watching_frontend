import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { CraftPortfolioComponent } from 'app/pages/craftList/craftPortfolio.component';
import { AddCraftPortfolioComponent } from 'app/pages/addCraftPortfolio/addCraftPortfolio.component';
import { OpenExamComponent } from 'app/pages/openExam/openExam.compontent';
import { EnterExamComponent } from 'app/pages/enterExam/enterExam.component';
import { RecordComponent } from 'app/pages/record/record.component';
import { TeacherExamScreenComponent } from 'app/pages/teacherExamScreen/teacherExamScreen.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user',           component: UserComponent },
    { path: 'openExam',          component: OpenExamComponent },
    { path: 'enterExam',          component: EnterExamComponent },
    { path: 'record',          component: RecordComponent },
    { path: 'teacherExamScreen',          component: TeacherExamScreenComponent }
];
