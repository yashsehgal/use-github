import React, { forwardRef, useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  content: string;
  language?: string;
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  (
    { className, children, content, language = 'typescript', ...props },
    ref,
  ) => {
    const [highlightedCode, setHighlightedCode] = useState<string>('');

    useEffect(() => {
      const highlightCode = async () => {
        const result = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeHighlight, { detect: true, ignoreMissing: true } as any)
          .use(rehypeStringify)
          .process(`\`\`\`${language}\n${content}\n\`\`\``);

        setHighlightedCode(String(result));
      };

      highlightCode();
    }, [content, language]);

    return (
      <pre
        ref={ref}
        className={`bg-gray-900 text-[#c4c9cc] font-mono rounded-xl p-2 overflow-x-auto ${className}`}
        {...props}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';

// Add this to your global styles or as a style tag in your component
const codeBlockStyles = `
  .hljs-keyword { color: #569cd6; }
  .hljs-built_in { color: #4ec9b0; }
  .hljs-type { color: #4ec9b0; }
  .hljs-literal { color: #569cd6; }
  .hljs-number { color: #b5cea8; }
  .hljs-regexp { color: #d16969; }
  .hljs-string { color: #ce9178; }
  .hljs-subst { color: #c4c9cc; }
  .hljs-symbol { color: #d7ba7d; }
  .hljs-class { color: #4ec9b0; }
  .hljs-function { color: #dcdcaa; }
  .hljs-title { color: #dcdcaa; }
  .hljs-params { color: #c4c9cc; }
  .hljs-comment { color: #6a9955; }
  .hljs-doctag { color: #608b4e; }
  .hljs-meta { color: #569cd6; }
  .hljs-meta-keyword { color: #569cd6; }
  .hljs-meta-string { color: #ce9178; }
`;
