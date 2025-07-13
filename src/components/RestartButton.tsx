type RestartButtonProps = {
    onClick: () => void;
};

const RestartButton = ({ onClick }: RestartButtonProps) => {
    return (
        <button
            className="bg-blue-500 rounded-lg text-xl px-12 py-4 cursor-pointer hover:bg-blue-500/90"
            onClick={onClick}
        >
            Restart
        </button>
    );
};

export default RestartButton;
