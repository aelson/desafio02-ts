import { Button } from "@chakra-ui/react"

interface ILoginButton {
    onClickEvent: () => void
}

export const LoginButton = ({ onClickEvent }: ILoginButton) => {
    return (
        <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
            onClick={ onClickEvent }
        >
            Login
        </Button>
    );
}