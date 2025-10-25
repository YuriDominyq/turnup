import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva(
    "font-sans text-gray-700 dark:text-gray-300",
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                bold: "font-bold",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
        },
        defaultVariants: {
            size: "sm",
            weight: "normal",
            align: "left",
        },
    }
);

interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> { }

export function Text({ className, size, weight, align, ...props }: TextProps) {
    return (
        <p className={cn(textVariants({ size, weight, align, className }))} {...props} />
    );
}
