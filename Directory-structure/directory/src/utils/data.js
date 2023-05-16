export const structure = [
    {
      id:1,
      type:'folder',
      name:'root',
      nest:[
        {
          id:2,
          type:'file',
          name:'child with id 2',

        },
        {
          id:3,
          type:'folder',
          name:'child with id 3',

          nest:[
            {
              id:4,
              type:'folder',
              name:'child with id 4',

            }
          ]
        }
      ]
    },
    {
      id:23,
      type:'file',
      name:'root friend'
    },
  
  ]