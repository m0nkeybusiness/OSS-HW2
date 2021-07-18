import React from 'react';
import NotificationComponent from '../NotificationComponent';
import data from '../../../data/data.json';

class InfoBlock extends React.Component {
   constructor(props) {
      super(props);
      this.notificationTypes = data.notificationTypes;
   }

   render() {
      return (
         <>
            {this.notificationTypes.map((type) => (
               <NotificationComponent notificationType={type} />
            ))}
         </>
      );
   }
}

export default InfoBlock;
