const questions = [
  [
    'ひ',
    ['ya', 'hi', 'o', 'ku'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'あ',
    ['a', 'su', 'nu', 'ke'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ろ',
    ['su', 'mo', 'na', 'ro'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'れ',
    ['tsu', 're', 'ro', 'ne'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'る',
    ['nu', 'mi', 'ru', 're'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'に',
    ['ni', 'mu', 'ya', 'shi'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'め',
    ['to', 'chi', 'ri', 'me'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'ゆ',
    ['yo', 'yu', 'u', 'mi'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'も',
    ['ko', 'hi', 'shi', 'mo'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'へ',
    ['he', 'na', 'yo', 'nu'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'て',
    ['n', 'o', 'te', 'ha'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'わ',
    ['he', 'hi', 'ro', 'wa'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'ま',
    ['ma', 'su', 're', 'ki'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'い',
    ['mi', 'u', 'i', 'ru'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'お',
    ['hi', 'o', 'no', 'so'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ね',
    ['hi', 'to', 'ko', 'ne'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'え',
    ['e', 'mo', 'hi', 'no'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ん',
    ['i', 'n', 'ta', 'ki'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ち',
    ['chi', 'ho', 'shi', 'he'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'か',
    ['ni', 'su', 'i', 'ka'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'の',
    ['wa', 'shi', 'no', 'mi'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'せ',
    ['se', 'wa', 'ko', 'chi'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'す',
    ['ru', 'yu', 'su', 'mi'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'こ',
    ['so', 'ko', 'mo', 'ya'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'な',
    ['tsu', 'mo', 'wa', 'na'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'さ',
    ['e', 'mo', 'sa', 'ha'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'き',
    ['ki', 'wa', 'shi', 'su'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ほ',
    ['ke', 'ho', 'ha', 'i'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'た',
    ['i', 'ro', 'he', 'ta'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'よ',
    ['ya', 'shi', 'yo', 'ri'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'と',
    ['to', 'ha', 'o', 'su'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'は',
    ['ku', 'fu', 'na', 'ha'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'む',
    ['ra', 'mu', 'ha', 'so'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ら',
    ['fu', 'ra', 'tsu', 'me'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'つ',
    ['to', 'ku', 'tsu', 'so'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'ふ',
    ['fu', 'ne', 'ri', 'u'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'や',
    ['ka', 'shi', 'n', 'ya'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'み',
    ['tsu', 'he', 'sa', 'mi'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'う',
    ['ma', 'te', 'u', 'ro'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'く',
    ['no', 'ku', 'tsu', 'ma'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'そ',
    ['so', 'wa', 'fu', 'no'],
    [
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
  [
    'け',
    ['ri', 'e', 'te', 'ke'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'ぬ',
    ['hi', 'i', 'ha', 'nu'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
    ]
  ],
  [
    'り',
    ['yu', 'mu', 'ri', 'ru'],
    [
      'this.scoreWrong++',
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
    ]
  ],
  [
    'し',
    ['hi', 'shi', 'wa', 'yu'],
    [
      'this.scoreWrong++',
      'this.scoreRight++',
      'this.scoreWrong++',
      'this.scoreWrong++',
    ]
  ],
]