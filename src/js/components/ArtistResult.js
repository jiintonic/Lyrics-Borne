import React from "react";
import { Link, browserHistory } from 'react-router';

export default class ArtistResult extends React.Component {
  render() {
    const { artist, imgURL } = this.props;
    // console.log(this.props);
    // console.log(`Well then... artist = ${artist} and imgURL= ${imgURL}`)

    const rowStyle = {
    	paddingLeft: "3px"
    };
    const songColumnStyle = {
    	width: "430px",
    	borderBottom:"2px solid #653CE0",
    	textAlign: "left",
    	padding: "5px"
    };

    const countColumnStyle = {
    	width: "40px",
    	borderBottom:"2px solid #653CE0",
    	padding: "5px"
    }; // 607 672 32CL
    const imgDimension = 40;
    return (
    		<tr style={rowStyle}>
        	<td style={songColumnStyle}>{artist}</td>
          <td style={countColumnStyle}><img src={imgURL} height="30" width="26"/></td>
        </tr>
    );
  }
}
