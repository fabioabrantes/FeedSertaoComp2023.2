export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabioabrantes.png',
      name: 'Fábio Abrantes',
      role: 'professor de ADS'
    },
    description: [
      { type: 'paragraph', text: 'Fala galera' },
      { type: 'paragraph', text: 'Acabei de realizar o minicurso de React no evento SertaoComp.Vocês gostaram?' },
      { type: 'link', texts: ['typescript','React', 'sertaocomp'], links:[
        "https://www.typescript.org/", "https://www.React.org/","https://www.even3.com.br/iv-sertaocomp/"
      ] },
    ],
    publishedAt: new Date('2023-05-03 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fabioabrantes.png',
      name: 'Fábio Abrantes',
      role: 'professor de ADS'
    },
    description: [
      { type: 'paragraph', text: 'Fala galera' },
      { type: 'paragraph', text: 'Acabei de realizar o minicurso de React no evento SertaoComp.Vocês gostaram?' },
      { type: 'link', texts: ['typescript','React', 'sertaocomp'], links:[
        "https://www.typescriptlang.org/", "https://react.dev/","https://www.even3.com.br/iv-sertaocomp/"
      ]  },
    ],
    publishedAt: new Date('2023-05-04 16:00:00'),
  },
];