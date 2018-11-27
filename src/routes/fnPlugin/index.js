import withState from './state';

const FnPlugin = (props) => {
    const { handleChange, onChange, value, textNum } = props;
    return (
        <div>
            <div>value: {value}</div>
            <div>textNum: { textNum }</div>
            <input onChange={(e) => handleChange(e, onChange)} />
        </div>
    );
}

export default withState(FnPlugin);
