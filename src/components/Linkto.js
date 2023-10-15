/**
 @Name: Linkto
 @Author: zpc20
 @Date: 2023-10-13 11:05
 @Description:
 @Update: 2023-10-13 11:05
 */

import {NavLink} from 'react-router-dom'
import React from "react";
import PropTypes from "prop-types";
class Linkto extends React.Component{
      render(){
          return(
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                      ? "link active"
                      : isPending
                          ? "link pending"
                          : "link"} to={this.props.path}>{this.props.content}</NavLink>
          )
      }
}
// 数据校验
Linkto.propTypes={
     path:PropTypes.string,
     content:PropTypes.string
}

export default Linkto