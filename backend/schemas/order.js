export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
    },
    {
      name: 'is_breakable',
      type: 'boolean',
      title: 'Is Breakable',
    },
    {
      name: 'is_perishable',
      type: 'boolean',
      title: 'Is Perishable',
    },
    {
      name: 'x_in_mm',
      type: 'number',
      title: 'Length in mm',
    },
    {
      name: 'y_in_mm',
      type: 'number',
      title: 'Width in mm',
    },
    {
      name: 'z_in_mm',
      type: 'number',
      title: 'Height in mm',
    },
    {
      name: 'sender_info',
      type: 'object',
      title: 'Sender Info',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'street_and_number',
          type: 'string',
          title: 'Street and Number',
        },
        {
          name: 'zipcode',
          type: 'string',
          title: 'Zipcode',
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
        },
        {
          name: 'country',
          type: 'string',
          title: 'Country',
        },
      ],
    },
    {
      name: 'receiver_info',
      type: 'object',
      title: 'Receiver Info',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'street_and_number',
          type: 'string',
          title: 'Street and Number',
        },
        {
          name: 'zipcode',
          type: 'string',
          title: 'Zipcode',
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
        },
        {
          name: 'country',
          type: 'string',
          title: 'Country',
        },
      ],
    },
    {
      name: 'send_date',
      type: 'datetime',
      title: 'Send Date',
    },
  ],
}
