interface BtnProps {
    text: string,
    onClick?: () => void
}

interface ToggleBtnProps {
    onClickWhenClose?: () => void,
    onClickWhenOpen?: () => void,
}