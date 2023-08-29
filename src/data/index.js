export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/originals/cf/d0/e6/cfd0e65ab7aafae09ad428810da84609.jpg',
      name: 'Jake o cachorro',
      role: 'Aventureiro'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir um novo episódio da nova tempoderada de Adventure Time.'
      },
      {
        type: 'link',
        content: '👉 Marshall Lee'
      },
      {
        type: 'tag',
        content: '#NovaAventura'
      },
      {
        type: 'tag',
        content: '#partiu'
      }
    ],
    publishedAt: new Date('2023-08-08 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pm1.aminoapps.com/7694/f618481528d40b62fbd6ca2a1b1e30f89ba24db4r1-863-912v2_uhq.jpg',
      name: 'Princesa Jujuba',
      role: 'Realeza'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir um novo episódio da nova tempoderada de Adventure Time.'
      },
      {
        type: 'link',
        content: '👉👉 Rei Gelado'
      },
      {
        type: 'tag',
        content: '#NovaAventura'
      },
      {
        type: 'tag',
        content: '#Partiu'
      },
      {
        type: 'tag',
        content: '#Reino'
      }
    ],
    publishedAt: new Date('2023-08-08 20:00:00')
  }
]

/*
                <Comment name='BMO' src='https://pm1.aminoapps.com/6592/3575d361024e66e8ee382f8ee6bb46208452d122_00.jpg' />
                <Comment name='Princesa Jujuba' src='https://pm1.aminoapps.com/7694/f618481528d40b62fbd6ca2a1b1e30f89ba24db4r1-863-912v2_uhq.jpg' />
                <Comment name='Rei Gelado' src='https://cdn.costumewall.com/wp-content/uploads/2016/10/ice-king-costume.jpg' />
*/
export const commentsInit = [
  {
    id: 1,
  },
  {
    id: 2,
  }
]