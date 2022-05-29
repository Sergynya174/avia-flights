import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material/";
import { json } from "../utils/Constans";

function Sidebar() {

  const el = json.result.flights;

  const button = el.map((item) => {
      return(
        <FormControlLabel control={<Checkbox />} label={item.flight.carrier.caption} />
      ) 
  })

  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ fontWeight: 900, marginBottom: 2, textColor: "grey" }}
      >
        Сортировать
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Сортировать"
        name="radio-buttons-group"
        sx={{ marginBottom: 5 }}
      >
        <FormControlLabel
          value="возрастание"
          control={<Radio />}
          label=" - по возростанию цены"
        />
        <FormControlLabel
          value="убывание"
          control={<Radio />}
          label=" - по убыванию цены"
        />
        <FormControlLabel
          value="в пути"
          control={<Radio />}
          label=" - по времени в пути"
        />
      </RadioGroup>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ fontWeight: 900, marginBottom: 2, textColor: "grey" }}
      >
        Фильтровать
      </FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label=" - 1 пересадка" />
        <FormControlLabel control={<Checkbox />} label=" - без пересадок" />
      </FormGroup>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          fontWeight: 900,
          marginBottom: 2,
          marginTop: 5,
          textColor: "grey",
        }}
      >
        Цена
      </FormLabel>
      <TextField
        id="outlined-basic"
        label="От"
        variant="outlined"
        sx={{ marginBottom: 2}}
      />
      <TextField id="outlined-basic" label="До" variant="outlined" />
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          fontWeight: 900,
          marginBottom: 2,
          marginTop: 5,
          textColor: "grey",
        }}
      >
        Авиакомпании
      </FormLabel>
      <FormGroup>
        {button}
      </FormGroup>
    </FormControl>
  );
}

export default Sidebar;
