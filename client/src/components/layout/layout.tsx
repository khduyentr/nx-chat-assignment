import {Layout as AntLayout} from "antd"
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { generalTheme } from "../../theme/theme";


interface LayoutProps {
    children: React.ReactNode
}


const { Content } = AntLayout;

export const Layout = ({ children }: LayoutProps) => {
    return <AntLayout>
        <AntLayout style={{ flex: 1, width: '100%', height: '100%', minHeight: '100vh'}}>
            <Header/>

            <Content style={{ padding: `10px ${generalTheme.generalSpace}px`, flex: 1 }}>{children}</Content>
            
            <Footer/>
        </AntLayout>
    </AntLayout>
}