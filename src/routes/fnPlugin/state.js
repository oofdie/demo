import { withStateHandlers } from 'recompose';

const initialValue = {
    textNum: 0,
}

const handleChange = props => (e, onChange) => {
    onChange(e.target.value);
    return ({
        textNum: e.target.value.length,
    });
}

export default withStateHandlers(initialValue, {
    handleChange,
})