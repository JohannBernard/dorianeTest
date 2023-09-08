import { Typography } from "@mui/material";
import Colors from "../../constants/Colors";

interface IProps {
    text:string;
    color?:string;
    noWrap?:boolean;
}

export default function Details(props: IProps) {
    return (
        <Typography 
            variant="body2"
            component="div"
            style={{color: props.color ? props.color : Colors.inactiveColor}}
            noWrap={props.noWrap}
        >
            {props.text}
        </Typography>
    );
}