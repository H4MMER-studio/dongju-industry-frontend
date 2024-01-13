import { Skeleton as SkeletonUI } from "@mui/material";
import React from "react";

interface SkeleotonProps {
    variant: "text" | "circular" | "rectangular" | "rounded";
    width?: number;
    height: number;
}

const Skeleoton: React.FC<SkeleotonProps> = ({ variant, width, height }) => {
    return (
        <SkeletonUI variant={variant} width={width ? `${width}px` : "100%"} height={`${height}px`} animation="wave" />
    );
};

export default Skeleoton;
