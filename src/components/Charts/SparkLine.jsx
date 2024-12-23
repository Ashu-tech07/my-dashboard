import React, { PureComponent } from 'react'
import { SparklineComponent , Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';

class SparkLine extends PureComponent {
 render(){
  const {id, color, height, width, data, type, currentColor}= this.props;

  return (
   <SparklineComponent id={id} 
   height={height} 
   width={width} 
   lineWidth={1} 
   valueType='Numeric' 
   fill={color} 
   border={{color:currentColor, width:2}} 
   dataSource={data}
   xName='x' 
   yName="y" 
   type={type}
   tooltipSettings={{
    visible:true,
    format: '${x} : data ${y}',
    trackLineSettings:{
      visible:true
    }
   }} 
   markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }} >
    <Inject services={{SparklineTooltip}}/>
   </SparklineComponent>
  )
}
}

export default SparkLine 