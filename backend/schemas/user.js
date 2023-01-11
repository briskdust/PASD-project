export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'user_type',
            type: 'string',
            title: 'Type of User'
        },
        {
            name: 'username',
            type: 'string',
            title: 'Username'
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email Address'
        }
    ]
}