import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PerfectScrollbar from 'perfect-scrollbar'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Sidebar from './components/layout/Sidebar/Sidebar.jsx'
import image from './assets/img/sidebar-2.jpg'
import logo from './assets/img/newvendor.png'
import routes from "./routes.js";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "blue",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  render() {
    const { classes,auth, ...rest } = this.props;
    return (

      <BrowserRouter>
        <div className="App">
        {auth.uid ? <Sidebar
          routes={routes}
          logoText={"New Vendor"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />:''}
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(App)
