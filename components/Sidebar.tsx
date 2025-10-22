
import React from 'react';
import type { Topic } from '../types';

interface SidebarProps {
  topics: Topic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, selectedTopicId, onSelectTopic }) => {
  return (
    <aside className="w-64 bg-secondary border-r border-border-color p-4 overflow-y-auto hidden md:block flex-shrink-0">
      <nav>
        <h2 className="text-lg font-semibold mb-4 text-text-primary">Topics</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => onSelectTopic(topic.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  selectedTopicId === topic.id
                    ? 'bg-accent text-primary font-semibold'
                    : 'text-text-secondary hover:bg-gray-700/50 hover:text-text-primary'
                }`}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
