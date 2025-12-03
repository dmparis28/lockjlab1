// Filename: app/portal/messages/page.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from '../../components/Icon';

const teamMembers = [
  { id: 1, name: 'Sarah Chen', role: 'Project Manager', avatar: 'SC', online: true },
  { id: 2, name: 'Mike Johnson', role: 'Lead Developer', avatar: 'MJ', online: true },
  { id: 3, name: 'Emily Davis', role: 'UI/UX Designer', avatar: 'ED', online: false },
];

const initialMessages = [
  { id: 1, from: 'Sarah Chen', avatar: 'SC', message: 'Hi! Welcome to your project portal. Feel free to reach out if you have any questions.', time: '2024-11-28 09:00', isTeam: true },
  { id: 2, from: 'You', message: 'Thanks Sarah! I\'m excited to see the progress on the project.', time: '2024-11-28 09:15', isTeam: false },
  { id: 3, from: 'Sarah Chen', avatar: 'SC', message: 'Great! We\'ve made good progress on the frontend. Emily will be sharing some design updates shortly.', time: '2024-11-28 09:20', isTeam: true },
  { id: 4, from: 'Emily Davis', avatar: 'ED', message: 'Hi! I\'ve uploaded the latest wireframes to the Files section. Let me know if you have any feedback on the dashboard layout.', time: '2024-11-28 14:30', isTeam: true },
  { id: 5, from: 'You', message: 'Just took a look - the dashboard looks fantastic! One small request: can we add a dark mode toggle?', time: '2024-11-28 15:00', isTeam: false },
  { id: 6, from: 'Emily Davis', avatar: 'ED', message: 'Absolutely! Great suggestion. I\'ll add that to the next design iteration.', time: '2024-11-28 15:10', isTeam: true },
  { id: 7, from: 'Mike Johnson', avatar: 'MJ', message: 'Quick update: The API integration is about 80% complete. We\'re on track for the beta release next week.', time: '2024-11-29 10:00', isTeam: true },
  { id: 8, from: 'You', message: 'That\'s great news! Is there anything you need from my end for the beta testing?', time: '2024-11-29 10:30', isTeam: false },
  { id: 9, from: 'Sarah Chen', avatar: 'SC', message: 'We\'ll send over a testing checklist by Friday. For now, please ensure your test users are ready to participate.', time: '2024-11-29 11:00', isTeam: true },
];

export default function PortalMessages() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() && attachments.length === 0) return;

    const message = {
      id: Date.now(),
      from: 'You',
      message: newMessage,
      time: new Date().toISOString().slice(0, 16).replace('T', ' '),
      isTeam: false,
      attachments: attachments.map(a => a.name),
    };

    setMessages([...messages, message]);
    setNewMessage('');
    setAttachments([]);

    // Simulate team response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        from: 'Sarah Chen',
        avatar: 'SC',
        message: 'Thanks for the update! I\'ll review this and get back to you shortly.',
        time: new Date().toISOString().slice(0, 16).replace('T', ' '),
        isTeam: true,
      }]);
    }, 2000);
  };

  const handleFileAttach = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const formatTime = (timeStr) => {
    const date = new Date(timeStr.replace(' ', 'T'));
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Messages Area */}
      <div className="flex-1 flex flex-col bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Project Discussion</h2>
          <p className="text-gray-400 text-sm">MediBook Platform</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => {
            const showDate = index === 0 || 
              messages[index - 1].time.split(' ')[0] !== msg.time.split(' ')[0];
            
            return (
              <div key={msg.id}>
                {showDate && (
                  <div className="text-center my-4">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-gray-500 text-xs">
                      {new Date(msg.time.replace(' ', 'T')).toLocaleDateString([], { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                )}
                <div className={`flex gap-3 ${msg.isTeam ? '' : 'flex-row-reverse'}`}>
                  {msg.isTeam && (
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-medium flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                  <div className={`max-w-[70%] ${msg.isTeam ? '' : 'text-right'}`}>
                    {msg.isTeam && (
                      <p className="text-gray-400 text-xs mb-1">{msg.from}</p>
                    )}
                    <div className={`inline-block px-4 py-2 rounded-2xl ${
                      msg.isTeam 
                        ? 'bg-white/10 text-white rounded-tl-none' 
                        : 'bg-sky-500 text-white rounded-tr-none'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {msg.attachments.map((file, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs opacity-80">
                              <Icon name="Paperclip" className="w-3 h-3" />
                              {file}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{formatTime(msg.time)}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <div className="px-4 py-2 border-t border-white/10 flex flex-wrap gap-2">
            {attachments.map((file, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                <Icon name="Paperclip" className="w-3 h-3 text-gray-400" />
                <span className="text-gray-300 text-sm">{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <input
              type="file"
              multiple
              onChange={handleFileAttach}
              className="hidden"
              id="message-attachment"
            />
            <label
              htmlFor="message-attachment"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
            >
              <Icon name="Paperclip" className="w-5 h-5" />
            </label>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim() && attachments.length === 0}
              className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="Send" className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Team Sidebar */}
      <div className="w-72 bg-[#111827] border border-white/10 rounded-xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10">
          <h3 className="text-white font-semibold">Your Team</h3>
        </div>
        <div className="flex-1 p-4 space-y-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-medium">
                  {member.avatar}
                </div>
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#111827] ${
                  member.online ? 'bg-emerald-400' : 'bg-gray-500'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{member.name}</p>
                <p className="text-gray-400 text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-4">
            <h4 className="text-sky-400 font-medium text-sm mb-1">Need urgent help?</h4>
            <p className="text-gray-400 text-xs mb-3">Our team typically responds within 2 hours during business hours.</p>
            <a
              href="mailto:support@lockjlab.com"
              className="text-sky-400 hover:text-sky-300 text-sm inline-flex items-center gap-1"
            >
              <Icon name="Mail" className="w-4 h-4" />
              support@lockjlab.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
