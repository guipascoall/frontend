import logo1 from '../../Assets/logo1.png';
import { YellowRectangle, Logo } from './styles';

export default function HeaderHome() {
    return <YellowRectangle>
        <Logo  src = {logo1} alt="Logo" />
    </YellowRectangle>;
}