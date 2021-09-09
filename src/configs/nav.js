import {
    UserOutlined,
    LaptopOutlined,
} from '@ant-design/icons';

const nav = [
    {
        key: 1,
        _tag: 'NavItem',
        icon: LaptopOutlined,
        name: 'Home',
        to: '/',
        badge: {
            text: '',
            color: '',
        },
    },
    {
        key: 2,
        _tag: 'NavItem',
        icon: UserOutlined,
        name: 'Users',
        to: '',
        badge: {
            text: '',
            class: '',
        },
        children: [
            {
                key: 3,
                _tag: 'NavItem',
                name: 'List Users',
                to: '/users',
            },
            {
                key: 4,
                _tag: 'NavItem',
                name: 'Add User',
                to: '/users/create',
            },
        ]
    },
];

export default nav;