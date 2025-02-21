export default function ClearButton({ onClear }) {
    return (
        <button className="p-1 flex items-center justify-center hover:bg-gray-300 rounded hover:text-red-500" onClick={onClear}>
            <svg className="size-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    );
}
