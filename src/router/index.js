import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import ProfileLayout from "../views/Layout/ProfileLayout.vue";
import DashboardLayoutVr from "../views/Layout/DashboardLayoutVr.vue";
import PageLayout from "../views/Layout/PageLayout";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";
import LoginLayout from "../views/Authentication/layout/LoginLayout.vue";
import AuthCoverLayout from "../views/Layout/AuthCoverLayout";
import AuthIllustrationLayout from "../views/Layout/AuthIllustrationLayout";
import Home from "../views/Home.vue";
import Register from "../views/Authentication/Register.vue";

// Dashboard pages
const Dashboard = () => import("../views/Dashboard/Dashboard.vue");
const Discover = () => import("../views/Dashboard/Discover.vue");
const Automotive = () => import("../views/Dashboard/Automotive.vue");
const Sales = () => import("../views/Dashboard/Sales.vue");
const SmartHome = () => import("../views/Dashboard/SmartHome.vue");
const VrDefault = () => import("../views/Dashboard/VrDefault.vue");
const VrInfo = () => import("../views/Dashboard/VrInfo.vue");
const Crm = () => import("../views/Dashboard/Crm.vue");
const GettingStarted = () => import("../views/Dashboard/GettingStarted.vue");

// Pages
const Pricing = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Pricing.vue");
const Rtl = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Rtl.vue");
const ProfileOverview = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Profile/ProfileOverview.vue"
  );
const Messages = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Profile/Messages.vue");
const Projects = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Profile/Projects.vue");
const Reports = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Users/Reports.vue");
const NewUser = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Users/NewUser.vue");
const Settings = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Settings.vue");
const Billing = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Billing.vue");
const Invoice = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Invoice.vue");
const Timeline = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Projects/Timeline.vue");
const Charts = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Charts.vue");
const Alerts = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Alerts.vue");
const Notifications = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Notifications.vue");
const SignUpBasic = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Basic.vue"
  );
const SignUpCover = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Cover.vue"
  );
const SignUpIllustration = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Illustration.vue"
  );

// Applications
const Kanban = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Kanban.vue");
const Wizard = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Wizard.vue");
const Datatables = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Datatables.vue");
const Calendar = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Calendar.vue");

// Ecommerce
const NewProduct = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/NewProduct.vue"
  );
const EditProduct = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/EditProduct.vue"
  );
const ProductPage = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/ProductPage.vue"
  );
const OrderList = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Orders/OrderList.vue"
  );
const OrderDetails = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Orders/OrderDetails.vue"
  );

const Login = () => import("@/views/Authentication/Login.vue");

Vue.use(VueRouter);

let vrPages = {
  path: "/",
  component: DashboardLayoutVr,
  name: "Vr",
  children: [
    {
      path: "/pages/dashboards/vr/vr-default",
      name: "VrDefault",
      component: VrDefault,
      meta: {
        groupName: "Dashboards",
      },
    },
    {
      path: "/pages/dashboards/vr/vr-info",
      name: "VrInfo",
      component: VrInfo,
      meta: {
        groupName: "Dashboards",
      },
    },
  ],
};

