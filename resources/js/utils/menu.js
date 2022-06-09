import { adminRoot } from "./constants";

const data = [
  {
    id: "home",
    label: "Home",
    to: "/",
    protected: true,
    public: true,
    class:"ms-auto",
  },
  {
    id: "about",
    label: "About",
    to: "about",
    protected: true,
    public: true,
  },
  {
    id:'features',
    label:'Features',
    to:'features',
    protected:true,
    public:true,
  },
  {
    id:'contact',
    label:'Contact Us',
    to:'contact',
    protected:true,
    public:true,
  },
  {
    id: "userManagement",
    label: "User Management",
    to: "#",
    protected: true,
    public: false,
    subs: [
      {
        id: "deep-drop-down",
        label: "User",
        to: "#",
        protected: true,
        public: true,
        subs: [
            {
                id:'users',
                label:'Users',
                to:'/users',
                protected:true,
                public:false,
            },
          {
            id: "roles",
            label: "Roles",
            to: "/roles",
            protected: true,
            public: false,
          },
          {
            id: "permissions",
            label: "Permissions",
            to: "/permissions",
            protected: true,
            public: false,
          },
          
        ],
      },
    ],
  },
  {
    id: "categoryandtracks",
    label: "Category & Tracks",
    to: "#",
    protected: true,
    public: false,
    subs: [
      {
        id: "deep-drop-down",
        label: "Category & Tracks",
        to: "#",
        protected: true,
        public: true,
        subs: [
            {
                id: "category",
                label: "Category",
                to: "/category",
                protected: true,
                public: false,
              },
              {
                id: "tracktypes",
                label: "Track Type",
                to: "/tracktypes",
                protected: true,
                public: false,
              },
          
        ],
      },
    ],
  },
  {
      id:'sign-in',
      label:'Sign In',
      to:'/login',
      protected:false,
      public:true,
      class:'ms-auto login-menu',
  },
  {
      id:'sign-up',
      label:'Sign Up',
      to:'/register',
      protected:false,
      public:true,
      class:'get-started-btn',
  },
  {
    id: 'notification-bell',
    label: '',
    to: 'notification',
    protected: true,
    public: false,
    class: 'ms-auto bell-icon px-1',
    ancherClass: 'bx bxs-bell px-2',
  },
  {
    id: 'logout',
    label: 'Logout',
    to: '#',
    protected: true,
    public: false,
    class: 'logout-acount',
  }

  
];
export default data;
