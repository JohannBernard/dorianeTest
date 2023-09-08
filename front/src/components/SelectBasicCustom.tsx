import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface IProps {
    id:string;
    label:string;
    value:string;
    onChange:any;
    valuesPossible:Array<string>;
    maxWidth?:number;
}

export default function SelectBasicCustom(props: IProps) {

  return (
    <Box sx={{ minWidth: 120, width:"100%", maxWidth: props.maxWidth ? props.maxWidth : undefined }}>
      <FormControl fullWidth margin="normal" color="primary">
        <InputLabel id={props.id}>{props.label}</InputLabel>
        <Select
          labelId={props.id}
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
            {props.valuesPossible &&
              props.valuesPossible.map(
                  (value: string, key:any) => (
                      <MenuItem key={key} value={value}>{value}</MenuItem>
                  )
              )
            }
        </Select>
      </FormControl>
    </Box>
  );
}