type TextBlock = {
  type: 'text';
  content: string;
  language?: 'en' | 'bn';
};

type CodeBlock = {
  type: 'code';
  content: string;
  language: 'typescript' | 'javascript' | 'python';
  metadata?: {
    linesHighlighted?: number[];
    isStrict?: boolean;
  };
};

type ImageBlock = {
  type: 'image';
  src: string;
  alt?: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

type ContentBlock = TextBlock | CodeBlock | ImageBlock;

const blocks: ContentBlock[] = [
  {
    type: 'text',
    content: 'Welcome to the TypeScript guide.',
    language: 'en',
  },
  {
    type: 'code',
    content: 'const x: number = 42;',
    language: 'typescript',
    metadata: {
      linesHighlighted: [1],
      isStrict: true,
    },
  },
  {
    type: 'image',
    src: 'https://example.com/banner.png',
    alt: 'Banner image',
    dimensions: {
      width: 800,
      height: 200,
    },
  },
];

function handleFirstTwo([first, second]: ContentBlock[]) {
  console.log(first.type, second.type);
}
handleFirstTwo(blocks);

function handleRest([first, ...rest]: ContentBlock[]) {
  console.log(`First: ${first.type}`);
  console.log(`Rest: ${rest.map(b => b.type)}`);
}
handleRest(blocks);

function handleTuple([textBlock, codeBlock, imageBlock]: [
  TextBlock,
  CodeBlock,
  ImageBlock
]) {
  console.log(textBlock.content);
  console.log(codeBlock.language);
  console.log(imageBlock.src);
}
const tupleBlock: [TextBlock, CodeBlock, ImageBlock] = [
  {
    type: 'text',
    content: 'Welcome to the TypeScript guide.',
    language: 'en',
  },
  {
    type: 'code',
    content: 'const x: number = 42;',
    language: 'typescript',
    metadata: {
      linesHighlighted: [1],
      isStrict: true,
    },
  },
  {
    type: 'image',
    src: 'https://example.com/banner.png',
    alt: 'Banner image',
    dimensions: {
      width: 800,
      height: 200,
    },
  },
];
handleTuple(tupleBlock);
