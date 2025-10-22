
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TOPICS } from './constants/topics';
import type { Topic } from './types';

const App: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(TOPICS[0].id);

  const currentTopic = useMemo((): Topic | undefined => {
    return TOPICS.find(topic => topic.id === selectedTopicId);
  }, [selectedTopicId]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar topics={TOPICS} selectedTopicId={selectedTopicId} onSelectTopic={setSelectedTopicId} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {currentTopic ? <ContentDisplay topic={currentTopic} /> : <p>Select a topic</p>}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
