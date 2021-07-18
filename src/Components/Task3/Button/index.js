import './Button.css';

const Button = (props) => {
   return (
      <div className="btn_wrapper">
         <button onClick={props.setClickHandler}>DON'T CLICK ME</button>
      </div>
   );
};

export default Button;
