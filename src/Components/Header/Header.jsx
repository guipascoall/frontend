import {YellowRectangle, Logo} from "./Styles";
import logo1 from '../../Assets/logo1.png';

export default function Header() {
    return <YellowRectangle>
        <Logo  src = {logo1} alt="Logo" />
    </YellowRectangle>;
}