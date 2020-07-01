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
import React from "react";
//import axios from 'axios';

import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";
import HomeView from "../../views/HomeView";
import axios from "axios";

var ps;

class Home extends React.Component {
    constructor(props) {
        super(props);

        axios.get('http://localhost:8080/rest/get')
            .then(response => {
                console.log("hi there!");
            })

        this.state = {
            backgroundColor: "blue",
            sidebarOpened:
                document.documentElement.className.indexOf("nav-open") !== -1,
            loanList: [
                {
                    'pan': 'insertPANhere1',
                    'card_id': 'cardidhere1',
                    'company_name': 'Azure Source Capital',
                    'address': 'Calle Arture Ambrogi #19-303',
                    'city':'San Salvador',
                    'state':'',
                    'country': 'El Salvador',
                    'phone':'50325666555',
                    'email':'info@azure.com.sv',
                    'amount_loaned':60000,
                    'payment_plan':'one-time',
                    'issue_date':'2018-05-06T00:00:00.00Z',
                    'expected_end_date':'2021-05-06T00:00:00.00Z',
                    'next_inspection_date':'2020-10-05T00:00:00.00Z',
                    'loan_officer':'John Doe'
                },
                {
                    'pan': 'insertPANhere2',
                    'card_id': 'cardidhere2',
                    'company_name': 'Tridi Oasis',
                    'address': 'Jl. Industri No.22',
                    'city':'Bojong Jaya, Karawaci, Kota Tangerang',
                    'state':'Banten',
                    'country': 'Indonesia',
                    'phone':'47183927382',
                    'email':'dinda.ishlad@tridi-oasis.com',
                    'amount_loaned':40000,
                    'payment_plan':'one-time',
                    'issue_date':'2016-12-20T00:00:00.00Z',
                    'expected_end_date':'2023-12-20T00:00:00.00Z',
                    'next_inspection_date':'2020-11-05T00:00:00.00Z',
                    'loan_officer':'Jane Doe'
                }
            ]
        };
    }
    componentDidMount() {

        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            if (navigator.platform.indexOf("Win") > -1) {
                let tables = document.querySelectorAll(".table-responsive");
                for (let i = 0; i < tables.length; i++) {
                    ps = new PerfectScrollbar(tables[i]);
                }
            }
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }
    // this function opens and closes the sidebar on small devices
    toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({ sidebarOpened: !this.state.sidebarOpened });
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/home") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    handleBgClick = color => {
        this.setState({ backgroundColor: color });
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Home";
    };
    render() {
        return (
            <>
                <div className="wrapper">
                    {/*<Sidebar*/}
                    {/*    {...this.props}*/}
                    {/*    routes={routes}*/}
                    {/*    bgColor={this.state.backgroundColor}*/}
                    {/*    logo={{*/}
                    {/*        outterLink: "https://www.creative-tim.com/",*/}
                    {/*        text: "Creative Tim",*/}
                    {/*        imgSrc: logo*/}
                    {/*    }}*/}
                    {/*    toggleSidebar={this.toggleSidebar}*/}
                    {/*/>*/}
                    <div
                        className="home-view"
                        ref="mainPanel"
                        data={this.state.backgroundColor}
                    >
                        <AdminNavbar
                            {...this.props}
                            brandText={this.getBrandText(this.props.location.pathname)}
                            toggleSidebar={this.toggleSidebar}
                            sidebarOpened={this.state.sidebarOpened}
                        />
                        <Switch>
                            {this.getRoutes(routes)}
                            <Redirect from="*" to="/home/view"/>
                        </Switch>
                        {this.state.loanList ?
                            <HomeView
                                {...this.props}
                                className='HomeView'
                                loanList={this.state.loanList}>
                            </HomeView> : null
                        }
                        {// we don't want the Footer to be rendered on map page
                            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                                <Footer fluid />
                            )}
                    </div>
                </div>
                {/*<FixedPlugin*/}
                {/*    bgColor={this.state.backgroundColor}*/}
                {/*    handleBgClick={this.handleBgClick}*/}
                {/*/>*/}
            </>
        );
    }
}

export default Home;
