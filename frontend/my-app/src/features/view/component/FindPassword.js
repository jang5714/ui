import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function findPassword(){
    return(
        <div className='Search_div'>
        <h4> 비밀번호 찾기 </h4>
        <div>  
          <h5> 아이디 </h5>
          <TextField id="outlined-basic" label="Id" variant="outlined" />
        </div>
        <div>  
          <h5> 이메일 </h5>
          <div id='search_id_email_div'>
            <TextField id="outlined-basic" label="email" variant="outlined" />
            @
            <TextField id="outlined-basic" label="email" variant="outlined" />
          </div>
        </div>
        <div>
          <input type='button' value='조회하기' name='search_pw_submit'/>
        </div>
      </div>
    )

}