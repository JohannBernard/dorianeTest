import { Typography } from "@mui/material";
import Colors from "../../constants/Colors";

interface IProps {
    text:string;
    color?:string;
    noWrap?:boolean;
}

export default function Title(props: IProps) {
    return (
        <Typography 
            variant="h2"
            component="div"
            style={{color: props.color ? props.color : Colors.titleColor}}
            noWrap={props.noWrap}
        >
            {props.text}
        </Typography>
    );
}