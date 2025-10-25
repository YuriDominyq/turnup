import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function MapGuideModal() {
    const routes = [
        { name: "Fortune Towne - Central Market", image: "/fortunetowne.jpg" },
        { name: "Homesite - Central Market", image: "/homesite.jpg" },
        { name: "Granada - Burgos", image: "/burgosgranada.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(false);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? routes.length - 1 : prev - 1));
        setZoom(false);
        setPosition({ x: 0, y: 0 });
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === routes.length - 1 ? 0 : prev + 1));
        setZoom(false);
        setPosition({ x: 0, y: 0 });
    };

    // Drag handlers
    const onMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!zoom) return;
        e.preventDefault();
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!zoom || !dragStart) return;
        setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };

    const onMouseUp = () => setDragStart(null);
    const onMouseLeave = () => setDragStart(null);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Open Map Guide</Button>
            </DialogTrigger>

            <DialogContent className="max-w-5xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-center">
                        Map Route Guide
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        View and navigate through jeepney routes with zoom and pan functionality.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className="relative mt-4 flex flex-col items-center overflow-hidden w-full max-h-[600px] rounded-lg"
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                >
                    <img
                        src={routes[currentIndex].image}
                        alt={routes[currentIndex].name}
                        className={`object-cover cursor-${zoom ? "grab" : "zoom-in"} transition-transform duration-300`}
                        style={{
                            width: "100%",
                            maxHeight: "600px",
                            transform: `scale(${zoom ? 2 : 1}) translate(${position.x / (zoom ? 2 : 1)}px, ${position.y / (zoom ? 2 : 1)}px)`,
                            cursor: zoom ? "grab" : "zoom-in",
                        }}
                        onClick={() => setZoom((prev) => !prev)}
                        onMouseDown={onMouseDown}
                    />
                    <p className="mt-4 text-center text-lg font-medium">{routes[currentIndex].name}</p>

                    <div className="absolute top-1/2 w-full flex justify-between px-6 -translate-y-1/2">
                        <Button variant="outline" size="lg" onClick={prevSlide}>
                            ◀
                        </Button>
                        <Button variant="outline" size="lg" onClick={nextSlide}>
                            ▶
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
