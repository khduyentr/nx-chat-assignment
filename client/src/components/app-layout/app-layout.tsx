import React from "react"
import { Layout } from "../layout/layout";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    return <Layout>{children}</Layout>
}