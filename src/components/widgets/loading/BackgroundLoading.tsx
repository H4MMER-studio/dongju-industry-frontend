import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

interface BackgroundLoadingProps {
    isLoading: boolean;
}

const BackgroundLoading: React.FC<BackgroundLoadingProps> = ({ isLoading }) => {
    return (
        <Backdrop open={isLoading}>
            <CircularProgress />
        </Backdrop>
    );
};

export default BackgroundLoading;
