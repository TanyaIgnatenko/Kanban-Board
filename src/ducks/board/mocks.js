let id = 0;

export const mockBoard = {
  id: (id++).toString(),
  name: 'Моя доска',
  background: {
    type: 'img',
    url:
      'https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100',
  },
  lists: [
    {
      id: (id++).toString(),
      name: 'План на месяц',
      cards: [
        {
          id: (id++).toString(),
          content: 'Пройти курс по React',
        },
        {
          id: (id++).toString(),
          content: 'Отметить день рождения',
        },
        {
          id: (id++).toString(),
          content:
            'Записаться на курсы английского, чтобы уехать жить в Лондон',
        },
        {
          id: (id++).toString(),
          content: 'Сделать бэкенд своего сайта на node.js',
        },
        {
          id: (id++).toString(),
          content: 'Собрать портфолио',
        },
        {
          id: (id++).toString(),
          content: 'Написать первую статью в блог',
        },
        {
          id: (id++).toString(),
          content:
            'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.',
        },
        {
          id: (id++).toString(),
          content: 'Нет, я серьезный человек, иду в мотошколу. Записываюсь!',
        },
        {
          id: (id++).toString(),
          content: 'Выспаться',
        },
        {
          id: (id++).toString(),
          content: 'Посмотреть игру престолов',
        },
        {
          id: (id++).toString(),
          content: 'Научиться рисовать',
        },
        {
          id: (id++).toString(),
          content: 'Сделать уборку',
        },
        {
          id: (id++).toString(),
          content: 'Записаться в тренажерный зал',
        },
        {
          id: (id++).toString(),
          content: 'Купить обогреватель',
        },
      ],
    },
    {
      id: (id++).toString(),
      name: 'План на неделю',
      cards: [
        {
          id: (id++).toString(),
          content: 'Написать To-Do app',
        },
        {
          id: (id++).toString(),
          content: 'Отложить 2000 рублей',
        },
        {
          id: (id++).toString(),
          content: 'Нарисовать мотивационный плакат «Магии нет»',
        },
      ],
    },
    {
      id: (id++).toString(),
      name: 'План на день',
      cards: [
        {
          id: (id++).toString(),
          content: 'Записаться на курс по React',
        },
        {
          id: (id++).toString(),
          content: 'Забронировать тир на субботу',
        },
        {
          id: (id++).toString(),
          content: 'Накидать тем для статей в блог',
        },
      ],
    },
    {
      id: (id++).toString(),
      name: 'Итоги',
      cards: [],
    },
  ],
};
