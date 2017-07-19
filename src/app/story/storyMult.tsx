import * as React from 'react';
import { stories } from './@/stories';
import {  Mult, IMultProps } from 'ui/mult';

const data: IMultProps  = {
   config: [
      {
         type: 'autocomplete',
         field: 'name',
         placeholder: 'Автор',
         required: true,
         title: 'Автор',
         src: '{server}?method=author&controller=suggest&query=',
         width: '10em',
      },
   ],

   value : [
      {
         name: 'Шпет Г.Г.',
         fname: 'Г.Г. Шпет',
         edited: '2017-03-15 17:15:43',
         created: '2017-03-15 17:15:43',
         alias: 0,
         main: 0,
         public: 1,
         img1:  0,
         about: '',
         id: 112,
      },
      {
         name:  'ывапывап',
         fname: null,
         edited:  '2017-05-25 16:17:46',
         created:  '2017-05-25 16:17:46',
         alias: null,
         main: 0,
         public: 1,
         img1: '',
         about:  '',
         id: 1681,
      },
   ],
   name: 'text_author_rel',
   type: 'mult',
};
stories.push({
    title: 'Mult',
    component: <Mult {...data} />,
});
