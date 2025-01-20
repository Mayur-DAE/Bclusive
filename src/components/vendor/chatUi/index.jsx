import { ArrowLeft, Menu, Search, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const VendorChatUI = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', avatar: 'https://picsum.photos/50/50?random=1' },
        { id: 2, name: 'Jane Smith', avatar: 'https://picsum.photos/50/50?random=2' },
        { id: 3, name: 'Bob Johnson', avatar: 'https://picsum.photos/50/50?random=3' },
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (selectedUser) {
                setMessages(prev => [...prev, { id: Date.now(), text: `Message from ${selectedUser.name}`, sender: 'them' }]);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [selectedUser]);

    const handleSendMessage = () => {
        if (message.trim() && selectedUser) {
            setMessages(prev => [...prev, { id: Date.now(), text: message, sender: 'me' }]);
            setMessage('');
        }
    };

    const handleBack = () => {
        setSelectedUser(null);
    }

    return (
        <div className='relative'>
            {
                !selectedUser && (
                    <button
                        className="lg:hidden p-4 text-gray-700 absolute top-0 left-0 z-10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu />
                    </button>
                )
            }
            <div className={`relative w-full flex h-screen ${!isMenuOpen && 'z-0'}`}>
                <div className={`w-full z-20 lg:w-1/4 bg-gray-100 border-r border-gray-300 flex flex-col min-w-1/4 max-w-xs ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <div className="p-4 flex items-center">
                        <button
                            className="lg:hidden p-4 text-gray-700 z-10"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu />
                        </button>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search users"
                                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                aria-label="Search users"
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {users.map(user => (
                            <div
                                key={user.id}
                                className={`flex items-center p-3 border-b border-gray-200 hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out ${selectedUser?.id === user.id ? 'bg-indigo-200' : ''}`}
                                onClick={() => {
                                    setSelectedUser(user);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full mr-3 transition duration-150 ease-in-out transform hover:scale-110"
                                />
                                <span className="font-medium text-gray-700">{user.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`flex-1 flex flex-col z-20 bg-gray-50 bg-opacity-90 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                    {selectedUser ? (
                        <>
                            <div className="bg-gray-100 bg-opacity-90 border-b border-gray-300 p-4 flex items-center">
                                <button
                                    className="lg:hidden p-4 text-gray-700 z-10"
                                    onClick={() => handleBack()}
                                >
                                    <ArrowLeft />
                                </button>
                                <img
                                    src={selectedUser.avatar}
                                    alt={selectedUser.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <span className="font-medium text-gray-700">{selectedUser.name}</span>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map(msg => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'me' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-100 bg-opacity-90 border-t border-gray-300 p-4">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type a message"
                                        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="ml-2 bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    >
                                        <Send />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Select a user to start chatting
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default VendorChatUI;
