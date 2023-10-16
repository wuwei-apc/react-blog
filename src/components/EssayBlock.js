/**
 @Name: EssayBlock
 @Author: zpc20
 @Date: 2023-10-13 11:50
 @Description:
 @Update: 2023-10-13 11:50
 */ import React, {useEffect, useState} from "react";
import MySerialize from "../util/editor/MySerialize";

function EssayBlock(props){
      return(
          <div className={'EssayBlock'}>
              <MySerialize value={JSON.parse(props.item.context)}></MySerialize>
          </div>
     )
}

export default EssayBlock