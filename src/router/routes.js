import Manage from '../components/Manage.vue'
import Table from '../components/Table.vue'
import Welcome from '../components/Welcome.vue'

const routes = [
    {
        name: 'Welcome',
        path: '/welcome',
        component: Welcome
    },
    {
        name: 'Manage',
        path: '/manage',
        component: Manage
    },
    {
        name: 'Table',
        path: '/table',
        component: Table
    }];
export default routes

