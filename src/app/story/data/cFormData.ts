const cFormData = {
    config : [
      [
         {
            field: 'name',
            type: 'input',
            placeholder: 'name',
            required: true,
            label: 'name',
            flex: '1',
         },
         {
            field: 'public',
            type: 'check',
            label: 'public',
         },
      ],
      [
         {
            field: 'text',
            type: 'text',
            placeholder: 'text',
            label: 'text',
            flex: 1,
         },
      ],
      [
         {
            field: 'description',
            type: 'text',
            placeholder: 'description',
            label: 'description',
            flex: 1,
         },
      ],
   ],
    data : {
      id: 10,
      name: 'Тело и дух',
      title: 'Тело и дух',
      keyword: '',
      alias: 'faith',
      created: '2017-03-15',
      edited: '2017-03-15',
      description: '',
      priority: 1,
      text: 'text example',
      tags: null,
      public: 1,
      counter: 39,
   },
};

export { cFormData };
