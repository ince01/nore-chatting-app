import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ChatPage from 'containers/ChatPage/Loadable';

const indexRoutes = [
  { path: '/chat', component: ChatPage, requireLogin: true },
  { path: '/register', component: RegisterPage, requireLogin: false },
  { path: '/', component: HomePage, requireLogin: false },
  { path: '', component: NotFoundPage, requireLogin: false }
];

export default indexRoutes;