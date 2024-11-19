import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao({children, onClick}) {
    return (
            <StyleBotaoPadrao onClick={onClick}>
                {children}
            </StyleBotaoPadrao>
    );
}

export default BotaoPadrao;