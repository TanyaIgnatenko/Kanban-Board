import _ from 'lodash';

export function fetchBoardRequest(id) {
  return mockBoard;
}

export function addCardRequest(listId, content) {
  const card = {
    id: _.uniqueId('card'),
    content,
  };
  return { listId, card };
}

export function addListRequest(boardId, content) {
  const list = {
    id: _.uniqueId('list'),
    name: content,
    cards: [],
  };
  return { boardId, list };
}

const mockBoard = {
  id: 0,
  name: 'Моя доска',
  background: {
    type: 'img',
    url:
      'https://images.unsplash.com/photo-1558016183-68d5d7b8851b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  lists: [
    {
      id: 0,
      name: 'План на месяц',
      cards: [
        {
          id: 0,
          content: 'Пройти курс по React',
        },
        {
          id: 1,
          content: 'Отметить день рождения',
        },
        {
          id: 2,
          content:
            'Записаться на курсы английского, чтобы уехать жить в Лондон',
        },
        {
          id: 3,
          content: 'Сделать бэкенд своего сайта на node.js',
        },
        {
          id: 4,
          content: 'Собрать портфолио',
        },
        {
          id: 5,
          content: 'Написать первую статью в блог',
        },
        {
          id: 6,
          content:
            'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.',
        },
        {
          id: 7,
          content: 'Нет, я серьезный человек, иду в мотошколу. Записываюсь!',
        },
        {
          id: 8,
          content: 'Выспаться',
        },
        {
          id: 15,
          content: 'Посмотреть игру престолов',
        },
        {
          id: 16,
          content: 'Научиться рисовать',
        },
        {
          id: 17,
          content: 'Сделать уборку',
        },
        {
          id: 18,
          content: 'Записаться в тренажерный зал',
        },
        {
          id: 19,
          content: 'Купить обогреватель',
        },
      ],
    },
    {
      id: 1,
      name: 'План на день',
      cards: [
        {
          id: 9,
          content: 'Записать на курс по React',
        },
        {
          id: 10,
          content: 'Забронировать тир на субботу',
        },
        {
          id: 11,
          content: 'Накидать тем для статей в блог',
        },
      ],
    },
    // {
    //   id: 2,
    //   name: 'План на день',
    //   cards: [
    //     {
    //       id: 12,
    //       content: 'Записать на курс по React',
    //     },
    //     {
    //       id: 13,
    //       content: 'Забронировать тир на субботу',
    //     },
    //     {
    //       id: 14,
    //       content: 'Накидать тем для статей в блог',
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   name: 'Итоги',
    //   cards: [],
    // },
    // {
    //   id: 4,
    //   name: 'Итоги',
    //   cards: [],
    // },
    // {
    //   id: 5,
    //   name: 'Итоги',
    //   cards: [],
    // },
  ],
};
