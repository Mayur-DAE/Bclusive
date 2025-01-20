/* eslint-disable react/prop-types */
const DynamicForm = ({ questions }) => {
    return (
        <form className="">
            {questions.map((question, index) => (
                <div className="bg-white p-4 rounded-lg mb-4" key={index} style={{ marginBottom: '1rem' }}>
                    <label>
                        <strong>{question.text}</strong>
                    </label>
                    <div className="mt-4">
                        {question.type === 'text' && (
                            <input className="h-8 p-1" type="text" placeholder={question.placeholder || ''} />
                        )}
                        {question.type === 'number' && (
                            <input className="h-8 p-1" type="number" placeholder={question.placeholder || ''} />
                        )}
                        {question.type === 'checkbox' && (
                            question.options.map((option, i) => (
                                <label key={i} style={{ marginRight: '1rem' }}>
                                    <input type="checkbox" value={option} /> {option}
                                </label>
                            ))
                        )}
                        {question.type === 'radio' && (
                            question.options.map((option, i) => (
                                <label key={i} style={{ marginRight: '1rem' }}>
                                    <input type="radio" name={`question-${index}`} value={option} /> {option}
                                </label>
                            ))
                        )}
                        {question.type === 'textarea' && (
                            <textarea className="w-full outline outline-zinc-200 p-2" placeholder={question.placeholder || ''}></textarea>
                        )}
                    </div>
                </div>
            ))}
            <button
                className='bg-primary-dark text-white text-base font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary-dark/80'
            >
                Save                    </button>
        </form>
    );
};

// Example Usage
const questions = [
    {
        text: 'How many guests can you accommodate in your event space?',
        type: 'number',
        placeholder: 'Minimum number of guests',
    },
    {
        text: 'How would you describe your event spaces?',
        type: 'checkbox',
        options: ['Banquet', 'Hotel', 'Farmhouse', 'Lawn', 'Resort'],
    },
    {
        text: 'What is the cancellation policy of your services?',
        type: 'textarea',
        placeholder: 'Describe your cancellation policy',
    },
    {
        text: 'Is alcohol permitted at your venue?',
        type: 'radio',
        options: ['Yes', 'No'],
    },
];

export default function Faqs() {
    return <DynamicForm questions={questions} />;
}
