
import React, { useState, useCallback } from 'react';
import { explainCode } from '../services/geminiService';

interface CodeBlockProps {
  code: string;
}

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-5 h-5'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 4.625v2.625a2.625 2.625 0 11-5.25 0v-2.625m0 0h5.25" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-5 h-5'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-5 h-5'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.694-2.694L11.25 18l1.938-.648a3.375 3.375 0 002.694-2.694L16.25 13.5l.648 1.938a3.375 3.375 0 002.694 2.694L21.75 18l-1.938.648a3.375 3.375 0 00-2.694 2.694z" />
    </svg>
);


export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }, [code]);

    const handleExplain = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setExplanation(null);
        try {
            const result = await explainCode(code);
            setExplanation(result);
        } catch (err) {
            setError('Failed to get explanation from AI. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [code]);
    
    return (
        <div className="font-mono text-sm">
            <div className="bg-primary rounded-t-lg p-2 flex justify-end items-center space-x-2 border-x border-t border-border-color">
                <button
                    onClick={handleExplain}
                    disabled={isLoading}
                    className="flex items-center space-x-1 px-2 py-1 text-xs rounded-md bg-accent/20 text-accent hover:bg-accent/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <SparklesIcon className="w-4 h-4" />
                    <span>{isLoading ? 'Thinking...' : 'Explain with AI'}</span>
                </button>
                <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 px-2 py-1 text-xs rounded-md bg-gray-600/50 text-text-secondary hover:bg-gray-600 transition-colors"
                >
                    {isCopied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <CopyIcon className="w-4 h-4" />}
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-b-lg border border-border-color overflow-x-auto">
                <pre><code className="text-white">{code}</code></pre>
            </div>
             {isLoading && (
                <div className="mt-4 p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg text-text-primary">
                    <div className="flex items-center space-x-2">
                         <svg className="animate-spin h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Generating explanation...</span>
                    </div>
                </div>
            )}
            {error && <div className="mt-4 p-4 border border-red-500/30 bg-red-500/10 rounded-lg text-red-400">{error}</div>}
            {explanation && (
                <div className="mt-4 p-4 border border-border-color bg-secondary rounded-lg">
                    <h4 className="flex items-center text-md font-semibold text-accent mb-2">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        AI Explanation
                    </h4>
                    <div className="text-text-primary whitespace-pre-wrap prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: explanation }}></div>
                </div>
            )}
        </div>
    );
};
