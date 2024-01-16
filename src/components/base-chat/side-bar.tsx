import { Button } from "@/components/ui/button"

export function SideBar() {
    return (
        <aside className="w-80 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
            <div className="flex items-center justify-start h-16 px-6 border-b dark:border-gray-700">
                <h1 className="text-lg font-semibold dark:text-gray-200">1ZDEVCAMP</h1>
                <h2 className="ml-2 text-sm font-semibold dark:text-gray-200">Memory Hub</h2>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-4 overflow-y-auto">
                <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-700 flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold dark:text-gray-200">John's Memory</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Visited the Grand Canyon</p>
                    </div>
                    <Button className="text-red-500" variant="outline">
                        <TrashIcon className="h-6 w-6" />
                    </Button>
                </div>
                <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-700 flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold dark:text-gray-200">Jane's Memory</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">First day at college</p>
                    </div>
                    <Button className="text-red-500" variant="outline">
                        <TrashIcon className="h-6 w-6" />
                    </Button>
                </div>
            </nav>
        </aside>
    );
}

interface Props {
    className: string;
}

function TrashIcon(props: Props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
        </svg>
    )
}