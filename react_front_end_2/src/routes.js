/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import HomeView from "views/HomeView.js";
import LoanProfile from "./views/LoanProfile";
import EmptyView from "./views/EmptyView";

var routes = [
  // {
  //   path: "/view",
  //   name: "Home",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: HomeView,
  //   layout: "/home"
  // },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/loan",
    name: "Loan Details",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-coins",
    component: LoanProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/analytics",
    name: "Analytics",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transaction List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-bullet-list-67",
    component: TableList,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/files",
    name: "Files",
    rtlName: "خرائط",
    icon: "tim-icons icon-attach-87",
    component: EmptyView,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    rtlName: "خرائط",
    icon: "tim-icons icon-settings-gear-63",
    component: EmptyView,
    layout: "/admin"
  },
];
export default routes;
