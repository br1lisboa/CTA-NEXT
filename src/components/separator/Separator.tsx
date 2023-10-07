interface SeparatorProps {
    text: string;
    className :string
}
export default function Separator(props: SeparatorProps) {
    const { text,className } = props;
    return (
        <div className={`w-full border-b-gray-200 mb-6 ${className}`}>
            <p className="text-[#808080] mb-2 ml-4 font-bold">{text}</p>
            <hr className="mx-auto w-3/4 border-gray-300" />
        </div>
    );
}

