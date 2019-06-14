// @material-ui/icons
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import UserProfile from './components/user-profile/user-profile.js'


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
