import { forwardRef, MouseEvent, useState } from 'react';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    { className, children, content, onMouseEnter, onMouseLeave, ...props },
    ref,
  ) => {
    const [showCopy, setShowCopy] = useState<boolean>(false);

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
      setShowCopy(true);
      onMouseEnter && onMouseEnter(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      setShowCopy(false);
      onMouseLeave && onMouseLeave(e);
    };
    return (
      <div
        ref={ref}
        className="p-4 rounded-lg border border-neutral-300 bg-neutral-50 overflow-x-scroll relative font-mono text-neutral-500  whitespace-pre-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}>
        {content}
      </div>
    );
  },
);