let profilePages = {
  path: "/",
  component: ProfileLayout,
  name: "Profile",
  children: [
    {
      path: "/pages/pages/profile/overview",
      name: "ProfileOverview",
      component: ProfileOverview,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/profile/messages",
      name: "Messages",
      component: Messages,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/profile/projects",
      name: "Project",
      component: Projects,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let userPages = {
  path: "/",
  component: DashboardLayout,
  name: "Users",
  children: [
    {
      path: "/pages/pages/users/reports",
      name: "Reports",
      component: Reports,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/users/new-user",
      name: "NewUser",
      component: NewUser,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let accountPages = {
  path: "/",
  component: DashboardLayout,
  name: "Account",
  children: [
    {
      path: "/pages/pages/account/settings",
      name: "Settings",
      component: Settings,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/account/billing",
      name: "Billing",
      component: Billing,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/account/invoice",
      name: "Invoice",
      component: Invoice,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let projectsPages = {
  path: "/",
  component: DashboardLayout,
  name: "Projects",
  children: [
    {
      path: "/pages/pages/projects/timeline",
      name: "Timeline",
      component: Timeline,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let applicationPages = {
  path: "/",
  component: DashboardLayout,
  name: "Application",
  children: [
    {
      path: "/pages/applications/kanban",
      name: "Kanban",
      component: Kanban,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/wizard",
      name: "Wizard",
      component: Wizard,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/datatables",
      name: "Datatables",
      component: Datatables,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/calendar",
      name: "Calendar",
      component: Calendar,
      meta: {
        groupName: "Applications",
      },
    },
  ],
};

let pricingPage = {
  path: "/",
  component: PageLayout,
  name: "Pricing Page",
  children: [
    {
      path: "/pages/pages/pricing-page",
      name: "Pricing",
      component: Pricing,
    },
  ],
};

let authBasicPages = {
  path: "/",
  component: AuthBasicLayout,
  name: "Authentication Basic",
  children: [
    {
      path: "/pages/authentication/signup/basic",
      name: "SignUpBasic",
      component: SignUpBasic,
    },
  ],
};

let authCoverPages = {
  path: "/",
  component: AuthCoverLayout,
  name: "Authentication Cover",
  children: [
    {
      path: "/pages/authentication/signup/cover",
      name: "SignUpCover",
      component: SignUpCover,
    },
  ],
};

let authIllustrationPages = {
  path: "/",
  component: AuthIllustrationLayout,
  name: "Authentication Illustration",
  children: [
    {
      path: "/pages/authentication/signup/illustration",
      name: "SignUpIllustration",
      component: SignUpIllustration,
    },
  ],
};

let login = {
  path: "/",
  component: LoginLayout,
  name: "Authentication Basic",
  children: [
    {
      path: "/login",
      name: "SignUpBasic",
      component: Login,
    },
  ],
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    redirect: "/pages/dashboards/analytics",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: () => import("../views/BoardAdmin.vue"),
      },
      {
        path: "/mod",
        name: "moderator",
        // lazy-loaded
        component: () => import("../views/BoardModerator.vue"),
      },
      {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: () => import("../views/BoardUser.vue"),
      },
      {
        path: "pages/dashboards/analytics",
        name: "Analytics",
        component: Dashboard,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "pages/dashboards/discover",
        name: "Discover",
        component: Discover,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/smart-home",
        name: "SmartHome",
        component: SmartHome,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/crm",
        name: "Crm",
        component: Crm,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/dashboards/automotive",
        name: "Automotive",
        component: Automotive,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/sales",
        name: "Sales",
        component: Sales,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/pages/rtl",
        name: "RTL",
        component: Rtl,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/charts",
        name: "Charts",
        component: Charts,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/alerts",
        name: "Alerts",
        component: Alerts,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/notifications",
        name: "Notifications",
        component: Notifications,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "getting-started",
        name: "Getting Started",
        component: GettingStarted,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/ecommerce/products/new-product",
        name: "NewProduct",
        component: NewProduct,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/products/edit-product",
        name: "EditProduct",
        component: EditProduct,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/products/product-page",
        name: "ProductPage",
        component: ProductPage,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/orders/list",
        name: "OrderList",
        component: OrderList,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/orders/details",
        name: "OrderDetails",
        component: OrderDetails,
        meta: {
          groupName: "Ecommerce",
        },
      },
    ],
  },
  pricingPage,
  profilePages,
  applicationPages,
  userPages,
  accountPages,
  projectsPages,
  vrPages,
  authBasicPages,
  authCoverPages,
  authIllustrationPages,
  login,
];

const router = new VueRouter({
  routes,
});

export default router;
