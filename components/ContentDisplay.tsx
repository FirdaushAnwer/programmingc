
import React from 'react';
import type { Topic } from '../types';
import { CodeBlock } from './CodeBlock';

interface ContentDisplayProps {
  topic: Topic;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ topic }) => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-text-primary mb-2 border-b-2 border-accent pb-2">{topic.title}</h1>
        <div className="text-text-secondary text-lg mt-4">{topic.description}</div>
      </section>

      {topic.subSections.map((subsection, index) => (
        <section key={index} className="bg-secondary border border-border-color rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-accent mb-4">{subsection.title}</h2>
          <div className="text-text-primary prose max-w-none mb-6">{subsection.explanation}</div>
          <CodeBlock code={subsection.code} />
        </section>
      ))}
    </div>
  );
};
