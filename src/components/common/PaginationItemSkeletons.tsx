import React from "react";
import { Skeleoton } from "@/components/widgets";
import { Stack } from "@mui/material";

const PaginationItemSkeleons: React.FC = () => {
    return (
        <Stack gap={"16px"}>
            <Skeleoton variant="rounded" height={64} />
            <Skeleoton variant="rounded" height={64} />
            <Skeleoton variant="rounded" height={64} />
            <Skeleoton variant="rounded" height={64} />
        </Stack>
    );
};

export default PaginationItemSkeleons;
