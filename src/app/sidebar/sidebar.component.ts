import { Component, OnInit } from '@angular/core';
import { RouteInfo } from 'app/models/sidebar.model';

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: '主頁', icon: 'nc-bank', class: ''},
    // { path: '/user', title: '個人資料', icon: 'nc-badge', class: ''},
    { path: '/openExam', title: '開啟考場', icon: 'nc-hat-3', class: '' },
    { path: '/enterExam', title: '進入考場', icon: 'nc-user-run', class: '' },
    { path: '/record', title: '考試紀錄', icon: 'nc-paper', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public isCollapsed = false;
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
