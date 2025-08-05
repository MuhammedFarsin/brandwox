import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickMessages = [
    "I need help with website design",
    "Tell me about your SEO services",
    "I want a quote for social media marketing",
    "I'm interested in your branding package"
  ];

  const handleSendMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/919207509746?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const handleCustomMessage = () => {
    if (message.trim()) {
      handleSendMessage(message);
      setMessage('');
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-floating bg-green-500 hover:bg-green-600"
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-float border border-border z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Brandwox Solutions</h3>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 mb-4">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you transform your business today?
                </p>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              {quickMessages.map((msg) => (
                <button
                  key={msg}
                  onClick={() => handleSendMessage(msg)}
                  className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                onKeyPress={(e) => e.key === 'Enter' && handleCustomMessage()}
              />
              <button
                onClick={handleCustomMessage}
                className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200"
              >
                Send
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              We'll respond on WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;