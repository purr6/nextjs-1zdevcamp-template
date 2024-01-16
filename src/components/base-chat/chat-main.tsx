import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function ChatMain() {
    return (
        <div className="flex flex-col flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex items-end gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">John Doe</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Hello, how are you?</p>
                </div>
            </div>
            <div className="flex items-end gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage alt="@janesmith" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Jane Smith</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">I'm good, thanks! How about you?</p>
                </div>
            </div>
            <div className="flex items-end gap-2 justify-end">
                <Avatar className="h-9 w-9">
                    <AvatarImage alt="@user" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">User</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">I'm also good, thanks for asking!</p>
                </div>
            </div>
        </div>
    );
}