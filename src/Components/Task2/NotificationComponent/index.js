import React from 'react';
import './NotificationComponent.css';

class NotificationComponent extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div
            className={`${this.props.notificationType.type.toLowerCase()} box`}
         >
            <div className="type">{this.props.notificationType.type}</div>
            <div className="msg">{this.props.notificationType.msg}</div>
         </div>
      );
   }
}

export default NotificationComponent;
