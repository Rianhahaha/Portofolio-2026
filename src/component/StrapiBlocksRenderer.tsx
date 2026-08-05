import React from 'react';
import Image from 'next/image';

// TypeScript Declarations for Strapi/Lexical Rich Text Schema
interface TextNode {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

interface LinkNode {
    type: 'link';
    url: string;
    children: TextNode[];
}

type InlineNode = TextNode | LinkNode;

interface BaseBlockNode {
    type: string;
    format?: 'left' | 'center' | 'right' | 'justify' | '';
    indent?: number;
    children?: any[];
}

interface HeadingNode extends BaseBlockNode {
    type: 'heading';
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: InlineNode[];
}

interface ParagraphNode extends BaseBlockNode {
    type: 'paragraph';
    children: InlineNode[];
}

interface QuoteNode extends BaseBlockNode {
    type: 'quote';
    children: InlineNode[];
}

interface ListNode extends BaseBlockNode {
    type: 'list';
    tag: 'ol' | 'ul';
    children: ListItemNode[];
}

interface ListItemNode extends BaseBlockNode {
    type: 'list-item';
    children: InlineNode[];
}

interface UploadNode {
    type: 'upload';
    id: string;
    value: {
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
    };
}

type BlockNode = HeadingNode | ParagraphNode | QuoteNode | ListNode | UploadNode;

interface RendererProps {
    content: BlockNode[];
}

// Map text alignment modifier properties to Tailwind utility classes
const getAlignmentClass = (format?: string) => {
    switch (format) {
        case 'center': return 'text-center';
        case 'right': return 'text-right';
        case 'justify': return 'text-justify';
        default: return 'text-left';
    }
};

// Internal component helper to parse leaf text nodes with inline styles
const RenderInlineText = ({ nodes }: { nodes: InlineNode[] }) => {
    return (
        <>
            {nodes.map((node, idx) => {
                if (node.type === 'link') {
                    return (
                        <a key={idx} href={node.url} className="text-cyan-500 hover:underline transition-all" target="_blank" rel="noopener noreferrer">
                            <RenderInlineText nodes={node.children} />
                        </a>
                    );
                }

                let content: React.ReactNode = node.text;

                if (node.bold) content = <strong className="font-bold text-white">{content}</strong>;
                if (node.italic) content = <em className="italic">{content}</em>;
                if (node.underline) content = <u className="underline">{content}</u>;
                if (node.strikethrough) content = <span className="line-through">{content}</span>;
                if (node.code) content = <code className="bg-zinc-800 text-red-400 px-1.5 py-0.5 rounded text-sm font-mono">{content}</code>;

                return <React.Fragment key={idx}>{content}</React.Fragment>;
            })}
        </>
    );
};

export default function StrapiBlocksRenderer({ content }: RendererProps) {
    if (!content || !Array.isArray(content)) {
        console.error("Invalid rich text payload layout structure provided.");
        return null;
    }

    return (
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 font-sans leading-relaxed">
            {content.map((block, index) => {
                const alignClass = getAlignmentClass(block.format);

                switch (block.type) {
                    case 'heading': {
                        const HeadingTag = block.tag || 'h2';
                        const headingSizes = {
                            h1: 'text-4xl font-black text-white mt-8 mb-4 tracking-tight',
                            h2: 'text-2xl font-bold text-white mt-6 mb-3 tracking-tight',
                            h3: 'text-xl font-semibold text-white mt-4 mb-2',
                            h4: 'text-lg font-semibold text-white',
                            h5: 'text-base font-semibold text-white',
                            h6: 'text-sm font-semibold text-zinc-400 uppercase tracking-wider',
                        };

                        return (
                            <HeadingTag key={index} className={`${headingSizes[HeadingTag]} ${alignClass}`}>
                                <RenderInlineText nodes={block.children} />
                            </HeadingTag>
                        );
                    }

                    case 'paragraph':
                        return (
                            <p key={index} className={`${alignClass} text-zinc-300 text-base md:text-lg min-h-[1.5rem]`}>
                                <RenderInlineText nodes={block.children} />
                            </p>
                        );

                    case 'quote':
                        return (
                            <blockquote key={index} className={`${alignClass} border-l-4 border-cyan-500 pl-4 italic text-zinc-400 bg-zinc-900/50 py-3 pr-4 rounded-r`}>
                                <p className="m-0">
                                    <RenderInlineText nodes={block.children} />
                                </p>
                            </blockquote>
                        );

                    case 'list': {
                        const ListTag = block.tag || 'ul';
                        const listClass = ListTag === 'ol' ? 'list-decimal pl-6 space-y-2' : 'list-disc pl-6 space-y-2';

                        return (
                            <ListTag key={index} className={`${listClass} text-zinc-300`}>
                                {block.children?.map((item, itemIdx) => (
                                    <li key={itemIdx} className={getAlignmentClass(item.format)}>
                                        <RenderInlineText nodes={item.children} />
                                    </li>
                                ))}
                            </ListTag>
                        );
                    }

                    case 'upload': {
                        const media = block.value;
                        if (!media || !media.url) return null;

                        return (
                            <div key={index} className="my-6 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl">
                                <Image
                                    src={media.url}
                                    alt={media.alternativeText || 'Artwork internal media display'}
                                    width={media.width || 800}
                                    height={media.height || 600}
                                    className="rounded-lg max-h-[70svh] w-auto object-contain transition-all hover:scale-[1.01]"
                                    priority={index < 3} // Optimization rule for initial viewport assets
                                />
                                {media.alternativeText && (
                                    <span className="mt-2 text-xs text-zinc-500 italic font-mono">{media.alternativeText}</span>
                                )}
                            </div>
                        );
                    }

                    default:
                        // Fallback renderer for unhandled block types to maintain stability
                        console.warn(`Encountered unsupported block token type: "${block.type}"`);
                        return null;
                }
            })}
        </div>
    );
}