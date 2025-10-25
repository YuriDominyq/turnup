import { MapPin, Maximize, RefreshCw, Settings } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Text } from "./ui/text";

interface MapHeaderProps {
    isFullScreen: boolean;
    handleFullscreen: () => void;
    handleRefresh: () => void;
    theme: "light" | "dark" | "satellite";
    setTheme: (val: "light" | "dark" | "satellite") => void;
}

export default function MapHeader({
    isFullScreen,
    handleFullscreen,
    handleRefresh,
    theme,
    setTheme,
}: MapHeaderProps) {

    return (
        <div className='flex flex-col gap-4 p-4 bg-background border-b'>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className="p-2.5 bg-primary rounded-xl">
                        <MapPin className='h-6 w-6 text-primary-foreground' />
                    </div>

                    <div>
                        <Text size='xl' weight='bold'>Driver Tracker</Text>
                        <Badge variant='secondary' className='bg-primary text-primary-foreground'>
                            <div className='w-2 h-2 bg-primary-foreground rounded-full animate-pulse' />
                            Live Data
                        </Badge>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={handleRefresh}
                    >
                        <RefreshCw className='h-4 w-4 mr-2' />
                        Refresh
                    </Button>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant='outline' size='sm'>
                                <Settings className='h-4 w-4 mr-2' />
                                Settings
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Map Settings</DialogTitle>
                                <DialogDescription>
                                    Configure map display options and preferences
                                </DialogDescription>
                            </DialogHeader>
                            <div className='grid gap-4 py-4'>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label htmlFor='theme' className='text-right'>
                                        Theme
                                    </Label>
                                    <Select defaultValue='light' value={theme} onValueChange={setTheme}>
                                        <SelectTrigger className='col-span-3'>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='light'>Light</SelectItem>
                                            <SelectItem value='dark'>Dark</SelectItem>
                                            <SelectItem value='satellite'>Satellite</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Button
                        variant='outline'
                        size='sm'
                        onClick={handleFullscreen}
                    >
                        <Maximize className='h-4 w-4 mr-2' />
                        {isFullScreen ? 'Exit' : 'Fullscreen'}
                    </Button>
                </div>
            </div>

        </div>
    )
}