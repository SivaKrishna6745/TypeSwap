import { motion } from 'framer-motion';

type FeedbackItem = {
    char: string;
    status: boolean;
    idx: number;
    isExtra: boolean;
};

type FeedbackPanelProps = {
    feedback: Array<FeedbackItem>;
    fontStyle: string;
    targetText: string;
    value: string;
};

const feedbackStyle =
    'text-lg bg-white/20 h-8 w-8 rounded-md flex justify-center items-center transition-all duration-200 ease-in-out';

const FeedbackPanel = ({ feedback, fontStyle, targetText, value }: FeedbackPanelProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl text-white my-2">
                Current Progress:{' '}
                <span className={`${value.length > targetText.length ? 'text-red-700' : ''}`}>{value.length}</span> /{' '}
                {targetText.length} characters
            </div>
            <div className={`${fontStyle} mt-4 flex gap-2 flex-wrap w-[90%]`}>
                {feedback.map((item: FeedbackItem) => {
                    return (
                        <div key={`${item.idx}-${item.char}-${Date.now()}`}>
                            {item.isExtra ? (
                                <span className={`text-gray-400 opacity-50 ${fontStyle} ${feedbackStyle}`}>
                                    {item.char}
                                </span>
                            ) : item.status ? (
                                <span className={`text-green-600 ${fontStyle} ${feedbackStyle}`}>{item.char}</span>
                            ) : (
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, -8, 8, -8, 0] }}
                                    transition={{ duration: 0.3 }}
                                    className={`text-red-500 underline ${fontStyle} ${feedbackStyle}`}
                                >
                                    {item?.char}
                                </motion.span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeedbackPanel;
