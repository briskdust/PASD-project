export default {
    name: 'delivery',
    type: 'document',
    title: 'Delivery',
    fields: [
        {
            name: 'expected_deliver_datetime',
            type: 'datetime',
            title: 'Expected Delivery Date'
        },
        {
            name: 'actual_deliver_datetime',
            type: 'datetime',
            title: 'Actual Delivery Date'
        },
        {
            name: 'order_id',
            type: 'number',
            title: 'Order ID'
        },
        {
            name: 'cost_in_cents',
            type: 'number',
            title: 'Cost in Cents'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status'
        },
        {
            name: 'id',
            type: 'number',
            title: 'ID'
        }
    ]
}