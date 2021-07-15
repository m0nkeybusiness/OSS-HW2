import React from 'react';
import BlockType from '../BlockType';

class InfoBlock extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <BlockType type={this.props.type} />;
   }
}

export default InfoBlock;
