import { Outlet } from "react-router-dom";
import {Container} from "./Styles";
import {Header} from "../../Components";


export default function AppLayout(){
    return (
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    );
}
