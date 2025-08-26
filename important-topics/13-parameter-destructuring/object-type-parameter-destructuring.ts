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

const textBlock: TextBlock = {
  type: 'text',
  content: 'Welcome to the TypeScript guide.',
  language: 'en',
};

function handleTextBlock({ type, content, language }: TextBlock) {
  console.log(`Type: ${type}, Content: ${content}, Lang: ${language}`);
}
handleTextBlock(textBlock);
