type TextStreamProps = {
    targetText: string;
};

const TextStream = ({ targetText }: TextStreamProps) => {
    const targetTextArray = targetText.split('');

    return (
        <div className="w-280 text-2xl flex flex-wrap justify-center">
            {targetTextArray.map((letter, idx) => {
                return (
                    <span key={idx} className={`${letter === ' ' ? 'mx-1.5' : 'mx-0.5'} break-words`}>
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default TextStream;
