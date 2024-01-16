import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function InputBox() {
    return (
        <div className="flex items-center gap-2 p-6 border-t dark:border-gray-700">
            <Input className="flex-1" placeholder="Type a message" />
            <Button variant="outline">Send</Button>
        </div>
    );
}